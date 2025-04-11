import React from 'react';
import Image from 'next/image';

const Stats: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient background - extended upwards with negative margin */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden -mt-64">
        <Image 
          src="/gradient2.svg" 
          alt="Gradient background" 
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="py-24 px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Bloom - eine innovative Lösung für anspruchsvolle Unternehmen
            </h2>
            <p className="text-lg mb-8 text-white max-w-3xl mx-auto">
              Erfahre, wie du mit Bloom arbeitsmedizinische Vorsorge effizient organisierst, die Gesundheit des Teams förderst und gesetzliche Anforderungen erfüllst.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
              <video 
                src="/Video/Testimonial1.mp4" 
                controls 
                className="w-full h-auto"
                poster="/Video/Thumbnail_final.webp"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats; 