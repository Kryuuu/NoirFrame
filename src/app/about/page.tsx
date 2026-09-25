import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Tentang Studio — NOIR FRAME',
  description:
    'Pelajari filosofi NOIR FRAME: seni penceritaan visual, arahan kreatif terarah, dan disiplin sinematik berkelas abadi.',
};

const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'DISIPLIN RUANG NEGATIF',
    text: 'Kami percaya apa yang tidak dimasukkan ke dalam frame sama pentingnya dengan apa yang disertakan. Ketiadaan distraksi memberi ruang napas bagi emosi murni dan komposisi bentuk.',
  },
  {
    number: '02',
    title: 'PENCAHAYAAN PENUH INTENSI',
    text: 'Cahaya adalah medium utama kami. Kami memahat sorotan dan bayangan dengan teknik chiaroscuro yang mengangkat subjek melampaui sekadar dokumentasi datar biasa.',
  },
  {
    number: '03',
    title: 'ARSITEKTUR NARASI',
    text: 'Setiap gambar adalah bagian dari sekuens yang lebih besar. Kami menyusun ritme visual layaknya sinema—bergantian harmonis antara lanskap megah dan tangkapan emosi jarak dekat.',
  },
  {
    number: '04',
    title: 'DAYA TAHAN ABADI',
    text: 'Tren visual cepat memudar. Kami memprioritaskan color grading bernilai abadi, warna kulit alami, dan tekstur organik yang tetap bermakna hingga puluhan tahun mendatang.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#080808] min-h-screen text-neutral-200">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-28 pb-6 sm:pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>IDENTITAS</span>
            <span>//</span>
            <span>MANIFESTO STUDIO</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
            ESTETIKA
            <br />
            <span className="text-neutral-300 font-light italic">DENGAN INTENSI.</span>
          </h1>
        </div>

        {/* Studio Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 sm:mb-28">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-lg text-neutral-300 font-light leading-relaxed">
            <p className="text-xl sm:text-3xl text-white font-normal leading-relaxed">
              NOIR FRAME adalah studio kreatif visual yang berdedikasi pada fotografi, videografi sinematik, dan penceritaan visual yang bernyawa.
            </p>
            <p className="text-neutral-400">
              Kami percaya bahwa gambar yang kuat lebih dari sekadar terlihat estetis. Sebuah visual harus menghembuskan atmosfer, emosi, identitas, dan makna yang mendalam.
            </p>
            <p className="text-neutral-400">
              Dari momen personal berharga hingga produksi komersial dan event berskala besar, kami menggarap setiap proyek dengan keseimbangan antara kreativitas tinggi, presisi teknis, dan intensi yang tulus.
            </p>

            {/* Studio Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-white/[0.08]">
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
                  100+
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  PROYEK TUNTAS
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
                  80+
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  KLIEN KREATIF
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
                  2023
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  — SEKARANG
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] border border-white/20 bg-[#0d0d0d] overflow-hidden">
              <Image
                src="/porto/campaign/campaign-02.jpg"
                alt="NOIR FRAME Filosofi Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/80" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-cinematic uppercase text-neutral-300 bg-black/80 px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/10">
                DISIPLIN KREATIF // ARSIP BINGKAI
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of NOIR FRAME */}
        <div className="pt-12 sm:pt-20 border-t border-white/[0.08] mb-16 sm:mb-28">
          <div className="mb-8 sm:mb-14">
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
              // PRINSIP DASAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              FILOSOFI UTAMA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-5 sm:p-8 border border-white/[0.08] bg-black/30 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-neutral-600 block mb-6">
                    {pillar.number}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded CTA */}
      <CTASection />
    </div>
  );
}
