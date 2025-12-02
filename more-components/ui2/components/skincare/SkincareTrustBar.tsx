// SkincareTrustBar.tsx - Tagline section with inline product images
import type { SkincareTrustBarProps } from '../types/skincare.types';

export function SkincareTrustBar({ text, inlineImages, className = '' }: SkincareTrustBarProps) {
  // Build the text with images at specified positions
  const renderContent = () => {
    const elements: React.ReactNode[] = [];
    
    text.forEach((textPart, index) => {
      elements.push(
        <span
          key={`text-${index}`}
          className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold italic font-serif text-neutral-900 dark:text-white"
        >
          {textPart}
        </span>
      );
      
      // Check if there's an image at this position
      const image = inlineImages.find((img) => img.position === index);
      if (image) {
        elements.push(
          <img
            key={`img-${index}`}
            src={image.src}
            alt={image.alt}
            className="inline-block w-10 h-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-cover ring-white dark:ring-neutral-800 ring-4 rounded-2xl shadow-xl"
            style={{ transform: `rotate(${image.rotation || 0}deg)` }}
          />
        );
      }
    });
    
    return elements;
  };

  return (
    <section className={`bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
