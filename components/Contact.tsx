import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Erfahre mehr über Bloom
            </h2>
            <p className="text-gray-700 mb-8">
              Erfahre, wie dir Bloom die Gesundheit der Mitarbeiter*innen deines Unternehmens verbessern und Abwesenheiten reduzieren kann.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Hubspot Form Placeholder */}
            <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg flex flex-col items-center justify-center h-[400px]">
              <div className="text-gray-500 text-center mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto mb-4">
                  <rect width="48" height="48" rx="24" fill="#f9fafb" />
                  <text x="24" y="30" fontSize="20" textAnchor="middle" fill="#9ca3af">
                    HB
                  </text>
                </svg>
                <div className="font-medium">Embedded Hubspot booking form</div>
                <p className="text-sm mt-2">
                  Kontaktformular für Terminvereinbarungen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 