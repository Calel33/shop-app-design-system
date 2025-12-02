import { PaymentFeatureGridProps } from './types';
import { GlassCard } from './GlassCard';

export const PaymentFeatureGrid = ({
  headline,
  description,
  features,
  className = '',
}: PaymentFeatureGridProps) => {
  return (
    <section className={`relative py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
            {headline}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">{description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard key={index} hover className="p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
