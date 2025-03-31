import React, { useEffect, useState } from 'react';
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
  return (
    <div className="w-full overflow-hidden py-6 relative">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 w-[12.5%] h-full bg-gradient-to-r from-white via-white via-20% to-transparent z-10"></div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 w-[12.5%] h-full bg-gradient-to-l from-white via-white via-20% to-transparent z-10"></div>
      
      <div className="flex animate-marquee items-center">
        {logos.map((logo, index) => (
          <div key={index} className="mx-4 flex items-center justify-center p-1 min-w-[180px] h-24">
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`}
              width={200}
              height={80}
              className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
          </div>
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="mx-4 flex items-center justify-center p-1 min-w-[180px] h-24">
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`}
              width={200}
              height={80}
              className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ objectFit: 'contain', maxHeight: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlideshow; 