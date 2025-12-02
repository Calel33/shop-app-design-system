/**
 * PaymentCompletionForm Component
 * Form component with validation for payment completion
 */

import React, { useState } from 'react';
import { PaymentCompletionFormData, PaymentCompletionValidation, CountryOption } from './types';
import { GlassInput } from './GlassInput';
import { GradientButton } from './GradientButton';
import { CountrySelector } from './CountrySelector';
import { useCardFormatter } from '../../hooks/useCardFormatter';
import { useCardValidation } from '../../hooks/useCardValidation';

interface PaymentCompletionFormProps {
  amount: number;
  currency?: string;
  countries: CountryOption[];
  securityMessage?: string;
  onSubmit: (data: PaymentCompletionFormData) => void;
  loading?: boolean;
  onCardDataChange?: (data: Partial<PaymentCompletionFormData>) => void;
}

export const PaymentCompletionForm: React.FC<PaymentCompletionFormProps> = ({
  amount,
  currency = 'USD',
  countries,
  securityMessage = 'Your payment is secured with industry-standard encryption.',
  onSubmit,
  loading = false,
  onCardDataChange,
}) => {
  const { formatCardNumber, formatExpiryDate, formatCVC, detectCardType } = useCardFormatter();
  const {
    validateCardholderName,
    validateCardNumber,
    validateExpiryDate,
    validateCVC,
    validateCountry,
  } = useCardValidation();

  const [formData, setFormData] = useState<PaymentCompletionFormData>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    country: '',
  });

  const [validation, setValidation] = useState<PaymentCompletionValidation>({
    cardholderName: { isValid: false, touched: false },
    cardNumber: { isValid: false, touched: false },
    expiryDate: { isValid: false, touched: false },
    cvc: { isValid: false, touched: false },
    country: { isValid: false, touched: false },
  });

  const handleFieldChange = (field: keyof PaymentCompletionFormData, value: string) => {
    let formattedValue = value;

    // Apply formatting
    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (field === 'cvc') {
      formattedValue = formatCVC(value);
    }

    const newFormData = { ...formData, [field]: formattedValue };
    setFormData(newFormData);

    // Notify parent of card data changes (for live preview)
    if (onCardDataChange) {
      onCardDataChange(newFormData);
    }
  };

  const handleFieldBlur = (field: keyof PaymentCompletionFormData) => {
    const value = formData[field];
    let validationResult;
    const cardType = detectCardType(formData.cardNumber);

    // Validate field
    switch (field) {
      case 'cardholderName':
        validationResult = validateCardholderName(value);
        break;
      case 'cardNumber':
        validationResult = validateCardNumber(value);
        break;
      case 'expiryDate':
        validationResult = validateExpiryDate(value);
        break;
      case 'cvc':
        validationResult = validateCVC(value, cardType);
        break;
      case 'country':
        validationResult = validateCountry(value);
        break;
      default:
        validationResult = { isValid: true };
    }

    setValidation((prev) => ({
      ...prev,
      [field]: {
        ...validationResult,
        touched: true,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const cardType = detectCardType(formData.cardNumber);
    const allValidation: PaymentCompletionValidation = {
      cardholderName: { ...validateCardholderName(formData.cardholderName), touched: true },
      cardNumber: { ...validateCardNumber(formData.cardNumber), touched: true },
      expiryDate: { ...validateExpiryDate(formData.expiryDate), touched: true },
      cvc: { ...validateCVC(formData.cvc, cardType), touched: true },
      country: { ...validateCountry(formData.country), touched: true },
    };

    setValidation(allValidation);

    // Check if all fields are valid
    const isFormValid = Object.values(allValidation).every((field) => field.isValid);

    if (isFormValid) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-100 mb-6">Card Details</h2>
      <form onSubmit={handleSubmit}>
        <GlassInput
          label="Cardholder Name"
          id="cardholderName"
          placeholder="As shown on card"
          value={formData.cardholderName}
          onChange={(value) => handleFieldChange('cardholderName', value)}
          onBlur={() => handleFieldBlur('cardholderName')}
          error={validation.cardholderName.error}
          touched={validation.cardholderName.touched}
          required
          className="mb-4"
        />

        <GlassInput
          label="Card Number"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={(value) => handleFieldChange('cardNumber', value)}
          onBlur={() => handleFieldBlur('cardNumber')}
          error={validation.cardNumber.error}
          touched={validation.cardNumber.touched}
          required
          maxLength={23}
          className="mb-4"
        />

        <div className="flex gap-4 mb-6">
          <GlassInput
            label="Expiry Date"
            id="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={(value) => handleFieldChange('expiryDate', value)}
            onBlur={() => handleFieldBlur('expiryDate')}
            error={validation.expiryDate.error}
            touched={validation.expiryDate.touched}
            required
            maxLength={5}
            className="w-1/2"
          />
          <GlassInput
            label="CVC"
            id="cvc"
            placeholder="123"
            value={formData.cvc}
            onChange={(value) => handleFieldChange('cvc', value)}
            onBlur={() => handleFieldBlur('cvc')}
            error={validation.cvc.error}
            touched={validation.cvc.touched}
            required
            maxLength={4}
            className="w-1/2"
          />
        </div>

        <CountrySelector
          label="Country"
          id="country"
          value={formData.country}
          onChange={(value) => handleFieldChange('country', value)}
          onBlur={() => handleFieldBlur('country')}
          countries={countries}
          error={validation.country.error}
          touched={validation.country.touched}
          required
          className="mb-6"
        />

        <GradientButton type="submit" loading={loading} disabled={loading}>
          Pay {currency} ${amount.toFixed(2)}
        </GradientButton>
      </form>

      <div className="text-center text-gray-400 text-sm mt-4">
        <p>{securityMessage}</p>
      </div>
    </div>
  );
};
