import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google'; // Import the font
import "../styles/globals.css";
import { ReactNode } from 'react';

// Configure the font
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Define Metadata using the new API
export const metadata: Metadata = {
  title: 'Bloom Clone', // Add a default title, can be customized
  description: 'Generated by Create Next App', // Add a default description
  icons: { // Configure icons
    icon: '/Favicon_large.png',
    shortcut: '/Favicon_large.png',
    apple: '/Favicon_large.png',
  },
};

// Define Viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // Apply the font class to the html tag
    <html lang="en" className={outfit.className}>
      {/* <head> is automatically managed by Next.js Metadata API */}
      <body className="antialiased">{/* Keep antialiased if desired */}
        {children}
      </body>
    </html>
  );
} 