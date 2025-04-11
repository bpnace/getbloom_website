import React from 'react';
import Image from 'next/image';

interface CTAProps {
  title: string;
  text: string;
}

const CTA: React.FC<CTAProps> = ({ title, text }) => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6 text-darkGray">
              {title}
            </h2>
            <p className="text-neutralGray leading-relaxed">
              {text}
            </p>
            <div className="mt-8">
              <a 
                href="/demo" 
                className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Demo buchen
              </a>
            </div>
          </div>
          
          {/* Right Column - Calendar */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Image 
                src="/calendar_dummy.png" 
                alt="Calendar Appointment Scheduler" 
                width={900}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 