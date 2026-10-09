import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatsAppModalProvider } from '@/components/WhatsAppModal';
import SmoothScroll from '@/components/SmoothScroll';
import AmbientGlow from '@/components/AmbientGlow';
import LoadingScreen from '@/components/LoadingScreen';

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
        url: '/porto/graduation/DSC09011.jpg',
        width: 2304,
        height: 1536,
        alt: 'NOIR FRAME Visual Studio',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/porto/Logo/noir-emblem-circle.png', sizes: '512x512', type: 'image/png' },
      { url: '/porto/Logo/Desain%20tanpa%20judul%20(13).png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        <LoadingScreen />
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
