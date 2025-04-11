import React from 'react';
import Link from 'next/link';

// Note: You cannot define metadata directly in not-found.tsx

export default function NotFound() {
  return (
    // Removed Layout wrapper
    // The root layout (app/layout.tsx) will wrap this page
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.28))] px-6 py-24"> {/* Adjust min-height if needed based on header/footer */}
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
  );
} 