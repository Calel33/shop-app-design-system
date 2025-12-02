import { Star, ThumbsUp } from 'lucide-react';
import { ReviewCardProps } from './types';

export const ReviewCard = ({ review, onHelpful }: ReviewCardProps) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-purple-700">
              {review.author.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-900">{review.author}</span>
              {review.verified && (
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  Verified Purchase
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < review.rating ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
          </div>
        </div>
      </div>
      
      <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
      <p className="text-sm text-gray-700 mb-4">{review.content}</p>
      
      {(review.skinType || review.ageRange) && (
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          {review.skinType && <span>Skin Type: {review.skinType}</span>}
          {review.ageRange && <span>Age: {review.ageRange}</span>}
        </div>
      )}
      
      {onHelpful && (
        <button
          onClick={() => onHelpful(review.id)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ThumbsUp className="h-3 w-3" />
          Helpful {review.helpful ? `(${review.helpful})` : ''}
        </button>
      )}
    </div>
  );
};
