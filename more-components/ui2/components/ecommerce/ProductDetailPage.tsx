import { Star, Check } from 'lucide-react';
import { ProductDetailPageProps, TabConfig } from './types';
import { ProductGallery } from './ProductGallery';
import { ProductInfo } from './ProductInfo';
import { ProductTabs } from './ProductTabs';
import { ReviewCard } from './ReviewCard';

export const ProductDetailPage = ({
  product,
  reviews = [],
  reviewStats,
  brandInfo,
  deliveryOptions,
  onAddToCart,
  onAddToWishlist,
  onShare,
  onBuyNow,
}: ProductDetailPageProps) => {
  const tabs: TabConfig[] = [
    {
      id: 'overview',
      label: 'Details',
      icon: 'info',
      content: (
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Product Details</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">{product.description}</p>
              {product.specifications && product.specifications.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                  <dl className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                        <dt className="text-gray-600">{spec.label}</dt>
                        <dd className="font-medium text-gray-900">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'ingredients',
      label: 'Ingredients',
      icon: 'list',
      content: (
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Full Ingredients List</h3>
          {product.ingredients && product.ingredients.length > 0 ? (
            <>
              <p className="text-gray-700 mb-6">{product.ingredients.join(', ')}</p>
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Ingredients</h4>
                <div className="space-y-4">
                  {product.specifications?.slice(0, 3).map((spec, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">{spec.label}</h5>
                      <p className="text-sm text-gray-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Ingredient information not available.</p>
          )}
        </div>
      ),
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: 'star',
      content: (
        <div>
          {reviewStats && (
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {reviewStats.averageRating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(reviewStats.averageRating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Based on {reviewStats.totalReviews.toLocaleString()} reviews
                </p>
              </div>

              <div className="col-span-2">
                <div className="space-y-2">
                  {Object.entries(reviewStats.ratingBreakdown)
                    .reverse()
                    .map(([rating, count]) => {
                      const percentage = (count / reviewStats.totalReviews) * 100;
                      return (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="text-sm w-8">{rating}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-amber-400 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-12">{count.toLocaleString()}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}

          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">No reviews yet. Be the first to review this product!</p>
          )}
        </div>
      ),
    },
    {
      id: 'howToUse',
      label: 'How to Use',
      icon: 'brush',
      content: (
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Instructions</h3>
          {product.howToUse && product.howToUse.length > 0 ? (
            <ol className="space-y-4">
              {product.howToUse.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-600">Application instructions not available.</p>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="pt-20 pb-4 bg-gray-50/50 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-gray-600" role="navigation" aria-label="Breadcrumb">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Home
              </a>
            </li>
            <span>/</span>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Products
              </a>
            </li>
            <span>/</span>
            <li className="text-gray-900 font-medium" aria-current="page">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Product Gallery */}
          <div className="lg:col-span-7 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <ProductGallery
              images={product.images}
              badges={product.badges}
              productInfo={{
                coverage: 'Buildable Coverage',
                longWear: '12 hours',
              }}
            />
          </div>

          {/* Product Info */}
          <ProductInfo
            product={product}
            brandInfo={brandInfo}
            deliveryOptions={deliveryOptions}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            onShare={onShare}
            onBuyNow={onBuyNow}
          />
        </div>

        {/* Product Details Tabs */}
        <div className="opacity-0 animate-[slideInUp_0.8s_ease-out_0.8s_forwards]">
          <ProductTabs tabs={tabs} defaultTab="overview" />
        </div>
      </main>
    </div>
  );
};
