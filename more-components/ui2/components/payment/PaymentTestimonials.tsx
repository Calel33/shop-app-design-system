import { Star } from 'lucide-react';
import { PaymentTestimonialsProps } from './types';
import { GlassCard } from './GlassCard';

export const PaymentTestimonials = ({
  testimonial,
  stats,
  className = '',
}: PaymentTestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/40'}`}
      />
    ));
  };

  return (
    <section className={`relative py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <GlassCard className="group p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">{renderStars(testimonial.rating)}</div>
                <span className="text-sm text-muted-foreground">{testimonial.rating}.0</span>
              </div>
              <h3 className="text-2xl lg:text-3xl mb-6 leading-tight font-bold text-card-foreground">
                {testimonial.quote}
              </h3>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-card-foreground">{testimonial.author.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="group p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 border border-border/30 bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">{stat.label}</p>
                <p className="text-4xl mb-2 font-bold text-card-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
