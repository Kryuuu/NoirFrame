import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://noirframe.studio'),
  title: 'NOIR FRAME — Photography & Videography Studio',
  description:
    'NOIR FRAME is a creative visual studio specializing in photography, videography, visual storytelling, and creative production.',
  keywords: [
    'NOIR FRAME',
    'Creative Studio',
    'Photography Agency',
    'Commercial Videography',
    'Wedding Stories',
    'Brand Visuals',
    'Jakarta Photography',
    'Cinematography',
  ],
  openGraph: {
    title: 'NOIR FRAME — Photography & Videography Studio',
    description:
      'NOIR FRAME is a creative visual studio specializing in photography, videography, visual storytelling, and creative production.',
    url: 'https://noirframe.studio',
    siteName: 'NOIR FRAME',
    images: [
      {
        url: '/porto/hero-cinematic.jpg',
        width: 1920,
        height: 1080,
        alt: 'NOIR FRAME Visual Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#080808] text-[#f4f4f2]">
      <body className="min-h-screen flex flex-col bg-[#080808] text-[#f4f4f2] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
