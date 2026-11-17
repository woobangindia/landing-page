import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const dm = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-dm', display: 'swap' });
const play = Playfair_Display({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-play', display: 'swap' });

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.co.uk';
const title = 'Harbourline | Rental Property Connections for Tenants & Letting Agents in the UK';
const description = 'Looking to rent a flat, apartment or house in the UK? Or an estate or letting agent wanting to partner with us? Register your interest with Harbourline today.';

export const metadata = {
  metadataBase: new URL(SITE),
  title, description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_GB', url: '/', title: 'Harbourline | Connecting People With Better Property Opportunities',
    description: 'Property connections, made simpler across the UK. For tenants and property professionals.', images: ['/images/hero-1600.jpg'] },
  twitter: { card: 'summary_large_image' },
};
export const viewport = { themeColor: '#142B45' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${dm.variable} ${play.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'Harbourline', url: SITE, areaServed: 'GB' }) }} />
        {children}
      </body>
    </html>
  );
}
