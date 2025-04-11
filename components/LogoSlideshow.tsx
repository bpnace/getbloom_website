"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Define the array of logo paths - updated to use SVG files
const logos = [
  '/logos/affinidi.svg',
  '/logos/cargo.one.svg',
  '/logos/lucanet.svg',
  '/logos/luminovo.ai.svg',
  '/logos/smart.svg',
  '/logos/sofatutor.svg',
  '/logos/zolar.svg'
];

const LogoSlideshow: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedImagesCount = useRef(0);

  // Count loaded images and start animation when all are loaded
  const handleImageLoad = () => {
    loadedImagesCount.current += 1;
    if (loadedImagesCount.current >= logos.length) {
      // Add a small delay before showing to ensure everything is rendered
      setTimeout(() => {
        setImagesLoaded(true);
      }, 100);
    }
  };

  // Preload images before showing them
  useEffect(() => {
    // Create HTMLImageElement objects to preload the SVGs
    logos.forEach(logoSrc => {
      const img = document.createElement('img');
      img.src = logoSrc;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count error as loaded to avoid stalling
    });
    
    // Fallback in case images don't load
    const timer = setTimeout(() => {
      if (!imagesLoaded) {
        setImagesLoaded(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [imagesLoaded]);

  return (
    <div className="w-full overflow-hidden py-6 relative">
      {/* Left gradient overlay - covering full left edge */}
      <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-white via-white to-transparent z-10"></div>
      
      {/* Right gradient overlay - covering full right edge */}
      <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-white via-white to-transparent z-10"></div>
      
      <div 
        className={`flex items-center transition-opacity duration-500 ease-in ${
          imagesLoaded ? 'opacity-100 animate-marquee' : 'opacity-0'
        }`}
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-4 flex items-center justify-center p-1 min-w-[180px] h-24">
            <div className="relative h-full w-full">
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                fill
                sizes="180px"
                priority={true}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="mx-4 flex items-center justify-center p-1 min-w-[180px] h-24">
            <div className="relative h-full w-full">
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                fill
                sizes="180px"
                priority={true}
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlideshow; 