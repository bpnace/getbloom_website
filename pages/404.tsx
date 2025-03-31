import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout title="Seite nicht gefunden | Bloom">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">404</h1>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-xl">
          Diese Seite existiert leider nicht. Falls du das für einen Fehler hältst, melde dich bei uns!
        </p>
        <Link 
          href="/" 
          className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-secondary transition-colors inline-block"
        >
          Zurück zu Home
        </Link>
      </div>
    </Layout>
  );
} 