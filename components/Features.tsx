'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Feature data
const features = [
  {
    id: 'ea',
    icon: 'EA',
    title: 'Employee Assistance',
    description: 'Professionelle Unterstützung für Mitarbeiter:innen bei mentalen/psychischen Gesundheitsproblemen.',
    image: '/Features/Home_DE.webp',
    link: '/employee-assistance',
    color: 'primary'
  },
  {
    id: 'hr',
    icon: 'HR',
    title: 'HR Compliance',
    description: 'Vollständig rechtskonform: Die eAU kann EU-DSGVO-konform empfangen und gespeichert werden.',
    image: '/Features/vorsorgen_de.webp',
    link: '/hr-compliance',
    color: 'primary'
  },
  {
    id: 'de',
    icon: 'DE',
    title: 'Daten & Einblicke',
    description: 'Übersichtliche Dashboards für Trends, Analysen und Absenzquoten im Unternehmen.',
    image: '/Features/Dashboard_DE.webp',
    link: '/daten-einblicke',
    color: 'primary'
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image 
          src="/bg2.svg" 
          alt="Background" 
          fill
          className="object-cover object-right"
          priority
        />
      </div>
      
      <section className="relative z-10 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-darkGray text-center mb-12">
            Unsere Lösungen für Ihre HR-Abteilung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left column - feature list */}
            <div className="md:col-span-5 space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className={`p-6 rounded-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm ${
                    activeFeature === index ? 'bg-lightGray shadow-md' : 'hover:bg-lightGray/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start">
                    <div className={`mr-4 bg-primary bg-opacity-10 rounded-full p-3 flex items-center justify-center w-12 h-12`}>
                      <span className="text-primary font-medium">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-darkGray mb-2">{feature.title}</h3>
                      <p className="text-neutralGray mb-3">
                        {feature.description}
                      </p>
                      <Link 
                        href={feature.link} 
                        className="text-primary font-medium flex items-center hover:text-opacity-90 transition-colors"
                      >
                        Mehr erfahren
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right column - feature image */}
            <div className="md:col-span-7 relative">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-lightGray h-[400px]">
                {features.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className={`transition-opacity duration-500 h-full ${
                      activeFeature === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={700}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 