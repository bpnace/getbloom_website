'use client';

import React, { useState, useEffect } from 'react';
// Restore Tolgee imports
import { TolgeeProvider, Tolgee, FormatSimple } from '@tolgee/react';
import { TolgeeInstance } from '@tolgee/core'; // Import TolgeeInstance type

// Comment out Tolgee configuration
/*
const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    availableLanguages: ['de', 'en'],
    defaultLanguage: 'de',
  });
*/

interface TolgeeProviderWrapperProps {
  children: React.ReactNode;
}

const TolgeeProviderWrapper: React.FC<TolgeeProviderWrapperProps> = ({ children }) => {
  // State to track initialization status and store the Tolgee instance
  const [tolgeeInstance, setTolgeeInstance] = useState<TolgeeInstance | null>(null);

  useEffect(() => {
    // Flag to prevent state update if component unmounts during init
    let isMounted = true; 

    const initializeTolgee = async () => {
      try {
        const tgInstance = Tolgee()
          .use(FormatSimple())
          .init({
            apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
            apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
            availableLanguages: ['de', 'en'],
            defaultLanguage: 'de',
          });
        
        // Wait for initialization to complete
        await tgInstance.run(); // Ensure Tolgee is fully ready

        if (isMounted) {
          setTolgeeInstance(tgInstance);
        }
      } catch (error) {
        console.error("Failed to initialize Tolgee:", error);
        // Handle initialization error appropriately, maybe show an error message
      }
    };

    initializeTolgee();

    // Cleanup function to set flag when component unmounts
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render loading state until Tolgee is initialized
  if (!tolgeeInstance) {
    // You can customize this loading state
    return <div>Loading translations...</div>; 
  }

  // Render the provider once Tolgee instance is ready
  return (
    <TolgeeProvider tolgee={tolgeeInstance} fallback="Loading..."> 
      {children}
    </TolgeeProvider>
  );
};

export default TolgeeProviderWrapper;
