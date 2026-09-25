'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    // Subtle mouse parallax on hero background
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Live cinematic camera timecode
    const interval = setInterval(() => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const frames = String(Math.floor(now.getMilliseconds() / 41)).padStart(2, '0');
      setTimecode(`${hrs}:${mins}:${secs}:${frames}`);
    }, 41);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image with Dynamic Mouse Parallax & Deep Vignette */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.06)`,
        }}
      >
        <Image
          src="/porto/hero-cinematic.jpg"
          alt="NOIR FRAME Cinematic Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        {/* Subtle Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/40 to-[#050505]/90" />
      </div>

      {/* Frame Geometric Border Lines */}
      <div className="absolute inset-3 sm:inset-10 lg:inset-16 pointer-events-none border border-white/[0.08] z-10 flex flex-col justify-between p-3 sm:p-6">
        {/* Top Indicators */}
        <div className="flex justify-between items-center text-[9px] sm:text-xs tracking-wider sm:tracking-cinematic text-neutral-400 uppercase font-mono">
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            REC // {timecode}
          </span>
          <span className="hidden sm:inline-block">ASPECT // 16:9 • DCI 4K RAW</span>
          <span>NOIR FRAME © 2026</span>
        </div>

        {/* Viewfinder Crosshair Accents with Subtle Breathing */}
        <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-white/70 -translate-x-[1px] -translate-y-[1px] animate-breathing" />
        <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white/70 translate-x-[1px] -translate-y-[1px] animate-breathing" />
        <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white/70 -translate-x-[1px] translate-y-[1px] animate-breathing" />
        <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-white/70 translate-x-[1px] translate-y-[1px] animate-breathing" />

        {/* Bottom Coordinates */}
        <div className="flex justify-between items-center text-[9px] sm:text-xs tracking-editorial text-neutral-400 uppercase font-mono">
          <span className="hidden md:inline-block">LAT 3.3194° S • LON 114.5908° E • BANJARMASIN</span>
          <span className="text-right w-full md:w-auto">SHUTTER 180° • ISO 800</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center pt-28 pb-12 sm:pt-24 sm:pb-16">
        {/* Small Category Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-black/40 backdrop-blur-md mb-6 sm:mb-8 animate-subtle-float">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] sm:text-xs tracking-wider sm:tracking-cinematic uppercase text-neutral-300 font-medium">
            FOTOGRAFI / VIDEOGRAFI / PRODUKSI
          </span>
        </div>

        {/* Main Dramatic Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.08] sm:leading-[1.04] max-w-4xl transition-all duration-700">
          KAMI BINGKAI
          <br />
          <span className="text-neutral-300 font-light italic">SETIAP MOMEN</span>
          <br />
          YANG BERMAKNA.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed tracking-wide px-2 sm:px-0">
          Fotografi, videografi, dan visual storytelling yang dirancang dengan penuh dedikasi dan estetika.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto max-w-xs sm:max-w-none">
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-semibold text-xs tracking-editorial uppercase hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all group"
          >
            <span>LIHAT KARYA KAMI</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white font-medium text-xs tracking-editorial uppercase hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
          >
            <span>MULAI KONSULTASI</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#selected-work"
          className="mt-16 sm:mt-20 inline-flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors group cursor-pointer"
          aria-label="Gulir ke Karya Pilihan"
        >
          <span className="text-[10px] tracking-cinematic uppercase font-mono">JELAJAHI ARSIP</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white/70" />
        </a>
      </div>
    </section>
  );
}
