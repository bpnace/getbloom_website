import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen (Consumer) | Bloom',
  robots: { index: false, follow: false }, // Usually best not to index legal pages
};

export default function TcConsumerPage() {
  return (
    <div className="container mx-auto px-6 py-12 pt-28 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Einwilligung & Nutzungsbedingungen (Consumer)</h1>
      <div className="prose max-w-none">
        {/* Content will be added here */}
        <p>Bitte fügen Sie hier den Inhalt der Consumer-Nutzungsbedingungen/Einwilligung ein.</p>
      </div>
    </div>
  );
} 