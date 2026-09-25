import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatsAppModalProvider } from '@/components/WhatsAppModal';
import SmoothScroll from '@/components/SmoothScroll';
import AmbientGlow from '@/components/AmbientGlow';

export const metadata: Metadata = {
  metadataBase: new URL('https://noirframe.studio'),
  title: 'NOIR FRAME — Studio Fotografi & Videografi Sinematik',
  description:
    'NOIR FRAME adalah studio kreatif visual spesialis fotografi, videografi sinematik, visual storytelling, dan produksi kreatif berkelas abadi.',
  keywords: [
    'NOIR FRAME',
    'Studio Foto Banjarmasin',
    'Videografer Banjarmasin',
    'Foto Wisuda Banjarmasin',
    'Paket Foto Video Murah',
    'Dokumentasi Sinematik',
    'Fotografer Profesional',
    'Drone Videography',
  ],
  openGraph: {
    title: 'NOIR FRAME — Studio Fotografi & Videografi Sinematik',
    description:
      'NOIR FRAME adalah studio kreatif visual spesialis fotografi, videografi sinematik, visual storytelling, dan produksi kreatif berkelas abadi.',
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
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="bg-[#080808] text-[#f4f4f2]">
      <body className="min-h-screen flex flex-col bg-[#080808] text-[#f4f4f2] antialiased">
        <SmoothScroll>
          <AmbientGlow />
          <WhatsAppModalProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </WhatsAppModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
