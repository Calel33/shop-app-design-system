import { useState, FormEvent } from 'react';
import { Lock, Shield, HelpCircle } from 'lucide-react';
import type { PaymentFormProps, PaymentFormData, FormState } from './types';
import { useCardValidation } from '../../hooks/useCardValidation';
import { useCardFormatter } from '../../hooks/useCardFormatter';
import { VisaIcon, MastercardIcon } from './CardBrandIcons';

export const PaymentForm = ({
  title = 'Complete your payment',
  subtitle = 'Enter your card details to process your payment',
  amount,
  onSubmit,
  securityMessage = 'Your payment information is encrypted and secure',
  className = '',
}: PaymentFormProps) => {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
  });

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    cardholderName: '',
  });

  const [touched, setTouched] = useState({
    cardNumber: false,
    expiryDate: false,
    securityCode: false,
    cardholderName: false,
  });

  const { validateCardNumber, validateExpiryDate, validateSecurityCode, validateCardholderName } =
    useCardValidation();

  const { handleCardNumberChange, handleExpiryDateChange, handleSecurityCodeChange, getRawDigits, detectCardType } = useCardFormatter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      cardNumber: true,
      expiryDate: true,
      securityCode: true,
      cardholderName: true,
    });

    const rawCardNumber = getRawDigits(formData.cardNumber);
    const rawExpiryDate = getRawDigits(formData.expiryDate);
    const cardType = detectCardType(rawCardNumber);

    const isCardValid = validateCardNumber(rawCardNumber);
    const isExpiryValid = validateExpiryDate(rawExpiryDate);
    const isCvcValid = validateSecurityCode(formData.securityCode, cardType);
    const isNameValid = validateCardholderName(formData.cardholderName);

    if (!isCardValid || !isExpiryValid || !isCvcValid || !isNameValid) {
      setFormState({ status: 'error', error: 'Please fix the errors above' });
      return;
    }

    setFormState({ status: 'loading' });

    try {
      const paymentData: PaymentFormData = {
        cardNumber: rawCardNumber,
        expiryDate: rawExpiryDate,
        securityCode: formData.securityCode,
        cardholderName: formData.cardholderName,
      };

      const result = await onSubmit(paymentData);

      if (result.success) {
        setFormState({ status: 'success' });
        setFormData({
          cardNumber: '',
          expiryDate: '',
          securityCode: '',
          cardholderName: '',
        });
        setTouched({
          cardNumber: false,
          expiryDate: false,
          securityCode: false,
          cardholderName: false,
        });
      } else {
        setFormState({ status: 'error', error: result.error || 'Payment failed' });
      }
    } catch (error) {
      setFormState({
        status: 'error',
        error: error instanceof Error ? error.message : 'Payment failed',
      });
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));

    const rawCardNumber = getRawDigits(formData.cardNumber);
    const rawExpiryDate = getRawDigits(formData.expiryDate);
    const cardType = detectCardType(rawCardNumber);

    switch (field) {
      case 'cardNumber':
        validateCardNumber(rawCardNumber);
        break;
      case 'expiryDate':
        validateExpiryDate(rawExpiryDate);
        break;
      case 'securityCode':
        validateSecurityCode(formData.securityCode, cardType);
        break;
      case 'cardholderName':
        validateCardholderName(formData.cardholderName);
        break;
    }
  };

  const cardType = detectCardType(getRawDigits(formData.cardNumber));
  
  // Get validation results for each field
  const cardValidation = validateCardNumber(getRawDigits(formData.cardNumber));
  const expiryValidation = validateExpiryDate(getRawDigits(formData.expiryDate));
  const cvcValidation = validateSecurityCode(formData.securityCode, cardType);
  const nameValidation = validateCardholderName(formData.cardholderName);
  
  const showError = (field: keyof typeof touched) => {
    if (!touched[field]) return false;
    switch (field) {
      case 'cardNumber': return !cardValidation.isValid;
      case 'expiryDate': return !expiryValidation.isValid;
      case 'securityCode': return !cvcValidation.isValid;
      case 'cardholderName': return !nameValidation.isValid;
      default: return false;
    }
  };

  const inputClasses = (field: keyof typeof touched) =>
    `w-full px-4 py-3 border ${
      showError(field) ? 'border-destructive' : 'border-border/40'
    } rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-card text-foreground placeholder:text-muted-foreground/70`;

  return (
    <div className={className}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-2">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Card number</label>
          <div className="relative">
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: handleCardNumberChange(e.target.value) }))}
              onBlur={() => handleBlur('cardNumber')}
              disabled={formState.status === 'loading'}
              className={inputClasses('cardNumber')}
            />
            <div className="absolute right-3 top-3 flex space-x-2">
              <VisaIcon className="w-8 h-6 opacity-50" />
              <MastercardIcon className="w-8 h-6 opacity-50" />
            </div>
          </div>
          {showError('cardNumber') && (
            <p className="text-xs text-destructive mt-1">{cardValidation.error}</p>
          )}
        </div>

        {/* Expiry and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Expiration date</label>
            <input
              type="text"
              placeholder="MM / YY"
              value={formData.expiryDate}
              onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: handleExpiryDateChange(e.target.value) }))}
              onBlur={() => handleBlur('expiryDate')}
              disabled={formState.status === 'loading'}
              className={inputClasses('expiryDate')}
            />
            {showError('expiryDate') && (
              <p className="text-xs text-destructive mt-1">{expiryValidation.error}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Security code</label>
            <div className="relative">
              <input
                type="text"
                placeholder="CVC"
                value={formData.securityCode}
                onChange={(e) => setFormData(prev => ({ ...prev, securityCode: handleSecurityCodeChange(e.target.value, cardType === 'amex' ? 4 : 3) }))}
                onBlur={() => handleBlur('securityCode')}
                disabled={formState.status === 'loading'}
                className={inputClasses('securityCode')}
              />
              <div className="absolute right-3 top-3 text-muted-foreground">
                <HelpCircle className="w-5 h-5" />
              </div>
            </div>
            {showError('securityCode') && (
              <p className="text-xs text-destructive mt-1">{cvcValidation.error}</p>
            )}
          </div>
        </div>

        {/* Cardholder Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Name on card</label>
          <input
            type="text"
            placeholder="Your name"
            value={formData.cardholderName}
            onChange={(e) => setFormData(prev => ({ ...prev, cardholderName: e.target.value }))}
            onBlur={() => handleBlur('cardholderName')}
            disabled={formState.status === 'loading'}
            className={inputClasses('cardholderName')}
          />
          {showError('cardholderName') && (
            <p className="text-xs text-destructive mt-1">{nameValidation.error}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={formState.status === 'loading'}
            className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition font-medium flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{formState.status === 'loading' ? 'Processing...' : `Pay $${amount.toFixed(2)}`}</span>
            <Lock className="w-4 h-4 ml-2" />
          </button>
          <p className="text-xs text-center text-muted-foreground mt-3 flex items-center justify-center">
            <Shield className="w-4 h-4 mr-1 text-muted-foreground" />
            {securityMessage}
          </p>
          {formState.status === 'error' && formState.error && (
            <p className="text-sm text-destructive text-center mt-2">{formState.error}</p>
          )}
          {formState.status === 'success' && (
            <p className="text-sm text-secondary text-center mt-2">Payment successful!</p>
          )}
        </div>
      </form>
    </div>
  );
};
