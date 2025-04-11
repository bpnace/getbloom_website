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
        titleKey="home.cta.title.label" 
        textKey="home.cta.text.label" 
      />
    </>
  );
} 