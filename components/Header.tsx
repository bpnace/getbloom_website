'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTolgee } from '@tolgee/react';

// Custom Hook to detect click outside
const useClickOutside = (ref: React.RefObject<HTMLElement | null>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const productMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  // Get Tolgee instance and subscribe to language changes
  const tolgee = useTolgee(['language']);

  // Get current language directly from the instance
  const currentLang = tolgee.getLanguage();

  console.log(`[Header] Render - currentLang from tolgee.getLanguage(): ${currentLang}`);
  console.log(`[Header] Render - tolgee instance from useTolgee exists: ${!!tolgee}`);
  
  // Determine display based on current language
  // Disable button if tolgee instance (for action) is missing
  const displayLang = (currentLang || '').toUpperCase();
  const isDisabled = !tolgee;
  console.log(`[Header] Render - displayLang: ${displayLang}, isDisabled: ${isDisabled}`);

  useClickOutside(productMenuRef, () => setProductMenuOpen(false));
  useClickOutside(languageMenuRef, () => setLanguageMenuOpen(false));

  useEffect(() => {
    if (mobileMenuOpen) {
      setProductMenuOpen(false);
      setLanguageMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  // Use the changeLanguage function directly from context
  const handleLanguageChange = useCallback((lang: string) => {
    console.log(`[Header] handleLanguageChange called for lang: ${lang}`);
    tolgee.changeLanguage(lang);
    setLanguageMenuOpen(false);
    setMobileMenuOpen(false);
  }, [tolgee]);

  return (
    <header className="bg-lightGray py-3 px-6 md:px-12 lg:px-20 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="relative">
                <Image 
                  src="/Logo1.svg" 
                  alt="Bloom Logo" 
                  width={110} 
                  height={36}
               />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-base">
          <Link href="/" className="text-darkGray hover:text-primary font-medium">
            Home
          </Link>
          <div className="relative group" ref={productMenuRef}>
            <button 
              className="text-darkGray hover:text-primary font-medium flex items-center"
              onClick={() => setProductMenuOpen(!productMenuOpen)}
              aria-haspopup="true"
              aria-expanded={productMenuOpen}
            >
              Produkt & Angebot
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {productMenuOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-white border border-lightGray rounded-lg shadow-lg z-50">
                <Link href="/eap" className="block px-4 py-3 text-sm text-darkGray hover:bg-lightGray">
                  <span className="font-medium">EAP</span>
                  <p className="text-xs text-neutralGray mt-1">Das revolutionäre und individuell konfigurierbare Employee Assistance Programm</p>
                </Link>
                <Link href="/data" className="block px-4 py-3 text-sm text-darkGray hover:bg-lightGray">
                  <span className="font-medium">Daten & Einblicke</span>
                  <p className="text-xs text-neutralGray mt-1">Das People-Analytics Dashboard rund um Abwesenheiten und Krankheit.</p>
                </Link>
              </div>
            )}
          </div>
          <Link href="/resources" className="text-darkGray hover:text-primary font-medium">
            Ressourcen
          </Link>
          
          <div className="relative ml-4" ref={languageMenuRef}>
            <button
              className="flex items-center justify-center rounded-full bg-white w-8 h-8 text-sm font-medium text-darkGray uppercase"
              onClick={() => {
                  console.log('[Header] Language button clicked! Current languageMenuOpen:', languageMenuOpen);
                  setLanguageMenuOpen(!languageMenuOpen); 
              }}
              aria-haspopup="true"
              aria-expanded={languageMenuOpen}
              aria-label="Change language"
              disabled={isDisabled}
            >
              {displayLang}
            </button>
            {languageMenuOpen && ( 
              <div className="absolute right-0 mt-2 w-32 bg-white border border-lightGray rounded-lg shadow-lg z-50 py-1">
                <button
                  onClick={() => handleLanguageChange('de')}
                  className={`w-full text-left px-4 py-2 text-sm text-darkGray hover:bg-lightGray ${currentLang === 'de' ? 'font-semibold bg-lightGray' : ''}`}
                  aria-current={currentLang === 'de'}
                >
                  Deutsch
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-full text-left px-4 py-2 text-sm text-darkGray hover:bg-lightGray ${currentLang === 'en' ? 'font-semibold bg-lightGray' : ''}`}
                  aria-current={currentLang === 'en'}
                >
                  English
                </button>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4 ml-6">
            <Link href="/login" className="text-darkGray hover:text-primary font-medium py-1.5 px-5 border border-primary rounded-md transition-colors">
              Login
            </Link>
            <Link 
              href="/demo" 
              className="bg-primary text-white py-1.5 px-5 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center"
            >
              Demo buchen
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-darkGray hover:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white absolute top-14 left-0 right-0 p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-darkGray hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <div>
              <button 
                className="text-darkGray hover:text-primary font-medium py-2 text-left flex justify-between w-full"
                onClick={() => setProductMenuOpen(!productMenuOpen)}
                aria-haspopup="true"
                aria-expanded={productMenuOpen}
              >
                Produkt & Angebot
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {productMenuOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/eap" className="block py-2 text-sm text-darkGray" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">EAP</span>
                    <p className="text-xs text-neutralGray">Das revolutionäre und individuell konfigurierbare Employee Assistance Programm</p>
                  </Link>
                  <Link href="/data" className="block py-2 text-sm text-darkGray" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">Daten & Einblicke</span>
                    <p className="text-xs text-neutralGray">Das People-Analytics Dashboard rund um Abwesenheiten und Krankheit.</p>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/resources" className="text-darkGray hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Ressourcen
            </Link>
            <div className="flex space-y-2 flex-col border-t pt-4 mt-4">
              <button 
                onClick={() => handleLanguageChange('de')} 
                className={`text-darkGray py-2 text-left flex items-center ${currentLang === 'de' ? 'font-semibold text-primary' : ''}`}
                 aria-current={currentLang === 'de'}
              >
                Deutsch
              </button>
              <button 
                onClick={() => handleLanguageChange('en')} 
                className={`text-darkGray py-2 text-left flex items-center ${currentLang === 'en' ? 'font-semibold text-primary' : ''}`}
                 aria-current={currentLang === 'en'}
              >
                English
              </button>
            </div>
            <div className="border-t pt-4 mt-4 flex flex-col space-y-3">
              <Link href="/login" className="text-darkGray hover:text-primary font-medium py-2 border border-primary rounded-md w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
              <Link 
                href="/demo" 
                className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center flex items-center justify-center" onClick={() => setMobileMenuOpen(false)}
              >
                Demo buchen
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 