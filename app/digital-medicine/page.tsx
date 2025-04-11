import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import CTA from '../../components/CTA';
import Image from 'next/image'; // Needed for placeholders
import LogoSlideshow from '../../components/LogoSlideshow'; // Reuse logo slideshow if appropriate

export const metadata: Metadata = {
  title: 'Digitale Arbeitsmedizin & Gesundheitsmanagement | Bloom Clone',
  description: 'Betriebsarzt, Arbeitssicherheit & Gesundheitsmanagement digital vereint. Digitale Vorsorgekartei, GBU, BEM und mehr.',
};

// Placeholder for interactive tab/feature section
const DigitalFeaturesTabs = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-medium text-darkGray mb-12">Bloom bringt Arbeitsmedizin ins Jahr 2025.</h2>
      {/* TODO: Implement interactive tabs for features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Example placeholder card */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-3">Digitale Vorsorgekartei</h3>
          <ul className="text-left list-disc list-inside text-neutralGray space-y-1 text-sm">
            <li>Effiziente Automatisierung & Datenschutz</li>
            <li>Intelligente Prävention & Übersicht</li>
          </ul>
          <p className="text-neutralGray mt-4">(Placeholder - Detailed content needed)</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-3">Digitale Gefährdungsbeurteilungen</h3>
           <ul className="text-left list-disc list-inside text-neutralGray space-y-1 text-sm">
             <li>Datenbasierte Analyse & Maßnahmen</li>
           </ul>
          <p className="text-neutralGray mt-4">(Placeholder - Detailed content needed)</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-3">Mental Health Plattform</h3>
          <p className="text-neutralGray text-sm mb-3">Stelle mit Bloom ein maßgeschneidertes EAP zusammen.</p>
          <a href="/eap" className="text-primary font-medium text-sm hover:underline">Mehr erfahren</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-3">Betriebliche Wiedereingliederung (BEM) <span className="text-sm text-blue-500 font-normal">(Coming soon)</span></h3>
           <ul className="text-left list-disc list-inside text-neutralGray space-y-1 text-sm">
             <li>Strukturierte Identifikation & Prozesssteuerung</li>
             <li>Umfassende Dokumentation & Auswertung</li>
           </ul>
           <p className="text-neutralGray mt-4">(Placeholder - Detailed content needed)</p>
        </div>
      </div>
    </div>
  </section>
);

// Placeholder for the video section
const TestimonialVideo = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-3xl mx-auto text-center">
       <h2 className="text-3xl font-medium text-darkGray mb-8">Was unsere Kunden über uns sagen</h2>
       <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
         <p className="text-neutralGray">(Placeholder for Video)</p>
         {/* Original site uses <video> tag, would need video file and implementation */}
       </div>
    </div>
  </section>
);

// Component for the benefits section (Zeitersparnis, All-in-One, etc.)
const BenefitsSection = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-primary mb-2">90%</h3>
        <h4 className="font-medium text-darkGray mb-2">Zeitersparnis</h4>
        <p className="text-sm text-neutralGray">für HR Abteilungen, Office-Manager:innen oder Arbeitssicherheitsfachkräfte – durch digitale Lösung mit Schnittstellen</p>
      </div>
       <div className="p-4">
        <h3 className="text-2xl font-semibold text-primary mb-2">All-in-One</h3>
        <h4 className="font-medium text-darkGray mb-2">Plattform</h4>
        <p className="text-sm text-neutralGray">Arbeitsmedizin, Arbeitssicherheit und EAP in einer Plattform - Schluss mit Silo Angeboten</p>
      </div>
       <div className="p-4">
        <h3 className="text-2xl font-semibold text-primary mb-2">Flexible</h3>
        <h4 className="font-medium text-darkGray mb-2">Anwendung</h4>
        <p className="text-sm text-neutralGray">Angebot kann mit unseren Betriebsarztpartnern bereits vorhandenen betriebsärztlichen Diensten genutzt werden</p>
      </div>
       <div className="p-4">
        <h3 className="text-2xl font-semibold text-primary mb-2">Rechtssicher</h3>
        <h4 className="font-medium text-darkGray mb-2">Dokumentation</h4>
        <p className="text-sm text-neutralGray">Dokumentation und Nachweis aller rechtlichen Verpflichtungen im Falle einer Prüfung durch die Gewerbeaufsicht</p>
      </div>
    </div>
  </section>
);

// Main Digital Medicine Page Component
export default function DigitalMedicinePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium text-darkGray mb-6 leading-tight">
            Betriebsarzt, Arbeitssicherheit & Gesundheitsmanagement - Digital vereint in einer Lösung.
          </h1>
          {/* Removed the tab-like links from original hero, kept button */}
          <button className="bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-colors text-lg">
            Jetzt Angebot einholen {/* TODO: Link this button */}
          </button>
        </div>
      </section>

      {/* Logo Slideshow - Reusing component from home page */}
      <section className="py-8 bg-white">
        <p className="text-center text-neutralGray text-sm mb-4">Diese Unternehmen unterstützen ihre Teams bereits mit Bloom:</p>
        <LogoSlideshow />
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-darkGray mb-12">
            Die Welt spricht über KI, doch dein arbeitsmedizinischer Dienst steckt noch in den 90ern fest?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Fehlende Digitalisierung</h3>
              {/* Placeholder for icon/image */}
            </div>
             <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Analoge Dokumentation und Briefe-Chaos</h3>
              {/* Placeholder for icon/image */}
            </div>
             <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Hoher administrativer Aufwand</h3>
              {/* Placeholder for icon/image */}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Features Tabs/Section */}
      <DigitalFeaturesTabs />

      {/* Promise Section */}
       <section className="py-16 px-6 text-center bg-primary text-white">
         <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-medium mb-6">Unser Versprechen</h2>
           <p className="text-xl mb-8">Sofort 20 % Ersparnis im Vergleich zu deinem aktuellen arbeitsmedizinischen Dienst!</p>
           <button className="bg-white text-primary py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors text-lg">
              Jetzt Angebot einholen {/* TODO: Link this button */}
            </button>
         </div>
       </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonial Video Placeholder */}
      <TestimonialVideo />

      {/* Integrations Section - Reusing component from home page might require adjustments or dedicated component */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-darkGray mb-4">
              Blooms Integrationen
            </h2>
             {/* Placeholder for the logo grid similar to home page's Integrations component */}
             <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                <div className="h-10 relative w-32"><Image src="/Integration logos/personio-logo-freigestellt.svg" alt="Personio" fill style={{objectFit: 'contain'}} /></div>
                <div className="h-10 relative w-32"><Image src="/Integration logos/workday-logo-freigestellt.svg" alt="Workday" fill style={{objectFit: 'contain'}} /></div>
                <div className="h-10 relative w-32"><Image src="/Integration logos/sap-logo-freigestellt.svg" alt="SAP" fill style={{objectFit: 'contain'}} /></div>
                <div className="h-10 relative w-32"><Image src="/Integration logos/HRworks-logo-freigestellt.svg" alt="HRworks" fill style={{objectFit: 'contain'}} /></div>
                <div className="h-10 relative w-32"><Image src="/Integration logos/HiBob-logo-freigestellt.svg" alt="HiBob" fill style={{objectFit: 'contain'}} /></div>
                <div className="h-10 relative w-32"><Image src="/Integration logos/bamboo-logo-freigestellt.svg" alt="BambooHR" fill style={{objectFit: 'contain'}} /></div>
             </div>
            <p className="text-neutralGray mt-6">+ viele weitere</p>
          </div>
        </div>
      </section>

      {/* Reusable CTA Component */}
      <CTA 
        title="Erfahre mehr über Bloom" 
        text="Erfahre, wie du mit Bloom arbeitsmedizinische Vorsorge effizient organisierst, die Gesundheit des Teams förderst und gesetzliche Anforderungen erfüllst."
      />

       {/* Data & Security Section - Could be a reusable component */} 
       <section className="py-16 px-6 bg-gray-50">
         <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-2xl font-medium text-darkGray mb-4">Daten & Sicherheit</h2>
           <p className="text-neutralGray mb-6 max-w-xl mx-auto">Datenschutz und Sicherheit von Bloom orientieren sich an branchenführenden Standards Dritter.</p>
           {/* Placeholder for GDPR/CCPA badge */}
           <div className="inline-block bg-gray-200 rounded p-2">
             <p className="text-sm text-neutralGray">(Placeholder GDPR & CCPA badge)</p>
           </div>
         </div>
       </section>

    </Layout>
  );
} 