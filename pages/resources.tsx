import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

// Sample data for resources
const resourcesData = [
  {
    id: 1,
    title: "Arbeitsmedizinische Vorsorge effizient organisieren",
    excerpt: "Ein praktischer Leitfaden für die Digitalisierung und Optimierung der arbeitsmedizinischen Vorsorge im Unternehmen.",
    category: "Leitfaden",
    date: "25.03.2023",
    slug: "/resources/arbeitsmedizinische-vorsorge"
  },
  {
    id: 2,
    title: "Mentale Gesundheit am Arbeitsplatz fördern",
    excerpt: "Wie Unternehmen mit gezielten Maßnahmen die psychische Gesundheit ihrer Mitarbeiter:innen stärken und Ausfallzeiten reduzieren können.",
    category: "Ratgeber",
    date: "12.02.2023",
    slug: "/resources/mentale-gesundheit"
  },
  {
    id: 3,
    title: "Case Study: Erfolgreiche Implementierung eines EAP",
    excerpt: "Wie ein mittelständisches Unternehmen mit 250 Mitarbeiter:innen durch ein Employee Assistance Program die Krankheitsquote um 18% senken konnte.",
    category: "Case Study",
    date: "05.01.2023",
    slug: "/resources/case-study-eap"
  },
  {
    id: 4,
    title: "Gesetzliche Anforderungen im Gesundheitsmanagement",
    excerpt: "Eine Übersicht der aktuellen rechtlichen Bestimmungen für betriebliches Gesundheitsmanagement und Arbeitsschutz in Deutschland.",
    category: "Info",
    date: "30.12.2022",
    slug: "/resources/gesetzliche-anforderungen"
  },
  {
    id: 5,
    title: "Der ROI von betrieblicher Gesundheitsförderung",
    excerpt: "Eine Analyse der Kosten und Nutzen von Investitionen in die Gesundheit der Mitarbeiter:innen anhand konkreter Zahlen und Beispiele.",
    category: "Analyse",
    date: "15.11.2022",
    slug: "/resources/roi-gesundheitsfoerderung"
  },
  {
    id: 6,
    title: "Best Practices für Gefährdungsbeurteilungen",
    excerpt: "Wie Sie Gefährdungsbeurteilungen effizient durchführen und dokumentieren, um rechtliche Anforderungen zu erfüllen und die Arbeitssicherheit zu verbessern.",
    category: "Leitfaden",
    date: "02.10.2022",
    slug: "/resources/gefaehrdungsbeurteilungen"
  }
];

type ResourceCategories = "Alle" | "Leitfaden" | "Ratgeber" | "Case Study" | "Info" | "Analyse";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategories>("Alle");
  
  const filteredResources = activeCategory === "Alle" 
    ? resourcesData 
    : resourcesData.filter(resource => resource.category === activeCategory);
  
  return (
    <Layout title="Ressourcen | Bloom">
      <div className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ressourcen
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hier finden Sie nützliche Artikel, Leitfäden und Case Studies rund um die Themen Arbeitsmedizin, Gesundheitsmanagement und Employee Assistance.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(["Alle", "Leitfaden", "Ratgeber", "Case Study", "Info", "Analyse"] as ResourceCategories[]).map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Resource Image</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">{resource.category}</span>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                  <Link href={resource.slug} className="text-primary font-medium hover:text-secondary transition-colors">
                    Artikel lesen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 