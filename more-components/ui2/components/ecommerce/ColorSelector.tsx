import { Check } from 'lucide-react';
import { ColorSelectorProps } from './types';

export const ColorSelector = ({ variants, selectedId, onSelect }: ColorSelectorProps) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {variants.map((variant) => (
        <button
          key={variant.id}
          onClick={() => variant.inStock && onSelect(variant.id)}
          disabled={!variant.inStock}
          className={`
            w-12 h-12 rounded-full bg-white border-2 shadow-sm flex items-center justify-center
            transition-all duration-200 transform hover:scale-105
            ${selectedId === variant.id ? 'border-blue-600' : 'border-transparent hover:border-gray-300'}
            ${!variant.inStock ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
          aria-label={`Select ${variant.name}`}
          aria-pressed={selectedId === variant.id}
        >
          <div
            className="w-8 h-8 rounded-full border border-gray-200"
            style={{ backgroundColor: variant.color || '#E5E7EB' }}
          >
            {selectedId === variant.id && (
              <div className="w-full h-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white drop-shadow-md" strokeWidth={3} />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};
