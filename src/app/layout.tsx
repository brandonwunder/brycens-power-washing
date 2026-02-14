import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: 'AZ Concrete King | Professional Concrete Power Washing in Arizona',
  description:
    'AZ Concrete King provides professional concrete power washing services for residential homes in Arizona. Driveways, patios, pool decks, and more.',
  openGraph: {
    title: 'AZ Concrete King | Concrete Power Washing',
    description:
      'Professional concrete power washing for Arizona homeowners. Transform your concrete surfaces today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'AZ Concrete King',
              description:
                'Professional concrete power washing services for residential homes in Arizona.',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'AZ',
                addressCountry: 'US',
              },
              areaServed: 'Arizona',
              serviceType: 'Concrete Power Washing',
            }),
          }}
        />
      </head>
      <body className="font-body text-text bg-surface antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
