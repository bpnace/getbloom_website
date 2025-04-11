import React from 'react';
import Image from 'next/image';
import { useTranslate } from '@tolgee/react';

const AppointmentCalendar: React.FC = () => {
  const { t } = useTranslate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <Image 
          src="/calendar_dummy.png" 
          alt={t('appointment_calendar.calendar_image.alt.label')}
          width={900}
          height={600}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AppointmentCalendar; 