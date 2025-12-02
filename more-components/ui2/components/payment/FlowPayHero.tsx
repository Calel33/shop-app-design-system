import { Wifi, Smartphone } from 'lucide-react';
import { FlowPayHeroProps, PaymentCardData } from './types';

const CardIcon = ({ type }: { type: 'wifi' | 'contactless' | 'smartphone' }) => {
  if (type === 'wifi') return <Wifi className="w-6 h-6 text-white/60" />;
  if (type === 'smartphone') return <Smartphone className="w-6 h-6 text-white/60" />;
  return <div className="w-7 h-7 text-white/60">⟨⟩</div>;
};

const AnimatedCard = ({ card, index }: { card: PaymentCardData; index: number }) => {
  const getCardGradient = (variant?: string) => {
    if (variant === 'premium') return 'from-gray-500/20 via-blue-500/20 to-blue-500/20';
    if (variant === 'pro') return 'from-purple-500/20 via-gray-500/20 to-purple-500/20';
    return 'from-blue-500/20 via-gray-500/20 to-purple-500/20';
  };

  const getSizeClasses = (variant?: string) => {
    if (variant === 'premium') return 'w-80 h-48';
    return 'w-72 h-44';
  };

  const rotation = card.rotation ?? (index === 0 ? -12 : index === 2 ? 8 : 0);
  const hoverRotation = rotation > 0 ? rotation - 4 : rotation > -10 ? rotation + 4 : rotation;

  return (
    <div
      className={`${getSizeClasses(card.variant)} rounded-2xl overflow-hidden transform transition-transform duration-500 relative`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${hoverRotation}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg)`;
      }}
    >
      <div className="absolute inset-0 glass border border-white/10" />
      <div className={`absolute inset-0 bg-gradient-to-br ${getCardGradient(card.variant)}`} />
      <div className="relative h-full flex flex-col p-6 justify-between">
        <div className="flex justify-between items-start">
          <div className="w-12 h-8 bg-gradient-to-br from-yellow-400/30 to-yellow-600/40 rounded" />
          <CardIcon type={card.icon || 'wifi'} />
        </div>
        <div>
          <p className="text-lg font-mono tracking-wider text-white">{card.number}</p>
          <div className="flex justify-between items-end mt-2">
            <div>
              <p className="text-xs text-white/60">
                {card.variant === 'premium' ? 'EXPIRES' : 'VALID THRU'}
              </p>
              <p className={`${card.variant === 'premium' ? 'text-base' : 'text-sm'} font-medium text-white`}>
                {card.expiryDate}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/60">{card.cardholderName.toUpperCase()}</p>
              <p className={`${card.variant === 'premium' ? 'text-base font-semibold' : 'text-sm font-medium'} text-white`}>
                {card.variant === 'pro' ? 'FlowPay Pro' : card.variant === 'premium' ? 'FlowPay Pro' : 'FlowPay'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlowPayHero = ({
  badge,
  headline,
  highlightedText,
  description,
  primaryCta,
  secondaryCta,
  cards,
  showGridBackground = true,
  className = '',
}: FlowPayHeroProps) => {
  const defaultCards: PaymentCardData[] = [
    {
      number: '•••• •••• •••• 4829',
      cardholderName: 'Sarah Chen',
      expiryDate: '08/28',
      type: 'visa',
      variant: 'standard',
      icon: 'wifi',
    },
    {
      number: '•••• •••• •••• 7391',
      cardholderName: 'Alex Morgan',
      expiryDate: '12/27',
      type: 'mastercard',
      variant: 'premium',
      icon: 'contactless',
    },
    {
      number: '•••• •••• •••• 5067',
      cardholderName: 'Jamie Taylor',
      expiryDate: '03/29',
      type: 'amex',
      variant: 'standard',
      icon: 'smartphone',
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <section className={`relative isolate lg:pt-20 pt-8 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-20 lg:pb-32 text-center lg:px-8">
        {badge && (
          <div className="opacity-0 animate-fade-in delay-400 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8 bg-white/5 border-white/10 text-white/80">
              {badge.icon}
              {badge.text}
            </div>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight opacity-0 animate-slide-up delay-500">
          {headline}
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {highlightedText}
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-0 animate-slide-up delay-600 text-white/70">
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-slide-up delay-700">
          <a
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium transition-all transform hover:scale-105 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
          >
            {primaryCta.icon}
            {primaryCta.text}
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-lg border px-8 py-4 text-base font-medium transition-all border-white/20 hover:bg-white/10 text-white"
            >
              {secondaryCta.icon}
              {secondaryCta.text}
            </a>
          )}
        </div>

        <div className="relative mt-16 lg:mt-24 opacity-0 animate-scale-in delay-800">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            {displayCards.map((card, index) => (
              <AnimatedCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>

      {showGridBackground && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      )}
    </section>
  );
};
