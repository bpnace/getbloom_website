'use client';

import React from 'react';
import { TolgeeProvider, Tolgee, FormatSimple } from '@tolgee/react';
// Removed TolgeeInstance type import as it's not needed for sync init

// Initialize Tolgee synchronously OUTSIDE the component
// NOTE: This might block initial render slightly, but good for debugging context.
const tolgeeInstance = Tolgee()
  .use(FormatSimple())
  .init({
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    availableLanguages: ['de', 'en'],
    defaultLanguage: 'de',
    // Synchronous init doesn't use run() explicitly here
  });

interface TolgeeProviderWrapperProps {
  children: React.ReactNode;
}

const TolgeeProviderWrapper: React.FC<TolgeeProviderWrapperProps> = ({ children }) => {
  // Remove useState and useEffect

  // Render the provider directly with the pre-initialized instance
  return (
    <TolgeeProvider tolgee={tolgeeInstance} fallback="Loading..."> 
      {children}
    </TolgeeProvider>
  );
};

export default TolgeeProviderWrapper; 