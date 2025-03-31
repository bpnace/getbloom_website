import React from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  text: string;
}

const CTA: React.FC<CTAProps> = ({ title, text }) => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          {text}
        </p>
        <Link 
          href="/demo" 
          className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-secondary transition-colors inline-block"
        >
          Demo buchen
        </Link>
      </div>
    </section>
  );
};

export default CTA; 