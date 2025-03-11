
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
  once?: boolean;
  threshold?: number;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  children?: ReactNode;
}

const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'aspect-video',
  once = true,
  threshold = 0.1,
  delay = 0,
  animation = 'fade',
  children
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (imageRef.current && src) {
                imageRef.current.src = src;
                imageRef.current.classList.add('loaded');
              }
              
              entry.target.classList.add('opacity-100');
              
              switch (animation) {
                case 'fade':
                  entry.target.classList.add('animate-fade');
                  break;
                case 'slide-up':
                  entry.target.classList.add('animate-slide-up');
                  break;
                case 'slide-down':
                  entry.target.classList.add('animate-slide-down');
                  break;
                case 'slide-left':
                  entry.target.classList.add('animate-slide-left');
                  break;
                case 'slide-right':
                  entry.target.classList.add('animate-slide-right');
                  break;
                default:
                  entry.target.classList.add('animate-fade');
              }
              
              if (once) {
                observer.unobserve(entry.target);
              }
            }, delay);
          } else if (!once) {
            entry.target.classList.remove('opacity-100', `animate-${animation}`);
          }
        });
      },
      { threshold }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [animation, delay, once, src, threshold]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'opacity-0 transform overflow-hidden',
        aspectRatio,
        className
      )}
    >
      {children ? (
        children
      ) : src ? (
        <img
          ref={imageRef}
          className="lazy-img w-full h-full object-cover"
          alt={alt}
          data-src={src}
        />
      ) : null}
    </div>
  );
};

export default ImageReveal;
