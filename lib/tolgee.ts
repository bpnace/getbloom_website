import { Tolgee, FormatSimple, TolgeeInstance } from '@tolgee/react';

// Re-enable JSON imports
import deTranslations from '../de-DE.json'; 
import enTranslations from '../en.json';

// Configure and export the instance directly
const tolgeeInstance: TolgeeInstance = Tolgee()
  .use(FormatSimple())
  .init({
    // Keep API keys commented out
    // apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    // apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    availableLanguages: ['de', 'en'],
    defaultLanguage: 'de',
    // Re-enable staticData 
    staticData: {
      de: deTranslations,
      en: enTranslations,
    },
  });

console.log('[lib/tolgee.ts] Exporting configured Tolgee instance (WITH STATIC DATA):', tolgeeInstance);

// REMOVE initializeTolgee function
// async function initializeTolgee(): Promise<TolgeeInstance> { ... }
// export { initializeTolgee };

export { tolgeeInstance }; // Export the configured instance 