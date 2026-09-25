'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    number: '01',
    title: 'FOTOGRAFI',
    category: 'GAMBAR DIAM',
    description:
      'Dokumentasi wisuda, portrait studio, event, komersial, produk, dan lifestyle dengan pencahayaan terarah serta komposisi visual yang kuat.',
    tags: ['Dokumentasi Wisuda', 'Sesi Portrait', 'Foto Produk & Brand', 'Event & Seremoni'],
    previewImage: '/porto/portrait/portrait-01.jpg',
  },
  {
    number: '02',
    title: 'VIDEOGRAFI',
    category: 'GERAKAN SINEMATIK',
    description:
      'Video wisuda sinematik, recap event, video komersial brand, dan visual reel media sosial berkualitas 4K dengan transisi dinamis.',
    tags: ['Cinematic Wisuda', 'Video Komersial', 'Aftermovie Event', 'Aerial Drone 4K'],
    previewImage: '/porto/commercial/commercial-02.jpg',
  },
  {
    number: '03',
    title: 'PRODUKSI KREATIF',
    category: 'ARAHAN VISUAL LENGKAP',
    description:
      'Pengembangan konsep, moodboard, pemilihan lokasi, arahan gaya pemotretan, hingga color grading presisi dan perancangan suara.',
    tags: ['Arahan Konsep', 'Penataan Set', 'Color Grading Sinematik', 'Master Desain Audio'],
    previewImage: '/porto/campaign/campaign-01.jpg',
  },
  {
    number: '04',
    title: 'VISUAL BRANDING',
    category: 'ARSITEKTUR IDENTITAS',
    description:
      'Aset fotografi dan videografi menyeluruh untuk penguatan identitas brand, kampanye digital, lookbook musiman, dan katalog produk.',
    tags: ['Katalog E-Commerce', 'Lookbook Campaign', 'Kehadiran Digital', 'Sistem Konten'],
    previewImage: '/porto/product/product-01.jpg',
  },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="relative py-16 sm:py-36 bg-[#080808] border-b border-white/[0.08] overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-20 pb-6 sm:pb-8 border-b border-white/[0.08] gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2 sm:mb-3">
              // DISIPLIN UTAMA
            </span>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              LAYANAN KAMI
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-light">
            Kami memadukan seni fotografi dan ketelitian sinematografi untuk menyampaikan cerita berharga Anda.
          </p>
        </div>

        {/* Editorial Split Layout: Left is Service List, Right is Interactive Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Services List */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            {SERVICES_DATA.map((service, index) => {
              const isHovered = activeIdx === index;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`group py-6 sm:py-10 transition-all duration-300 cursor-pointer ${
                    isHovered ? 'bg-white/[0.02] sm:pl-6' : 'pl-0'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2 sm:mb-3">
                    <div className="flex items-baseline gap-3 sm:gap-6">
                      <span className="text-xs font-mono text-neutral-500 tracking-wider">
                        {service.number}
                      </span>
                      <h3
                        className={`text-xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors ${
                          isHovered ? 'text-white' : 'text-neutral-300 sm:text-neutral-400 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 ${
                        isHovered
                          ? 'text-white translate-x-1 -translate-y-1'
                          : 'text-neutral-600 opacity-60'
                      }`}
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 max-w-xl font-light leading-relaxed pl-0 sm:pl-12">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 pl-0 sm:pl-12">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] sm:text-[10px] tracking-editorial uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Preview on Desktop with Silky Crossfade */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] border border-white/20 overflow-hidden bg-[#0c0c0c]">
              {SERVICES_DATA.map((srv, sIdx) => (
                <div
                  key={srv.number}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    activeIdx === sIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                >
                  <Image
                    src={srv.previewImage}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 1200px) 40vw, 35vw"
                    className="object-cover"
                    priority={sIdx === 0}
                  />
                </div>
              ))}

              {/* Viewfinder frame overlay */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/70 z-10" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/70 z-10" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/70 z-10" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/70 z-10" />

              {/* Live Preview Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-white/10 flex justify-between items-center z-10">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">
                    PRATINJAU // {SERVICES_DATA[activeIdx].number}
                  </span>
                  <span className="text-xs font-bold uppercase text-white tracking-wide">
                    {SERVICES_DATA[activeIdx].title}
                  </span>
                </div>
                <Link
                  href="/services"
                  className="text-[10px] tracking-editorial uppercase text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  DETAIL LENGKAP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
