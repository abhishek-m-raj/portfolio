'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ProjectMedia } from '@/types/project';

const getYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

type GalleryCarouselProps = {
  media: ProjectMedia[];
};

export default function GalleryCarousel({ media }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const isMouseDown = useRef(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const scrollStartX = useRef(0);

  const sortedMedia = [...media].sort((a, b) => {
    const aIsVideo = a.type === 'video' || a.type === 'youtube';
    const bIsVideo = b.type === 'video' || b.type === 'youtube';
    if (aIsVideo && !bIsVideo) return -1;
    if (!aIsVideo && bIsVideo) return 1;
    return 0;
  });

  const totalItems = sortedMedia.length;
  const currentMedia = totalItems > 0 ? sortedMedia[currentIndex] : null;

  const navigateToPrevious = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  }, [totalItems]);

  const navigateToNext = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  }, [totalItems]);

  const goToSlide = (index: number) => {
    setImageLoaded(false);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateToPrevious();
      if (e.key === 'ArrowRight') navigateToNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigateToPrevious, navigateToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const timeDiff = Date.now() - touchStartTime.current;
    const distance = touchStartX.current - touchEndX;
    const isSwipe = Math.abs(distance) > 50 && timeDiff < 500;

    if (isSwipe) {
      if (distance > 0) {
        navigateToNext();
      } else {
        navigateToPrevious();
      }
    }

    touchStartX.current = 0;
    touchStartTime.current = 0;
  };

  const handleMainMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('video') || (e.target as HTMLElement).closest('iframe')) {
      return;
    }
    // Don't allow dragging on main carousel
    return;
  };

  const handleThumbnailMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    touchStartX.current = e.clientX;
    scrollStartX.current = thumbnailContainerRef.current?.scrollLeft || 0;
    touchStartTime.current = Date.now();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown.current || !thumbnailContainerRef.current) return;
      const distance = e.clientX - touchStartX.current;
      thumbnailContainerRef.current.scrollLeft = scrollStartX.current - distance;
      setIsDragging(true);
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isMouseDown.current) return;
      isMouseDown.current = false;
      setIsDragging(false);
      
      touchStartX.current = 0;
      touchStartTime.current = 0;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (totalItems === 0 || !currentMedia) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <svg
          className="w-16 h-16 mb-4 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-lg">No media available</p>
      </div>
    );
  }

  const youtubeId =
    currentMedia.type === 'youtube' ? getYouTubeId(currentMedia.url) : null;

  return (
    <div className="relative w-full">
      <div className="relative rounded-2xl shadow-2xl bg-black overflow-hidden">
        <div
          className="relative w-full"
          style={{ paddingBottom: '56.25%' }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900" 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd} 
            onMouseDown={handleMainMouseDown}
          >
            {currentMedia.type === 'image' ? (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={currentMedia.url}
                  alt={currentMedia.caption || `Media ${currentIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  draggable={false}
                />
              </>
            ) : currentMedia.type === 'youtube' && youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={currentMedia.caption || `YouTube video ${currentIndex + 1}`}
              />
            ) : (
              <video
                src={currentMedia.url}
                controls
                className="w-full h-full object-contain"
                poster={currentMedia.thumbnail}
              >
                Your browser does not support the video tag.
              </video>
            )}

            {currentMedia.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-6 pointer-events-none">
                <p className="text-white text-sm md:text-base font-medium">
                  {currentMedia.caption}
                </p>
              </div>
            )}

            {totalItems > 1 && (
              <>
                <button
                  onClick={navigateToPrevious}
                  className={`absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg shadow-lg transition-opacity duration-200 z-20 ${
                    showControls ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-label="Previous media"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={navigateToNext}
                  className={`absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg shadow-lg transition-opacity duration-200 z-20 ${
                    showControls ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-label="Next media"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {totalItems > 1 && (
        <div 
          ref={thumbnailContainerRef}
          className="mt-6 overflow-x-auto scroll-smooth select-none" 
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
          onMouseDown={handleThumbnailMouseDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-3 px-2 pb-2 pt-2 pr-2">
            {sortedMedia.map((item, index) => {
              const thumbYoutubeId =
                item.type === 'youtube' ? getYouTubeId(item.url) : null;

              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentIndex
                      ? 'ring-3 ring-blue-500 shadow-lg scale-105'
                      : 'ring-2 ring-gray-400 dark:ring-gray-600 hover:ring-blue-400 shadow-md'
                  }`}
                  style={{ cursor: isDragging ? 'grab' : 'pointer' }}
                  aria-label={`Go to ${item.type} ${index + 1}`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : item.type === 'youtube' && thumbYoutubeId ? (
                    <div className="relative w-full h-full bg-gray-900">
                      <img
                        src={
                          item.thumbnail ||
                          `https://img.youtube.com/vi/${thumbYoutubeId}/mqdefault.jpg`
                        }
                        alt={`YouTube thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="w-5 h-5 text-white" fill="white" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-gray-900">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`Video thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="w-5 h-5 text-white" fill="white" />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}