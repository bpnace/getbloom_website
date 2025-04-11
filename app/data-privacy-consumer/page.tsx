import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz (Produkt) | Bloom',
  robots: { index: false, follow: false }, // Usually best not to index legal pages
};

export default function DataPrivacyConsumerPage() {
  return (
    <div className="container mx-auto px-6 py-12 pt-28 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung (Produkt)</h1>
      <div className="prose max-w-none">
        {/* Content will be added here */}
        <p>Bitte fügen Sie hier den Inhalt der Produkt-Datenschutzerklärung ein.</p>
      </div>
    </div>
  );
} 