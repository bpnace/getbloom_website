import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';

// Note: The outer <Layout> component might be handled differently 
// in the App Router, potentially within app/layout.tsx or a nested layout.
// For now, we keep it here for structural similarity.
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Integrations />
      <CTA 
        title="Erfahre mehr über Bloom" 
        text="Erfahre, wie du mit Bloom arbeitsmedizinische Vorsorge effizient organisierst, die Gesundheit des Teams förderst und gesetzliche Anforderungen erfüllst."
      />
    </Layout>
  );
} 