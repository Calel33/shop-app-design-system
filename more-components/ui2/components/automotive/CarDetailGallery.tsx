import React, { useState } from 'react'
import { Car, Settings, DollarSign, Phone, Share2, Heart, ArrowLeft } from 'lucide-react'
import { VehicleGallery } from './VehicleGallery'
import { VehicleSpecs } from './VehicleSpecs'
import { PriceBreakdown } from './PriceBreakdown'
import { ContactDealer } from './ContactDealer'
import { CarDetailGalleryProps, VehicleImage } from '../types/automotive.types'

export const CarDetailGallery: React.FC<CarDetailGalleryProps> = ({
  vehicle,
  images,
  specifications,
  features,
  priceBreakdown,
  financingOptions,
  dealer,
  onContactSubmit,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'specs' | 'pricing' | 'contact'>('gallery')
  const [isFavorite, setIsFavorite] = useState(false)
  const [, setSelectedImage] = useState<VehicleImage | null>(null)

  const tabs = [
    { id: 'gallery', label: 'Photos', icon: Car, count: images.length },
    { id: 'specs', label: 'Specs & Features', icon: Settings, count: features.length },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'contact', label: 'Contact Dealer', icon: Phone }
  ] as const

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleShare = async () => {
    const shareData = {
      title: `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ''}`,
      text: `Check out this ${vehicle.condition} ${vehicle.year} ${vehicle.make} ${vehicle.model} for ${formatPrice(vehicle.price)}`,
      url: window.location.href
    }

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  const getAvailabilityColor = (availability: typeof vehicle.availability) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-50'
      case 'limited': return 'text-yellow-600 bg-yellow-50'
      case 'sold-out': return 'text-red-600 bg-red-50'
      case 'coming-soon': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getAvailabilityText = (availability: typeof vehicle.availability) => {
    switch (availability) {
      case 'available': return 'In Stock'
      case 'limited': return 'Limited Availability'
      case 'sold-out': return 'Sold Out'
      case 'coming-soon': return 'Coming Soon'
      default: return 'Contact Dealer'
    }
  }

  return (
    <div className={`car-detail-gallery max-w-7xl mx-auto ${className}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                  {vehicle.trim && <span className="text-blue-600"> {vehicle.trim}</span>}
                </h1>
                <div className="flex items-center space-x-4 mt-1">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(vehicle.availability)}`}>
                    {getAvailabilityText(vehicle.availability)}
                  </div>
                  <span className="text-sm text-gray-600 capitalize">{vehicle.condition}</span>
                  {vehicle.mileage && (
                    <span className="text-sm text-gray-600">
                      {vehicle.mileage.toLocaleString()} miles
                    </span>
                  )}
                  {vehicle.stockNumber && (
                    <span className="text-sm text-gray-600">Stock #{vehicle.stockNumber}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="text-right mr-4">
                <div className="text-3xl font-bold text-blue-600">{formatPrice(vehicle.price)}</div>
                {vehicle.msrp && vehicle.msrp > vehicle.price && (
                  <div className="text-sm text-gray-500">
                    MSRP: <span className="line-through">{formatPrice(vehicle.msrp)}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorite ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                aria-label="Share vehicle"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-4">
            <nav className="flex space-x-8 border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                  {'count' in tab && (
                    <span className="ml-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <VehicleGallery
              images={images}
              vehicle={vehicle}
              onImageSelect={setSelectedImage}
              className="w-full"
            />
            
            {/* Vehicle Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{vehicle.year}</div>
                  <div className="text-sm text-gray-600">Model Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {vehicle.mileage ? vehicle.mileage.toLocaleString() : 'New'}
                  </div>
                  <div className="text-sm text-gray-600">Miles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 capitalize">
                    {vehicle.condition}
                  </div>
                  <div className="text-sm text-gray-600">Condition</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{images.length}</div>
                  <div className="text-sm text-gray-600">Photos</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <VehicleSpecs
            specifications={specifications}
            features={features}
            className="w-full"
            expandable={true}
          />
        )}

        {activeTab === 'pricing' && (
          <PriceBreakdown
            basePrice={vehicle.price}
            breakdown={priceBreakdown}
            financingOptions={financingOptions}
            className="w-full"
            showCalculator={true}
          />
        )}

        {activeTab === 'contact' && (
          <ContactDealer
            dealer={dealer}
            vehicle={vehicle}
            onSubmit={onContactSubmit}
            className="w-full"
            showTestDrive={vehicle.availability === 'available'}
          />
        )}
      </div>

      {/* Floating Action Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600">{formatPrice(vehicle.price)}</div>
            <div className="text-xs text-gray-600">Starting at</div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Finance
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}