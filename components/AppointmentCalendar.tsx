import React from 'react';
import Image from 'next/image';

const AppointmentCalendar: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <Image 
          src="/calendar_dummy.png" 
          alt="Calendar Appointment Scheduler" 
          width={900}
          height={600}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AppointmentCalendar; 