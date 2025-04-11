'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoSlideshow from './LogoSlideshow';
import Features from './Features';
import { T, useTranslate } from '@tolgee/react';

const Hero: React.FC = () => {
  const { t } = useTranslate();

  return (
    <section className="relative pt-14">
      {/* Hero section */}
      <div className="relative bg-white min-h-[70vh]">
        {/* Full-width/height hero image as background */}
        <div className="w-full h-full">
          <Image 
            src="/Rectangle 4908.png" 
            alt={t('home.hero.image.alt.label')}
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 absolute top-0 left-0 right-0 z-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="z-10 md:col-span-2">
              <h1 className="text-hero font-medium text-white mb-6 leading-tight">
                <T keyName="home.hero.headline.label" />
              </h1>
              <p className="text-lg text-white mb-8 max-w-2xl">
                <T keyName="home.hero.subheadline.label" />
              </p>
              <div className="mt-8">
                <Link 
                  href="/demo" 
                  className="bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center inline-flex items-center"
                >
                  <T keyName="home.hero.book_demo_button.label" />
                  <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Empty div to maintain grid layout */}
            </div>
          </div>
        </div>
      </div>

      {/* Company logos section */}
      <div className="bg-white py-8">
        <p className="text-center text-darkGray mb-6 text-xl font-medium px-6 md:px-12 lg:px-20">
          <T keyName="home.hero.companies_intro.label" />
        </p>
        <div className="w-full">
          <LogoSlideshow />
        </div>
      </div>

      {/* Features section */}
      <Features />
    </section>
  );
};

export default Hero; 