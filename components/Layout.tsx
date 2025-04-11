import React, { ReactNode } from 'react';
// import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  // title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-outfit">
      {/* Remove the <Head> section entirely
      <Head>
        <title>{title}</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/Favicon_large.png" />
        <link rel="apple-touch-icon" href="/Favicon_large.png" />
      </Head>
      */}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 