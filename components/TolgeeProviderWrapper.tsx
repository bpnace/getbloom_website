'use client';

import React, { useState, useEffect } from 'react';
import { TolgeeProvider, Tolgee, FormatSimple, TolgeeInstance } from '@tolgee/react';

// Import translations directly here
import deTranslations from '../de-DE.json';
import enTranslations from '../en.json';

// Remove dependency on lib/tolgee.ts

interface TolgeeProviderWrapperProps {
  children: React.ReactNode;
}

const TolgeeProviderWrapper: React.FC<TolgeeProviderWrapperProps> = ({ children }) => {
  // State for the fully initialized instance
  const [tolgee, setTolgee] = useState<TolgeeInstance | null>(null);

  // Initialize Tolgee and wait for .run()
  useEffect(() => {
    let isMounted = true;
    console.log('[TolgeeProviderWrapper] useEffect: Initializing Tolgee...');

    const instance = Tolgee()
      .use(FormatSimple())
      .init({
        // Keep API keys commented out
        // apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
        // apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
        availableLanguages: ['de', 'en'],
        defaultLanguage: 'de',
        staticData: {
          de: deTranslations,
          en: enTranslations,
        },
      });
      
    // Wait for initialization to complete via run()
    instance.run().then(() => {
        console.log('[TolgeeProviderWrapper] useEffect: instance.run() completed.');
        if (isMounted) {
            console.log('[TolgeeProviderWrapper] useEffect: Setting tolgee state.');
            setTolgee(instance); 
        } else {
             console.log('[TolgeeProviderWrapper] useEffect: instance.run() completed, but component unmounted.');
        }
    }).catch(error => {
        console.error('[TolgeeProviderWrapper] useEffect: Tolgee instance.run() failed:', error);
    });

    return () => {
      isMounted = false;
      // Optional: stop the instance if needed on unmount
      // instance?.stop(); 
      console.log('[TolgeeProviderWrapper] useEffect: Cleanup.');
    };
  }, []); // Run only once on mount

  // Render fallback until the instance is ready and set in state
  if (!tolgee) {
    console.log('[TolgeeProviderWrapper] Rendering fallback (tolgee state is null).');
    return <div>Loading Languages...</div>; 
  }

  console.log('[TolgeeProviderWrapper] Rendering TolgeeProvider with lang:', tolgee.getLanguage());
  return (
    <TolgeeProvider tolgee={tolgee} fallback={<div>Loading Tolgee...</div>}>
        {children}
    </TolgeeProvider>
  );
};

export default TolgeeProviderWrapper; 