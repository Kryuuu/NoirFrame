import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'EKSPLORASI',
    description: 'Memahami cerita, tujuan visual, dan preferensi estetika melalui dialog mendalam serta moodboard inspirasi.',
    deliverable: 'Brief Kreatif & Konsep Narasi',
  },
  {
    step: '02',
    title: 'PERENCANAAN',
    description: 'Merancang konsep visual, palet warna, shot list terperinci, jadwal, serta penataan tata cahaya yang terukur.',
    deliverable: 'Treatment Visual & Rencana Sesi',
  },
  {
    step: '03',
    title: 'PRODUKSI',
    description: 'Mengeksekusi konsep menjadi karya foto dan visual sinematik dengan optik presisi dan arahan gaya yang natural.',
    deliverable: 'Sesi Pemotretan & Perekaman Sinematik',
  },
  {
    step: '04',
    title: 'PENYERAHAN',
    description: 'Penyempurnaan setiap frame melalui kurasi selektif, master color grading, tata suara khusus, dan akses galeri cloud.',
    deliverable: 'Master Color Graded & Galeri Cloud',
  },
];

export default function Process() {
  return (
    <section className="relative py-16 sm:py-36 bg-[#080808] border-b border-white/[0.08] overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-24 pb-6 sm:pb-8 border-b border-white/[0.08] gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2 sm:mb-3">
              // METODOLOGI KERJA
            </span>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
              DARI GAGASAN
              <br />
              <span className="text-neutral-300 font-light italic">MENJADI KARYA.</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-light">
              Alur kerja 4 tahap kami menjamin kejelasan proses, keutuhan artistik, dan standar eksekusi visual tanpa kompromi.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-xs tracking-editorial uppercase text-neutral-300 hover:text-white mt-3 sm:mt-4 transition-colors"
            >
              <span>DETAIL ALUR KERJA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4-Step Editorial Grid / Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-0 lg:divide-x divide-white/[0.08]">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`group flex flex-col justify-between p-6 sm:p-8 lg:px-8 lg:py-6 border border-white/[0.06] lg:border-none bg-black/20 hover:bg-white/[0.03] transition-all duration-500 relative`}
            >
              {/* Subtle top hover line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Step Number */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl sm:text-4xl font-extrabold text-neutral-600 font-mono group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">
                    TAHAP 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Deliverable Pill */}
              <div className="pt-6 border-t border-white/[0.06]">
                <span className="text-[9px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-1">
                  LUARAN UTAMA
                </span>
                <span className="text-xs text-neutral-300 font-mono">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
