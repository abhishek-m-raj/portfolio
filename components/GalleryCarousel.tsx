import React, { useState, useEffect, useCallback } from 'react';
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

export default function GalleryCarousel({ media }: { media: ProjectMedia[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const sortedMedia = [...media].sort((a, b) => {
    const aIsVideo = a.type === 'video' || a.type === 'youtube';
    const bIsVideo = b.type === 'video' || b.type === 'youtube';
    if (aIsVideo && !bIsVideo) return -1;
    if (!aIsVideo && bIsVideo) return 1;
    return 0;
  });

  const totalItems = sortedMedia.length;
  const currentMedia = sortedMedia[currentIndex];

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateToPrevious();
      if (e.key === 'ArrowRight') navigateToNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigateToPrevious, navigateToNext]);

  // Touch swipe handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) navigateToNext();
    if (touchStart - touchEnd < -75) navigateToPrevious();
  };

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg">No media available</p>
      </div>
    );
  }

  const youtubeId = currentMedia.type === 'youtube' ? getYouTubeId(currentMedia.url) : null;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-visible">
      {/* Main Media Display */}
      <div 
        className="relative rounded-2xl shadow-2xl bg-linear-to-br from-gray-900 to-black m-8"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div 
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ paddingBottom: '56.25%' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0">
            {currentMedia.type === 'image' ? (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={currentMedia.url}
                  alt={currentMedia.caption || `Media ${currentIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
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

            {/* Caption */}
            {currentMedia.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-6 z-10 pointer-events-none">
                <p className="text-white text-sm md:text-base font-medium">{currentMedia.caption}</p>
              </div>
            )}

            {/* Navigation Arrows */}
            {totalItems > 1 && (
              <>
                <button
                  onClick={navigateToPrevious}
                  className={`absolute top-1/2 left-0 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-900 dark:text-white px-2 py-4 md:px-2 md:py-4 rounded-md shadow-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 ${
                    showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                  }`}
                  aria-label="Previous media"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={navigateToNext}
                  className={`absolute top-1/2 right-0 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-900 dark:text-white px-2 py-4 md:px-2 md:py-4 rounded-md shadow-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 ${
                    showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
                  aria-label="Next media"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {totalItems > 1 && (
        <div className="mt-6 mx-8">
          <div className="flex gap-3 pb-6">
            {sortedMedia.map((item, index) => {
              const thumbYoutubeId = item.type === 'youtube' ? getYouTubeId(item.url) : null;
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-4 ring-blue-500 shadow-xl scale-105'
                      : 'ring-2 ring-gray-300 dark:ring-gray-700 hover:ring-4 hover:ring-blue-400 shadow-md hover:scale-105'
                  }`}
                  aria-label={`Go to ${item.type} ${index + 1}`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : item.type === 'youtube' && thumbYoutubeId ? (
                    <div className="relative w-full h-full bg-gray-900">
                      <img
                        src={item.thumbnail || `https://img.youtube.com/vi/${thumbYoutubeId}/mqdefault.jpg`}
                        alt={`YouTube thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                        <div className="bg-white/90 rounded-full p-2 shadow-lg">
                          <Play className="w-5 h-5 text-gray-900" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-gray-900">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`Video thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                        <div className="bg-white/90 rounded-full p-2 shadow-lg">
                          <Play className="w-5 h-5 text-gray-900" fill="currentColor" />
                        </div>
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