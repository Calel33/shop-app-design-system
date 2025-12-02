import { VirtualCardData } from '../types/payment.types';

interface CardBackProps {
  cardData: VirtualCardData;
}

export function CardBack({ cardData }: CardBackProps) {
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
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transform: 'rotateY(180deg)'
      }}
    >
      {/* Magnetic strip */}
      <div style={{ width: '100%', height: '48px', background: 'black', marginTop: '24px' }}></div>
      
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 24px)' }}>
        {/* CVV section */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '8px', 
            width: '64px', 
            borderRadius: '4px', 
            textAlign: 'right'
          }}>
            <span style={{ fontFamily: 'monospace', fontSize: '14px', color: 'white' }}>{cardData.cvv}</span>
          </div>
          <div style={{ marginLeft: '8px', fontSize: '12px', opacity: 0.7, color: 'white' }}>CVV</div>
        </div>
        
        {/* Terms and conditions */}
        <div style={{ fontSize: '12px', opacity: 0.7, lineHeight: '1.5', marginTop: '16px', color: 'white' }}>
          This card is issued by {cardData.issuer} Financial pursuant to license by Global Card Network.
        </div>
        
        {/* Footer */}
        <div style={{ marginTop: 'auto', paddingBottom: '8px', fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: 'white' }}>Card ID: {cardData.cardId}</span>
          <span style={{ color: '#93c5fd' }}>{cardData.issuer.toLowerCase()}.financial</span>
        </div>
      </div>
    </div>
  );
}
