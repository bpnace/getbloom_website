'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTolgee } from '@tolgee/react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  // Get Tolgee functions
  const { tolgee } = useTolgee();

  // Use state to manage current language, update it when tolgee instance is ready
  const [currentLanguage, setCurrentLanguage] = useState<string>('de');

  useEffect(() => {
    if (tolgee) { // Check if tolgee instance is available
      setCurrentLanguage(tolgee.getLanguage() || 'de');

      // Optional: Subscribe to language changes if needed elsewhere in header
      const subscription = tolgee.on('language', () => {
        setCurrentLanguage(tolgee.getLanguage() || 'de');
      });
      // Cleanup subscription on unmount
      return () => subscription.unsubscribe();
    }
  }, [tolgee]); // Rerun effect when tolgee instance becomes available

  const changeLanguage = (lang: string) => {
    if (tolgee) { // Check if tolgee instance exists before calling changeLanguage
      tolgee.changeLanguage(lang);
      setLanguageMenuOpen(false); // Close dropdown on selection
      setMobileMenuOpen(false); // Close mobile menu on selection
    }
  };

  // Refs for dropdowns
  const productMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productMenuRef.current && 
        !productMenuRef.current.contains(event.target as Node)
      ) {
        setProductMenuOpen(false);
      }
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setLanguageMenuOpen(false);
      }
    };

    // Add listener if any menu is open
    if (productMenuOpen || languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [productMenuOpen, languageMenuOpen]); // Rerun effect if menu state changes

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
                <Link href="/digital-medicine" className="block px-4 py-3 text-sm text-darkGray hover:bg-lightGray">
                  <span className="font-medium">Digitale Arbeitsmedizin</span>
                  <p className="text-xs text-neutralGray mt-1">Digitale Lösung für Vorsorgekartei, Gesundheitsmanagement & Arbeitssicherheit.</p>
                </Link>
              </div>
            )}
          </div>
          <div className="relative ml-4" ref={languageMenuRef}>
            <button 
              className="flex items-center justify-center rounded-full bg-white w-8 h-8 text-sm font-medium text-darkGray"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              {currentLanguage.toUpperCase()}
            </button>
            
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-lightGray rounded-lg shadow-lg z-50">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-darkGray hover:bg-lightGray disabled:opacity-50"
                  onClick={() => changeLanguage('de')}
                  disabled={currentLanguage === 'de' || !tolgee} // Disable if tolgee not ready
                >
                  Deutsch
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-darkGray hover:bg-lightGray disabled:opacity-50"
                  onClick={() => changeLanguage('en')}
                  disabled={currentLanguage === 'en' || !tolgee} // Disable if tolgee not ready
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
          >
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
        <div className="md:hidden bg-white absolute top-14 left-0 right-0 p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-darkGray hover:text-primary font-medium py-2">
              Home
            </Link>
            <div>
              <button 
                className="text-darkGray hover:text-primary font-medium py-2 text-left flex justify-between w-full"
                onClick={() => setProductMenuOpen(!productMenuOpen)}
              >
                Produkt & Angebot
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {productMenuOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/eap" className="block py-2 text-sm text-darkGray">
                    <span className="font-medium">EAP</span>
                    <p className="text-xs text-neutralGray">Das revolutionäre und individuell konfigurierbare Employee Assistance Programm</p>
                  </Link>
                  <Link href="/digital-medicine" className="block py-2 text-sm text-darkGray">
                    <span className="font-medium">Digitale Arbeitsmedizin</span>
                    <p className="text-xs text-neutralGray">Digitale Lösung für Vorsorgekartei, Gesundheitsmanagement & Arbeitssicherheit.</p>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex space-y-2 flex-col">
              <button
                className="text-darkGray py-2 text-left flex items-center hover:text-primary disabled:opacity-50"
                onClick={() => changeLanguage('de')}
                disabled={currentLanguage === 'de' || !tolgee} // Disable if tolgee not ready
              >
                Deutsch
              </button>
              <button
                className="text-darkGray py-2 text-left flex items-center hover:text-primary disabled:opacity-50"
                onClick={() => changeLanguage('en')}
                disabled={currentLanguage === 'en' || !tolgee} // Disable if tolgee not ready
              >
                English
              </button>
            </div>
            <Link href="/login" className="text-darkGray hover:text-primary font-medium py-2 border border-primary rounded-md w-full text-center">
              Login
            </Link>
            <Link 
              href="/demo" 
              className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center flex items-center justify-center"
            >
              Demo buchen
              <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 