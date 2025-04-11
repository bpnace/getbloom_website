import '../styles/globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TolgeeProviderWrapper from '../components/TolgeeProviderWrapper';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bloom - Gesundheits- und Abwesenheitsmanagement',
  description: 'All-in-One-Lösung für Gesundheits- und Abwesenheitsmanagement',
  icons: {
    icon: '/Favicon_large.png',
    apple: '/Favicon_large.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${outfit.className} flex min-h-screen flex-col`}>
        {/* Reintroduce the wrapper around Header and main */}
        <TolgeeProviderWrapper>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </TolgeeProviderWrapper>
      </body>
    </html>
  )
} 