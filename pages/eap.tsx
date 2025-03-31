import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function EAP() {
  return (
    <Layout title="EAP - Employee Assistance Program | Bloom">
      <div className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Employee Assistance
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Konfiguriere ein individuelles EAP mit ganzheitlichen Angeboten für mentale und körperliche Gesundheit.
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
                <p className="text-gray-500">EAP Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Was ist ein Employee Assistance Program?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ein Employee Assistance Program (EAP) ist ein Unterstützungsprogramm für Mitarbeiter, das verschiedene Dienste anbietet, um das emotionale, mentale und allgemeine Wohlbefinden der Beschäftigten zu fördern.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Mit dem EAP von Bloom können Unternehmen ihren Mitarbeitern:innen ganzheitliche Angebote für mentale und körperliche Gesundheit bieten, die individuell auf die Bedürfnisse des Unternehmens zugeschnitten sind.
            </p>
            <h2 className="text-3xl font-bold mb-6 mt-12">Vorteile des Bloom EAP</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
              <li>Individuell konfigurierbar nach den Bedürfnissen Ihres Unternehmens</li>
              <li>Umfassende Angebote für mentale und körperliche Gesundheit</li>
              <li>Einfache Integration in bestehende HR-Systeme</li>
              <li>Nachweisliche Reduktion von Krankheitskosten und Ausfallzeiten</li>
              <li>Verbesserung der Mitarbeiterzufriedenheit und -bindung</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
} 