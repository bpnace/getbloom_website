import '../styles/globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bloom - Gesundheits- und Abwesenheitsmanagement', // Adjust as needed
  description: 'All-in-One-Lösung für Gesundheits- und Abwesenheitsmanagement', // Adjust as needed
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
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 