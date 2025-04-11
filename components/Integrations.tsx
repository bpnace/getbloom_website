'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { T } from '@tolgee/react';

const Integrations: React.FC = () => {
  // Array of integration partners with their logo paths
  const integrationPartners = [
    { name: 'HR System 1', logo: '/Integration logos/HRworks-1.svg' },
    { name: 'HR System 2', logo: '/Integration logos/HRworks-2.svg' },
    { name: 'HR System 3', logo: '/Integration logos/HRworks-3.svg' },
    { name: 'HR System 4', logo: '/Integration logos/HRworks-4.svg' },
    { name: 'HR System 5', logo: '/Integration logos/HRworks-5.svg' },
    { name: 'HR System 6', logo: '/Integration logos/HRworks.svg' },
  ];

  // Track which logo is being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-darkGray mb-4">
            <T keyName="integrations_headline" defaultValue="Blooms Integrationen" />
          </h2>
          
          {/* Decorative separator */}
          <div className="flex justify-center items-center mb-6">
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>
          
          <p className="text-center text-neutralGray max-w-2xl mx-auto">
            <T keyName="integrations_subheadline" defaultValue="Nahtlose Verbindung zu führenden HR-Systemen und Technologieplattformen" />
          </p>
        </div>

        {/* Two rows of three logos */}
        <div className="max-w-4xl mx-auto">
          {/* First row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {integrationPartners.slice(0, 3).map((partner, index) => (
              <div 
                key={index} 
                className={`
                  flex items-center justify-center p-6 
                  bg-lightGray rounded-lg 
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:scale-105
                  ${hoveredIndex === index ? 'border-2 border-primary shadow-md scale-105' : 'border-2 border-transparent'}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: index % 2 === 0 ? 'pulse 3s infinite ease-in-out' : 'pulse 4s infinite ease-in-out',
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {integrationPartners.slice(3, 6).map((partner, index) => (
              <div 
                key={index + 3} 
                className={`
                  flex items-center justify-center p-6 
                  bg-lightGray rounded-lg 
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:scale-105
                  ${hoveredIndex === index + 3 ? 'border-2 border-primary shadow-md scale-105' : 'border-2 border-transparent'}
                `}
                onMouseEnter={() => setHoveredIndex(index + 3)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: index % 2 === 0 ? 'pulse 4s infinite ease-in-out' : 'pulse 3s infinite ease-in-out',
                  animationDelay: `${(index + 3) * 0.5}s`
                }}
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-neutralGray font-medium">
            <T keyName="integrations_more" defaultValue="+ viele weitere" />
          </p>
        </div>
      </div>

      {/* Add keyframes for pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Integrations; 