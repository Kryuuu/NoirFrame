import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Layanan & Kemampuan — NOIR FRAME',
  description:
    'Jelajahi disiplin produksi kreatif kami: fotografi komersial, videografi sinematik, arahan visual brand, dan dokumentasi event.',
};

const DETAILED_SERVICES = [
  {
    number: '01',
    title: 'FOTOGRAFI',
    subtitle: 'ARSITEKTUR STILL IMAGERY',
    description:
      'Kami memperlakukan setiap frame sebagai komposisi bernilai abadi. Mulai dari dokumentasi wisuda, sesi portrait personal, hingga komersial produk, pendekatan kami memadukan pencahayaan natural chiaroscuro, resolusi tinggi, dan keaslian momen.',
    deliverables: [
      'Dokumentasi Wisuda & Momen Personal',
      'Kampanye Komersial & Editorial Brand',
      'Fine Art & Fotografi Portrait',
      'Foto Produk & Still-Life Macro',
      'Dokumentasi Acara & Momen Budaya',
      'Fotografi Arsitektur & Ruang',
    ],
    gear: 'Hasselblad Medium Format • Leica M11 • Sony A1 Prime Ecosystem',
    image: '/porto/wedding/wedding-02.jpg',
  },
  {
    number: '02',
    title: 'VIDEOGRAFI',
    subtitle: 'GERAK SINEMATIK & NARASI',
    description:
      'Mulai dari video reel vertikal berkecepatan dinamis hingga dokumentasi acara dan film sorotan wisuda sinematik, kami menangkap visual bergerak dengan ritme yang terjaga dan palet warna organik.',
    deliverables: [
      'Iklan Komersial Brand & Peluncuran Produk',
      'Film Dokumentasi Wisuda & Acara Sinematik',
      'Dokumentasi Acara Korporat & Budaya',
      'Kampanye Naratif Format Layar Lebar',
      'Format Vertikal 9:16 untuk Reels & TikTok',
      'Video Musik & Dokumentasi Pertunjukan',
    ],
    gear: 'ARRI Alexa Mini LF • RED V-RAPTOR 8K • Cooke Anamorphic /i',
    image: '/porto/commercial/commercial-02.jpg',
  },
  {
    number: '03',
    title: 'PRODUKSI KREATIF',
    subtitle: 'EKSEKUSI LENGKAP DARI AWAL HINGGA AKHIR',
    description:
      'Sebuah karya visual lahir jauh sebelum tombol kamera ditekan. Kami memandu penulisan konsep, moodboard visual, pemilihan lokasi, arahan gaya, hingga penataan cahaya di set.',
    deliverables: [
      'Perumusan Konsep & Moodboard',
      'Riset Lokasi & Jadwal Produksi',
      'Pengarahan Gaya Visual di Set',
      'Pascaproduksi & Penyuntingan Video',
      'Master Color Grading (Alur ACES)',
      'Desain Audio & Finishing Tata Suara',
    ],
    gear: 'DaVinci Resolve Studio • Flanders Scientific Reference Displays',
    image: '/porto/campaign/campaign-03.jpg',
  },
  {
    number: '04',
    title: 'VISUAL BRANDING',
    subtitle: 'IDENTITAS VISUAL DIGITAL MENYELURUH',
    description:
      'Ekosistem visual terarah yang dirancang untuk brand, studio, dan personalia yang menginginkan kehadiran visual berkelas tinggi di berbagai platform digital dan media cetak.',
    deliverables: [
      'Lookbook Musiman & Aset Kampanye',
      'Foto Produk Resolusi Tinggi E-Commerce',
      'Foto Portrait Eksekutif & Tim Kreatif',
      'Paket Konten Media Sosial Terkurasi',
      'Materi Iklan Cetak & Baliho Resolusi Master',
      'Panduan Gaya Visual Identitas Brand',
    ],
    gear: 'Phase One IQ4 150MP • Broncolor Studio Lighting Systems',
    image: '/porto/product/product-01.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#080808] min-h-screen text-neutral-200">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Page Header */}
        <div className="mb-10 sm:mb-28 pb-6 sm:pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>KEMAMPUAN</span>
            <span>//</span>
            <span>DISIPLIN KREATIF</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
            DISIPLIN
            <br />
            <span className="text-neutral-300 font-light italic">&amp; LAYANAN.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base max-w-2xl font-light text-neutral-400 leading-relaxed">
            NOIR FRAME beroperasi sebagai studio kreatif visual terpadu. Kami menyatukan intensi artistik dengan presisi teknis untuk menghasilkan karya visual yang tak terlupakan.
          </p>
        </div>

        {/* In-Depth Service Sections */}
        <div className="space-y-16 sm:space-y-32">
          {DETAILED_SERVICES.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <section
                key={item.number}
                className="border-b border-white/[0.08] pb-16 sm:pb-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[4/3] border border-white/20 bg-[#0d0d0d] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/80" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/80" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/80" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/80" />

                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-cinematic uppercase text-neutral-300 bg-black/80 px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/10">
                        {item.gear}
                      </div>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div
                    className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-3xl font-mono font-bold text-neutral-500">
                        {item.number}
                      </span>
                      <span className="w-8 h-[1px] bg-white/20" />
                      <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-400">
                        {item.subtitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
                      {item.title}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4">
                      <span className="text-[11px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                        CAKUPAN &amp; LUARAN
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Inquiry Link */}
                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs tracking-editorial uppercase text-white hover:text-neutral-300 border-b border-white/40 pb-1 hover:border-white transition-all group"
                      >
                        <span>KONSULTASIKAN LAYANAN INI</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Embedded Pricing & Rates Section */}
      <PricingSection />

      {/* Embedded CTA */}
      <CTASection />
    </div>
  );
}
