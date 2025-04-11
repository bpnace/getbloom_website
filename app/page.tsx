'use client';

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
        titleKey="cta_home_title" 
        defaultTitle="Erfahre mehr über Bloom"
        textKey="cta_home_text" 
        defaultText="Erfahre, wie du mit Bloom arbeitsmedizinische Vorsorge effizient organisierst, die Gesundheit des Teams förderst und gesetzliche Anforderungen erfüllst."
      />
    </>
  );
} 