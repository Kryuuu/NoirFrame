'use client';

import React from 'react';

const TICKER_ITEMS = [
  'ARSIP VISUAL NOIR FRAME',
  'DOKUMENTASI WISUDA & EDITORIAL',
  'ALUR KERJA RAW NEGATIF',
  'COLOR GRADING SINEMATIK',
  'ESTETIKA DIRECT FLASH & 35MM',
  'BANJARMASIN • KALIMANTAN SELATAN',
  'PRODUKSI STUDIO & ON-LOCATION',
  'SINEMATOGRAFI 4K BERKUALITAS TINGGI',
  'MENGABADIKAN MOMEN BERMAKNA',
];

export default function FilmstripTicker() {
  return (
    <div className="w-full py-4 border-y border-white/[0.08] bg-[#050505] overflow-hidden select-none relative group">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-ticker">
        {/* First set */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <span className="text-[10px] sm:text-xs font-mono tracking-cinematic uppercase text-neutral-400 font-medium">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
          ))}
        </div>

        {/* Second duplicated set for seamless loop */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <span className="text-[10px] sm:text-xs font-mono tracking-cinematic uppercase text-neutral-400 font-medium">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
