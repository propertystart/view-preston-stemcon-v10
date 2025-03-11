
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  interval?: number;
  className?: string;
  aspectRatio?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 5000,
  className,
  aspectRatio = 'aspect-video', // Changed to aspect-video for better grid fit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className={cn('relative overflow-hidden rounded-sm', aspectRatio, className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 w-full h-full transition-opacity duration-1000',
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                index === currentIndex ? 'bg-noir-gold w-4' : 'bg-white/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
