/**
 * CardPreview Component
 * Animated 3D credit card preview with mesh gradient background
 */

import React from 'react';
import { CardPreviewProps } from './types';
import { CardChip } from './CardChip';
import { CardLogo } from './CardLogo';
import { MeshGradientBackground } from './MeshGradientBackground';

export const CardPreview: React.FC<CardPreviewProps> = ({
  cardNumber = '',
  cardholderName = '',
  expiryDate = '',
  cardType: _cardType = 'generic',
  maskNumber = false,
  className = '',
}) => {
  // Format card number with spaces
  const formatCardNumber = (num: string): string => {
    if (!num) return '4628  9301  2457  1098'; // Default placeholder
    
    const cleaned = num.replace(/\s/g, '');
    if (maskNumber && cleaned.length > 4) {
      const lastFour = cleaned.slice(-4);
      return `•••• •••• •••• ${lastFour}`;
    }
    
    // Add spaces every 4 digits
    const formatted = cleaned.match(/.{1,4}/g)?.join('  ') || cleaned;
    return formatted.padEnd(22, ' '); // Pad to maintain spacing
  };

  // Format expiry date
  const formatExpiry = (exp: string): string => {
    if (!exp) return '08/27'; // Default placeholder
    return exp;
  };

  // Format cardholder name
  const formatCardholderName = (name: string): string => {
    if (!name) return 'YOUR NAME'; // Default placeholder
    return name.toUpperCase();
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className="relative w-[320px] h-[200px] md:w-[380px] md:h-[240px] rounded-2xl overflow-hidden flex items-center"
        style={{
          backgroundColor: 'rgba(25, 31, 46, 0.98)',
          boxShadow: '0 8px 40px 0 rgba(15, 23, 42, 0.3), 0 1.5px 10px 0 rgba(15, 23, 42, 0.25)',
        }}
        aria-label="Credit card preview"
      >
        {/* Animated Mesh Gradients */}
        <MeshGradientBackground />

        {/* Card Chip */}
        <div className="absolute top-6 left-6 flex flex-col items-center z-10">
          <CardChip className="w-12 h-8" />
        </div>

        {/* Card Logo */}
        <div className="absolute top-6 right-6 flex items-center z-10">
          <CardLogo className="w-10 h-7" />
        </div>

        {/* Card Number */}
        <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-10">
          <span
            className="font-mono text-lg md:text-xl tracking-widest text-white/90 font-semibold select-none"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            {formatCardNumber(cardNumber)}
          </span>
        </div>

        {/* Cardholder Name and Expiry */}
        <div className="absolute w-full left-0 flex justify-between items-end px-6 bottom-5 z-10">
          <div>
            <span className="block uppercase text-[10px] tracking-widest font-bold text-white/55 select-none">
              cardholder
            </span>
            <span className="block text-white/90 text-sm tracking-wide font-medium select-none">
              {formatCardholderName(cardholderName)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="uppercase text-[10px] tracking-widest font-bold text-white/55 select-none">
              expires
            </span>
            <span className="text-white/90 text-sm font-semibold select-none">
              {formatExpiry(expiryDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
