import type { ImageGalleryProps } from "../types/business-listing.types";

const ImageGallery = ({ images, activeIndex, onSelect }: ImageGalleryProps) => {
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
      {activeImage ? (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]"
        />
      ) : null}
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2" role="tablist">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={image.caption ?? `View image ${index + 1}`}
                onClick={() => onSelect(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  isActive ? "bg-white" : "bg-white/40"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
