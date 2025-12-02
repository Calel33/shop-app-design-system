import { useState } from 'react';
import { Droplet, Clock } from 'lucide-react';
import { ProductGalleryProps } from './types';

export const ProductGallery = ({
  images,
  badges,
  productInfo,
  onImageChange,
}: ProductGalleryProps) => {
  const [activeImageId, setActiveImageId] = useState(images[0]?.id || '');

  const handleImageChange = (imageId: string) => {
    setActiveImageId(imageId);
    onImageChange?.(imageId);
  };

  const activeImage = images.find(img => img.id === activeImageId) || images[0];

  return (
    <div className="sticky top-24">
      <div className="flex gap-4">
        {/* Thumbnail Gallery - Vertical */}
        <div className="flex flex-col gap-3">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => handleImageChange(image.id)}
              className={`
                rounded-xl overflow-hidden transition-all duration-200 transform hover:scale-105
                ${activeImageId === image.id ? 'border-2 border-blue-600' : 'border border-gray-200 hover:border-gray-400'}
              `}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="w-16 h-16 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-100 flex-1 rounded-3xl shadow-2xl">
          <img
            src={activeImage.url}
            alt={activeImage.alt}
            className="aspect-square w-full object-cover transition-transform duration-500 ease-out hover:scale-110 cursor-zoom-in"
          />

          {/* Floating UI Elements */}
          {productInfo?.coverage && (
            <div className="absolute top-6 right-6 flex items-center gap-2 backdrop-blur-xl bg-white/80 text-gray-900 px-3 py-2 rounded-full text-sm font-medium">
              <Droplet className="w-4 h-4" />
              <span>{productInfo.coverage}</span>
            </div>
          )}

          {badges && badges.length > 0 && (
            <div className="absolute top-6 left-6 text-sm font-semibold text-white bg-rose-500 rounded-full px-4 py-2">
              {badges[0].label}
            </div>
          )}

          {productInfo?.longWear && (
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/20 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-900/60 mb-1">Long-wear</p>
                  <p className="text-2xl font-semibold text-gray-900">{productInfo.longWear}</p>
                  <p className="text-sm text-gray-900/60">all-day wear</p>
                </div>
                <div className="flex bg-white/60 w-12 h-12 rounded-full items-center justify-center">
                  <Clock className="h-6 w-6 text-gray-900" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
