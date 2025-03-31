import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" type="image/png" href="/Favicon_large.png" />
        <link rel="shortcut icon" href="/Favicon_large.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
