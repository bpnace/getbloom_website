import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-neutralGray">
      {/* Data Security Section */}
      <div className="border-t border-lightGray py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-medium text-xl text-darkGray mb-4">Daten & Sicherheit</h3>
              <p className="text-neutralGray">
                Datenschutz und Sicherheit von Bloom orientieren sich an branchenführenden Standards Dritter.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-8">
              <div className="flex items-center">
                <Image 
                  src="/GDPR_CCPA.webp" 
                  alt="GDPR & CCPA Compliance" 
                  width={240} 
                  height={240}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background SVG - increased opacity and ensuring it's behind content */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/footer_bg.svg"
            alt="Footer background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 w-full h-full z-0 bg-darkGray opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <div className="cursor-pointer">
                  <Image 
                    src="/Logo1.svg" 
                    alt="Bloom Logo" 
                    width={110} 
                    height={36}
                    className="invert" 
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)' }}
                  />
                </div>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-70 hover:opacity-100">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-70 hover:opacity-100">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-opacity-20 border-white">
            <div>
              <h4 className="text-white font-medium mb-4">Produkt</h4>
              <ul className="space-y-2 text-white text-opacity-70">
                <li><Link href="/eap" className="hover:text-opacity-100">Employee Assistance Program</Link></li>
                <li><Link href="/digital-medicine" className="hover:text-opacity-100">Digitale Arbeitsmedizin</Link></li>
                <li><Link href="/data" className="hover:text-opacity-100">Daten & Einblicke</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Ressourcen</h4>
              <ul className="space-y-2 text-white text-opacity-70">
                <li><Link href="/resources" className="hover:text-opacity-100">Übersicht</Link></li>
                <li><Link href="/case-studies" className="hover:text-opacity-100">Kundenberichte</Link></li>
                <li><Link href="/blog" className="hover:text-opacity-100">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-white text-opacity-70">
                <li><Link href="/impressum" className="hover:text-opacity-100">Impressum</Link></li>
                <li><Link href="/datenschutz-website" className="hover:text-opacity-100">Datenschutz – Webseite</Link></li>
                <li><Link href="/datenschutz-consumer" className="hover:text-opacity-100">Datenschutz – Consumer</Link></li>
                <li><Link href="/jobs" className="hover:text-opacity-100">Jobs</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-sm border-t border-opacity-20 border-white pt-8 text-white text-opacity-70">
            <p>Bloom ist eine Marke der Menta Health GmbH<br />
            Kolonnenstr. 8, 10827 Berlin, Deutschland</p>
            <p className="mt-4">Bloom {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 