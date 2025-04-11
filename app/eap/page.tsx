import type { Metadata } from 'next';
import Layout from '../../components/Layout';
// Import other necessary components (e.g., CTA) or create new ones for EAP content
import CTA from '../../components/CTA';

export const metadata: Metadata = {
  title: 'EAP - Employee Assistance Program | Bloom Clone',
  description: 'Maßgeschneiderte EAP für die mentale und körperliche Gesundheit deiner Mitarbeiter:innen. Psychologische Einzelgespräche, Workshops, Kurse und Apps.',
};

// Placeholder components for EAP sections - these would need actual implementation
const EapFormatsSection = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-medium text-darkGray mb-12">Du entscheidest, welche Formate deinem Team zur Verfügung stehen</h2>
      {/* TODO: Implement Tabs/Content for Psychologische Einzelgespräche, Live-Kurse, Apps, Gesundheits-Mediathek */}
      <p className="text-neutralGray">(Placeholder for EAP Formats Section - Tabs/Content needed)</p>
    </div>
  </section>
);

const EapTopicsSection = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-medium text-darkGray mb-12">Bloom unterstützt dein Team – zu einer Vielzahl von Themenbereichen</h2>
      {/* TODO: Implement grid/list of topics (Burnout, Psychosomatik, etc.) */}
      <p className="text-neutralGray">(Placeholder for EAP Topics Section - Grid/List needed)</p>
    </div>
  </section>
);

const EapConsultingSection = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-medium text-darkGray mb-12">Individuelle Beratung für jede Mitarbeiter:in</h2>
      {/* TODO: Implement content about consulting and image */}
      <p className="text-neutralGray">(Placeholder for EAP Consulting Section - Content/Image needed)</p>
    </div>
  </section>
);

const EapStatsSection = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      {/* TODO: Implement stats section (Nutzung, Zufriedenheit, Employer Branding) */}
      <p className="text-neutralGray">(Placeholder for EAP Stats Section)</p>
    </div>
  </section>
);

// Main EAP Page Component
export default function EapPage() {
  return (
    <Layout>
      {/* Hero Section - Similar to Home, but EAP specific */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium text-darkGray mb-6 leading-tight">
            Das revolutionäre und individuell konfigurierbare Employee Assistance Program
          </h1>
          <p className="text-lg md:text-xl text-neutralGray mb-8 max-w-2xl mx-auto">
            Stelle mit Bloom ein maßgeschneiderte EAP für die mentale und körperliche Gesundheit deiner Mitarbeiter:innen zusammen. Wähle aus psychologischen Einzelgesprächen, Workshops, Live- und Videokursen sowie Apps und digitalen Kursen die Angebote, die am besten zu deinem Team passen.
          </p>
          <button className="bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-colors text-lg">
            Demo buchen {/* TODO: Link this button */}
          </button>
        </div>
      </section>

      {/* Placeholder sections for the rest of the content */}
      <EapFormatsSection />
      <EapTopicsSection />
      <EapConsultingSection />
      <EapStatsSection />

      {/* Reusable CTA Component */}
      <CTA 
        title="Erfahre mehr über Bloom" 
        text="Erfahre, wie du mit Bloom arbeitsmedizinische Vorsorge effizient organisierst, die Gesundheit des Teams förderst und gesetzliche Anforderungen erfüllst."
      />
    </Layout>
  );
} 