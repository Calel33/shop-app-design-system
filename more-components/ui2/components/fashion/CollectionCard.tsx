import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { CollectionItem } from './types';

interface CollectionCardProps {
  item: CollectionItem;
  onLike?: (id: string) => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ item, onLike }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(item.id);
  };

  const cardHeight = item.height || (item.featured ? 480 : 320);

  return (
    <div className="break-inside-avoid relative group mb-6 hover:-translate-y-1 transition-all duration-300">
      <div
        className="relative backdrop-blur-xl bg-white/60 border border-slate-200/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ height: `${cardHeight}px` }}
      >
        {/* Image */}
        <div className="relative w-full h-full overflow-hidden">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-slate-100 animate-pulse" />
          )}
          <img
            src={item.imageUrl}
            alt={item.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isImageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        {item.featured ? (
          <div className="absolute bottom-8 left-8 right-8 text-white z-10">
            <span className="inline-block px-3 py-1 rounded-full backdrop-blur-xl bg-white/20 text-sm font-medium mb-4">
              {item.category}
            </span>
            <h3 className="text-3xl font-light font-serif mb-2">{item.title}</h3>
            <p className="text-lg text-white/80">{item.description}</p>
          </div>
        ) : (
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <span className="text-sm font-medium">{item.title}</span>
            <p className="text-xs mt-1 text-white/80">{item.description}</p>
          </div>
        )}

        {/* Like Button */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={handleLike}
            className="backdrop-blur-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 rounded-xl p-3 transition-all duration-300"
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <Heart
              className={`h-5 w-5 transition-all ${
                isLiked ? 'fill-current text-red-500' : ''
              }`}
            />
          </button>
        </div>

        {/* Badge for featured/new items */}
        {item.featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="backdrop-blur-xl px-2 py-1 rounded-full text-xs font-medium bg-amber-600 text-white">
              Featured
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
