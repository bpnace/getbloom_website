import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Integrations />
      <CTA 
        title="Erfahre mehr über Bloom" 
        text="Erfahre, wie du mit Bloom arbeitsmedizinische Vorsorge effizient organisierst, die Gesundheit des Teams förderst und gesetzliche Anforderungen erfüllst."
      />
    </>
  );
} 