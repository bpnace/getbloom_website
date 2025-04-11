'use client';

import React from 'react';
import AppointmentCalendar from './AppointmentCalendar';
import { useTranslate } from '@tolgee/react';

interface CTAProps {
  titleKey: string;
  defaultTitle: string;
  textKey: string;
  defaultText: string;
}

const CTA: React.FC<CTAProps> = ({ titleKey, defaultTitle, textKey, defaultText }) => {
  const { t } = useTranslate();

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6 text-darkGray">
              {t(titleKey, defaultTitle)}
            </h2>
            <p className="text-neutralGray leading-relaxed">
              {t(textKey, defaultText)}
            </p>
            <div className="mt-8">
              <a 
                href="/demo" 
                className="bg-primary text-white py-3 px-8 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                {t('button_book_demo', 'Demo buchen')}
              </a>
            </div>
          </div>
          
          {/* Right Column - Calendar */}
          <div>
            <AppointmentCalendar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 