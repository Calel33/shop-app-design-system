import { VirtualCardData } from '../types/payment.types';

interface CardFrontProps {
  cardData: VirtualCardData;
}

export function CardFront({ cardData }: CardFrontProps) {
  const formatCardNumber = (number: string) => {
    const groups = number.match(/(\d{4})(\d{4})(\d{4})(\d{4})/);
    if (!groups) return number;
    
    return [
      groups[1],
      groups[2],
      '●●●●',
      groups[4]
    ].join(' ');
  };

  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Shimmer effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1) 40%, transparent 80%)',
          transform: 'skewX(-15deg)',
          animation: 'shimmer 4s infinite'
        }}
      />
      
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '20px', fontWeight: '300', letterSpacing: '-0.025em', color: 'white' }}>
            {cardData.issuer}
          </div>
          
          {/* Contactless icon */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            style={{ width: '40px', height: '40px', color: 'white', opacity: 0.8 }}
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        
        {/* Chip and Contactless indicators */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
          <div style={{
            width: '40px',
            height: '32px',
            borderRadius: '6px',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #e6b800, #e6e6b8)'
          }}></div>
          <div style={{ marginLeft: '8px', width: '24px', height: '24px' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M8.5 14L7 12.5L10.5 9L12.5 11L16 7.5L17.5 9L12.5 14L10.5 12L8.5 14Z" fill="white" fillOpacity="0.8"/>
            </svg>
          </div>
        </div>
        
        {/* Card number */}
        <div style={{ marginTop: '20px', letterSpacing: '0.1em', fontSize: '14px', fontFamily: 'monospace', color: 'white' }}>
          {formatCardNumber(cardData.cardNumber)}
        </div>
        
        {/* Cardholder and expiry */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '4px', color: 'white' }}>CARD HOLDER</div>
            <div style={{ fontSize: '14px', color: 'white' }}>{cardData.cardHolder.toUpperCase()}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '4px', color: 'white' }}>EXPIRES</div>
            <div style={{ fontSize: '14px', color: 'white' }}>
              {cardData.expiryMonth}/{cardData.expiryYear.slice(-2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
