import { Shield, Leaf, Star } from 'lucide-react';
import { BrandCardProps } from './types';

export const BrandCard = ({ brand, onShopBrand }: BrandCardProps) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{brand.name}</h4>
          
          {brand.rating && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < Math.floor(brand.rating!) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span>
                {brand.rating} ({brand.ratingCount?.toLocaleString()} ratings)
              </span>
            </div>
          )}
          
          {brand.badges && brand.badges.length > 0 && (
            <div className="flex items-center gap-4 text-xs text-gray-500">
              {brand.badges.includes('clean') && (
                <span className="flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Clean at Sephora
                </span>
              )}
              {brand.badges.includes('vegan') && (
                <span className="flex items-center gap-1">
                  <Leaf className="h-3 w-3" />
                  Vegan & Cruelty-Free
                </span>
              )}
            </div>
          )}
        </div>
        
        {onShopBrand && (
          <button
            onClick={onShopBrand}
            className="text-sm text-blue-600 hover:underline"
          >
            Shop Brand
          </button>
        )}
      </div>
    </div>
  );
};
