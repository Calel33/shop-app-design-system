import React, { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X, Maximize } from 'lucide-react'
import { VehicleGalleryProps, VehicleImage, GalleryState } from '../types/automotive.types'

export const VehicleGallery: React.FC<VehicleGalleryProps> = ({
  images,
  vehicle,
  onImageSelect,
  className = ''
}) => {
  const [galleryState, setGalleryState] = useState<GalleryState>({
    currentImageIndex: 0,
    isFullscreen: false,
    isZoomed: false,
    selectedCategory: 'all'
  })

  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set())

  const filteredImages = galleryState.selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === galleryState.selectedCategory)

  const currentImage = filteredImages[galleryState.currentImageIndex]

  const handleImageLoad = useCallback((imageId: string) => {
    setLoadingImages(prev => {
      const next = new Set(prev)
      next.delete(imageId)
      return next
    })
  }, [])

  const handleImageError = useCallback((imageId: string) => {
    setImageErrors(prev => new Set(prev).add(imageId))
    setLoadingImages(prev => {
      const next = new Set(prev)
      next.delete(imageId)
      return next
    })
  }, [])

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    setGalleryState(prev => {
      const maxIndex = filteredImages.length - 1
      let newIndex = prev.currentImageIndex

      if (direction === 'prev') {
        newIndex = newIndex > 0 ? newIndex - 1 : maxIndex
      } else {
        newIndex = newIndex < maxIndex ? newIndex + 1 : 0
      }

      return { ...prev, currentImageIndex: newIndex, isZoomed: false }
    })
  }, [filteredImages.length])

  const selectImage = useCallback((index: number) => {
    setGalleryState(prev => ({ 
      ...prev, 
      currentImageIndex: index, 
      isZoomed: false 
    }))
    if (onImageSelect) {
      onImageSelect(filteredImages[index])
    }
  }, [filteredImages, onImageSelect])

  const toggleFullscreen = useCallback(() => {
    setGalleryState(prev => ({ 
      ...prev, 
      isFullscreen: !prev.isFullscreen,
      isZoomed: false 
    }))
  }, [])

  const toggleZoom = useCallback(() => {
    setGalleryState(prev => ({ 
      ...prev, 
      isZoomed: !prev.isZoomed 
    }))
  }, [])

  const selectCategory = useCallback((category: VehicleImage['category'] | 'all') => {
    setGalleryState(prev => ({
      ...prev,
      selectedCategory: category,
      currentImageIndex: 0,
      isZoomed: false
    }))
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryState.isFullscreen) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          navigateImage('prev')
          break
        case 'ArrowRight':
          e.preventDefault()
          navigateImage('next')
          break
        case 'Escape':
          e.preventDefault()
          setGalleryState(prev => ({ 
            ...prev, 
            isFullscreen: false, 
            isZoomed: false 
          }))
          break
        case ' ':
          e.preventDefault()
          toggleZoom()
          break
      }
    }

    if (galleryState.isFullscreen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [galleryState.isFullscreen, navigateImage, toggleZoom])

  const categories = Array.from(new Set(images.map(img => img.category)))

  return (
    <>
      <div className={`vehicle-gallery ${className}`}>
        {/* Category Filter */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                galleryState.selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Photos ({images.length})
            </button>
            {categories.map(category => {
              const count = images.filter(img => img.category === category).length
              return (
                <button
                  key={category}
                  onClick={() => selectCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    galleryState.selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Image Display */}
        {currentImage && (
          <div className="relative bg-gray-100 rounded-xl overflow-hidden group mb-4">
            <div className="relative aspect-video">
              {loadingImages.has(currentImage.id) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
              
              {imageErrors.has(currentImage.id) ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-2">📷</div>
                    <div className="text-sm">Image unavailable</div>
                  </div>
                </div>
              ) : (
                <img
                  src={currentImage.highResUrl || currentImage.url}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onLoad={() => handleImageLoad(currentImage.id)}
                  onError={() => handleImageError(currentImage.id)}
                  onClick={toggleFullscreen}
                  onLoadStart={() => setLoadingImages(prev => new Set(prev).add(currentImage.id))}
                />
              )}

              {/* Navigation Controls */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="View fullscreen"
              >
                <Maximize className="h-5 w-5" />
              </button>

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                  {galleryState.currentImageIndex + 1} / {filteredImages.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Thumbnail Strip */}
        {filteredImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => selectImage(index)}
                className={`flex-shrink-0 relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === galleryState.currentImageIndex
                    ? 'border-blue-600 ring-2 ring-blue-600/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {imageErrors.has(image.id) ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-400">📷</span>
                  </div>
                ) : (
                  <img
                    src={image.thumbnailUrl || image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(image.id)}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {galleryState.isFullscreen && currentImage && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <button
                onClick={toggleZoom}
                className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                aria-label={galleryState.isZoomed ? 'Zoom out' : 'Zoom in'}
              >
                {galleryState.isZoomed ? (
                  <ZoomOut className="h-6 w-6" />
                ) : (
                  <ZoomIn className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Main Image */}
            <div className={`relative max-w-full max-h-full ${galleryState.isZoomed ? 'cursor-move' : 'cursor-pointer'}`}>
              <img
                src={currentImage.highResUrl || currentImage.url}
                alt={currentImage.alt}
                className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                  galleryState.isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={toggleZoom}
              />
            </div>

            {/* Navigation in Fullscreen */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                {/* Image Counter in Fullscreen */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 text-white rounded-full">
                  {galleryState.currentImageIndex + 1} / {filteredImages.length}
                </div>
              </>
            )}

            {/* Vehicle Info in Fullscreen */}
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">
                {vehicle.year} {vehicle.make} {vehicle.model}
                {vehicle.trim && ` ${vehicle.trim}`}
              </div>
              <div className="text-sm opacity-80 capitalize">
                {currentImage.category} View
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}