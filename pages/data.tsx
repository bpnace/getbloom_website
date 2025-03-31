import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Data() {
  return (
    <Layout title="Daten & Einblicke | Bloom">
      <div className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Daten & Einblicke
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Erhalte detaillierte Einblicke in das Wohlbefinden und die Krankheitsquote der Mitarbeiter:innen sowie deren Auswirkungen auf die Unternehmensperformance.
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
                <p className="text-gray-500">Dashboard Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Das People-Analytics Dashboard für Abwesenheiten und Krankheiten</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mit dem Bloom Dashboard erhalten Sie wertvolle Einblicke in die Gesundheits- und Abwesenheitsdaten Ihres Unternehmens. Analysieren Sie Trends, identifizieren Sie Handlungsbedarf und messen Sie den Erfolg Ihrer Maßnahmen.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold mb-4">Dashboard-Features</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
                <li>Übersichtliche Darstellung aller relevanten Kennzahlen</li>
                <li>Filterung nach Zeiträumen, Abteilungen und weiteren Parametern</li>
                <li>Trendanalysen und Prognosen</li>
                <li>Exportfunktionen für Reporting und Dokumentation</li>
                <li>Integration mit HR-Systemen für automatische Datenaktualisierung</li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Datengestützte Entscheidungen treffen</h2>
            <p className="text-lg text-gray-700 mb-6">
              Das Bloom Dashboard unterstützt Führungskräfte und HR-Verantwortliche dabei, fundierte Entscheidungen zu treffen und gezielte Maßnahmen zur Förderung der Mitarbeitergesundheit und zur Reduzierung von Abwesenheiten zu implementieren.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 