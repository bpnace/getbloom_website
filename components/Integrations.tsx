import React from 'react';
import Image from 'next/image';

const Integrations: React.FC = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Blooms Integrationen
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center">
          {/* Personio */}
          <div className="flex items-center justify-center">
            <div className="font-bold text-gray-500 text-lg">Personio</div>
          </div>

          {/* Workday */}
          <div className="flex items-center justify-center">
            <div className="font-bold text-gray-500 text-lg">Workday</div>
          </div>

          {/* SAP SuccessFactors */}
          <div className="flex items-center justify-center">
            <div className="font-bold text-gray-500 text-lg">SAP SuccessFactors</div>
          </div>

          {/* HRworks */}
          <div className="flex items-center justify-center">
            <div className="font-bold text-gray-500 text-lg">HRworks</div>
          </div>

          {/* HiBob */}
          <div className="flex items-center justify-center">
            <div className="font-bold text-gray-500 text-lg">HiBob</div>
          </div>

          {/* BambooHR */}
          <div className="flex items-center justify-center">
            <div className="font-bold text-gray-500 text-lg">BambooHR</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500">+ viele weitere</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations; 