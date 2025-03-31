import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Bloom - Gesundheits- und Abwesenheitsmanagement' }) => {
  return (
    <div className="flex min-h-screen flex-col font-outfit">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Bloom - Die All-in-One-Lösung für Gesundheits- und Abwesenheitsmanagement. Mit zielgerichteten Lösungen und datenbasierten Einblicken die Gesundheit der Mitarbeiter:innen stärken und Ausfallzeiten signifikant reduzieren." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 