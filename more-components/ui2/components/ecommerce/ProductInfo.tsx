import { useState } from 'react';
import { Star, Truck, ShieldCheck, Heart, Share, Award, Droplet, Clock, Palette, Leaf, ShoppingBag } from 'lucide-react';
import { ProductInfoProps } from './types';
import { QuantitySelector } from './QuantitySelector';
import { ColorSelector } from './ColorSelector';
import { BrandCard } from './BrandCard';
import { DeliveryOptions } from './DeliveryOptions';

export const ProductInfo = ({
  product,
  brandInfo,
  deliveryOptions,
  onAddToCart,
  onAddToWishlist,
  onShare,
  onBuyNow,
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.id || '');

  const selectedVariantData = product.variants.find(v => v.id === selectedVariant);
  const currentPrice = selectedVariantData?.price || product.price;
  const savings = product.originalPrice ? product.originalPrice - currentPrice : 0;

  const handleAddToCart = () => {
    onAddToCart?.(quantity, selectedVariant);
  };

  return (
    <div className="lg:col-span-5">
      {/* Product Title & Rating */}
      <div className="mb-8 opacity-0 animate-[slideInUp_0.8s_ease-out_0.4s_forwards]">
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{product.description}</p>

        <div className="flex items-center gap-6 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">{product.rating}</span>
          </div>
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">
            {product.reviewCount.toLocaleString()} reviews
          </span>
          {product.badges?.some(b => b.type === 'favorite') && (
            <span className="inline-flex items-center text-xs font-medium text-gray-900 bg-rose-200 rounded-full px-3 py-1">
              <Award className="h-3 w-3 mr-1" />
              Sephora Favorite
            </span>
          )}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-8 opacity-0 animate-[slideInUp_0.8s_ease-out_0.5s_forwards]">
        <div className="flex items-baseline gap-4 mb-4 flex-wrap">
          <span className="text-3xl font-semibold text-gray-900">${currentPrice}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                Save ${savings}
              </span>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex gap-3 text-blue-600 items-center">
            <Truck className="h-4 w-4 flex-shrink-0" />
            <span>Free shipping on $35+</span>
          </div>
          <div className="flex gap-3 text-blue-600 items-center">
            <ShieldCheck className="h-4 w-4 flex-shrink-0" />
            <span>60-day returns</span>
          </div>
        </div>
      </div>

      {/* Variant Selection */}
      {product.variants.length > 0 && (
        <div className="mb-8 opacity-0 animate-[slideInUp_0.8s_ease-out_0.6s_forwards]">
          <h3 className="font-semibold text-gray-900 mb-4">
            Shade: {selectedVariantData?.name}
            {selectedVariantData?.description && ` (${selectedVariantData.description})`}
          </h3>
          <ColorSelector
            variants={product.variants}
            selectedId={selectedVariant}
            onSelect={setSelectedVariant}
          />
          <p className="text-sm text-gray-600 mt-2">{selectedVariantData?.description}</p>
        </div>
      )}

      {/* Key Features */}
      {product.features.length > 0 && (
        <div className="mb-8 opacity-0 animate-[slideInUp_0.8s_ease-out_0.6s_forwards]">
          <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="space-y-3">
            {product.features.map((feature, index) => {
              const icon = index === 0 ? Droplet : index === 1 ? Clock : index === 2 ? Palette : Leaf;
              const IconComponent = icon;
              return (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                  <IconComponent className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Quantity & Add to Cart */}
      <div className="border-t border-gray-200 pt-8 mb-8 opacity-0 animate-[slideInUp_0.8s_ease-out_0.7s_forwards]">
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <label className="text-sm font-medium text-gray-900">Quantity:</label>
          <QuantitySelector
            value={quantity}
            onChange={setQuantity}
            disabled={!product.stock.inStock}
          />
          <span className={`text-sm font-medium ${product.stock.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock.inStock ? 'In stock' : 'Out of stock'}
          </span>
        </div>

        <div className="w-full mb-6 space-y-3">
          <button
            onClick={handleAddToCart}
            disabled={!product.stock.inStock}
            className="flex gap-3 font-semibold text-white bg-rose-500 w-full rounded-xl py-4 px-6 items-center justify-center hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingBag className="h-5 w-5" />
            Add to Basket
          </button>
          {onBuyNow && (
            <button
              onClick={onBuyNow}
              disabled={!product.stock.inStock}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy with ShopPay
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {onAddToWishlist && (
            <button
              onClick={onAddToWishlist}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Heart className="h-4 w-4" />
              <span className="text-sm">Save to Loves</span>
            </button>
          )}
          {onShare && (
            <button
              onClick={onShare}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Share className="h-4 w-4" />
              <span className="text-sm">Share</span>
            </button>
          )}
        </div>
      </div>

      {/* Brand Info */}
      {brandInfo && (
        <div className="mb-6 opacity-0 animate-[slideInUp_0.8s_ease-out_0.7s_forwards]">
          <BrandCard brand={brandInfo} />
        </div>
      )}

      {/* Delivery Info */}
      {deliveryOptions && deliveryOptions.length > 0 && (
        <div className="opacity-0 animate-[slideInUp_0.8s_ease-out_0.7s_forwards]">
          <DeliveryOptions options={deliveryOptions} />
        </div>
      )}
    </div>
  );
};
