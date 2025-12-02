import { TestimonialsGridProps } from './types';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsGrid = ({
  sectionLabel = 'TESTIMONIALS',
  title,
  description,
  testimonials,
  columns = 2,
  showMeteors = true,
  className = ''
}: TestimonialsGridProps) => {
  const getGridCols = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <section className={`bg-gray-950 dark:bg-black text-gray-200 dark:text-gray-100 min-h-screen p-4 md:p-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-3 py-1 bg-indigo-600/20 dark:bg-indigo-500/20 text-indigo-300 dark:text-indigo-200 rounded-full text-xs font-medium">
            {sectionLabel}
          </span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-2">
            {title}
          </h2>
          <div className="h-px w-16 bg-indigo-500/70 dark:bg-indigo-400/70 mx-auto mb-4"></div>
          {description && (
            <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        {/* Testimonials Grid */}
        <div className={`grid ${getGridCols()} gap-6`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              hasMeteor={showMeteors && (testimonial.hasMeteor ?? (index % 3 === 0))}
              meteorDelay={testimonial.meteorDelay ?? (index * 0.5 + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};