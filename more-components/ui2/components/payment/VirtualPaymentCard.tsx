import { useState } from 'react';
import { VirtualPaymentCardProps } from '../types/payment.types';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';

export function VirtualPaymentCard({ 
  cardData, 
  onFlip, 
  enableFlip = true,
  className = ''
}: VirtualPaymentCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!enableFlip) return;
    
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    onFlip?.(newFlippedState);
  };

  return (
    <div className={`relative mx-auto w-full max-w-[380px] h-[220px] ${className}`}>
      <div
        className={`relative w-full h-full ${
          enableFlip ? 'cursor-pointer' : 'cursor-default'
        }`}
        onClick={handleFlip}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <CardFront cardData={cardData} />
        </div>
        
        {/* Back face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <CardBack cardData={cardData} />
        </div>
      </div>
    </div>
  );
}
