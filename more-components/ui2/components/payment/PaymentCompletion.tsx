/**
 * PaymentCompletion Component
 * Main payment completion portal with animated card preview and form
 */

import React, { useState } from 'react';
import { PaymentCompletionProps, PaymentCompletionFormData, CountryOption } from './types';
import { CardPreview } from './CardPreview';
import { PaymentCompletionForm } from './PaymentCompletionForm';
import { useCardFormatter } from '../../hooks/useCardFormatter';

const defaultCountries: CountryOption[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
];

export const PaymentCompletion: React.FC<PaymentCompletionProps> = ({
  title = 'Complete Your Payment',
  amount,
  currency = 'USD',
  onSubmit,
  countries = defaultCountries,
  securityMessage,
  className = '',
  cardPreviewEnabled = true,
  maskCardNumber = false,
}) => {
  const { detectCardType } = useCardFormatter();
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState<Partial<PaymentCompletionFormData>>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
  });

  const handleCardDataChange = (data: Partial<PaymentCompletionFormData>) => {
    setCardData(data);
  };

  const handleSubmit = async (data: PaymentCompletionFormData) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  const cardType = detectCardType(cardData.cardNumber || '');

  return (
    <div className={`min-h-screen py-12 px-4 md:px-0 bg-black text-gray-200 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 text-center">
          {title}
        </h1>

        <div className="bg-zinc-900 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-zinc-800">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Card Preview */}
            {cardPreviewEnabled && (
              <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                <CardPreview
                  cardNumber={cardData.cardNumber}
                  cardholderName={cardData.cardholderName}
                  expiryDate={cardData.expiryDate}
                  cardType={cardType === 'unknown' ? 'generic' : cardType}
                  maskNumber={maskCardNumber}
                />
              </div>
            )}

            {/* Payment Form */}
            <div className={`w-full ${cardPreviewEnabled ? 'md:w-1/2' : ''}`}>
              <PaymentCompletionForm
                amount={amount}
                currency={currency}
                countries={countries}
                securityMessage={securityMessage}
                onSubmit={handleSubmit}
                loading={loading}
                onCardDataChange={handleCardDataChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
