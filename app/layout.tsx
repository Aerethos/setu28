import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SETU Ball 2028 — Waterford, Ireland',
  description:
    'July 1, 2028. Four thousand students. One night on the River Suir. Waterford, Ireland — the most ambitious student-led civic event in Irish history.',
  metadataBase: new URL('https://setu28.com'),
  openGraph: {
    title: 'SETU Ball 2028',
    description:
      'July 1, 2028. Waterford, Ireland. Ireland’s oldest city, its greatest night.',
    url: 'https://setu28.com',
    siteName: 'SETU Ball 2028',
    locale: 'en_IE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-monument font-body text-tungsten antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
