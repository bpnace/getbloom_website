import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digitale Arbeitsmedizin | Bloom',
  // description: 'Description for Digital Medicine page',
};

export default function DigitalMedicinePage() {
  return (
    <>
      <div className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Digitale Arbeitsmedizin
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Digitalisiere arbeitsmedizinische Vorsorge, Gefährdungsbeurteilungen und betriebliche Wiedereingliederung – rechtskonform, effizient und mit Anbindung ans HR-System.
              </p>
              <div className="mt-8">
                <Link 
                  href="/demo" 
                  className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-secondary transition-colors text-center inline-flex items-center"
                >
                  Demo buchen
                  <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden w-full max-w-lg h-96 bg-gray-100 flex items-center justify-center">
                 {/* Consider adding an actual image here using next/image */}
                <p className="text-gray-500">Digital Medicine Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Die komfortable Lösung zur Erfüllung von Compliance-Anforderungen im HR-Bereich</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mit Bloom digitalisieren Sie die arbeitsmedizinische Vorsorge, Gefährdungsbeurteilungen und betriebliche Wiedereingliederung. Alle Prozesse werden rechtskonform gestaltet, effizient umgesetzt und nahtlos mit Ihrem HR-System verbunden.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Arbeitsmedizinische Vorsorge</h3>
                <p className="text-gray-700">
                  Automatisierte Verwaltung von Vorsorgeuntersuchungen, Terminerinnerungen und Dokumentation – alles DSGVO-konform.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Gefährdungsbeurteilungen</h3>
                <p className="text-gray-700">
                  Digitale Erstellung, Durchführung und Auswertung von Gefährdungsbeurteilungen mit automatisierten Maßnahmenplänen.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Betriebliche Wiedereingliederung</h3>
                <p className="text-gray-700">
                  Strukturierte Prozesse für eine erfolgreiche Wiedereingliederung nach längerer Krankheit mit Aufgaben-, Termin- und Dokumentenmanagement.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">HR-System-Integration</h3>
                <p className="text-gray-700">
                  Nahtlose Anbindung an bestehende HR-Systeme für konsistente Daten und effiziente Prozesse ohne Doppelerfassungen.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Reduzieren Sie administrative Aufwände, minimieren Sie Compliance-Risiken und gewinnen Sie wertvolle Zeit für strategische HR-Aufgaben mit der digitalen Arbeitsmedizin von Bloom.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 