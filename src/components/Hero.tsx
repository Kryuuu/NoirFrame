import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image with Next.js Image Priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/porto/hero-cinematic.jpg"
          alt="NOIR FRAME Cinematic Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Subtle Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/40 to-[#050505]/90" />
      </div>

      {/* Frame Geometric Border Lines */}
      <div className="absolute inset-6 sm:inset-10 lg:inset-16 pointer-events-none border border-white/[0.08] z-10 flex flex-col justify-between p-4 sm:p-6">
        {/* Top Indicators */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs tracking-cinematic text-neutral-400 uppercase font-mono">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            REC // 24FPS
          </span>
          <span className="hidden sm:inline-block">ASPECT // 16:9 • DCI 4K</span>
          <span>NOIR FRAME © 2026</span>
        </div>

        {/* Viewfinder Crosshair Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60 -translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60 translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60 -translate-x-[1px] translate-y-[1px]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60 translate-x-[1px] translate-y-[1px]" />

        {/* Bottom Coordinates */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs tracking-editorial text-neutral-400 uppercase font-mono">
          <span className="hidden md:inline-block">LAT 3.3194° S • LON 114.5908° E • BANJARMASIN</span>
          <span className="text-right w-full md:w-auto">RAW NEGATIVE // ARCHIVE</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-24 pb-16">
        {/* Small Category Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-black/40 backdrop-blur-sm mb-8">
          <span className="text-[10px] sm:text-xs tracking-cinematic uppercase text-neutral-300 font-medium">
            PHOTOGRAPHY / VIDEOGRAPHY / CREATIVE PRODUCTION
          </span>
        </div>

        {/* Main Dramatic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.04] max-w-4xl">
          WE FRAME
          <br />
          <span className="text-neutral-300 font-light italic">THE MOMENTS</span>
          <br />
          THAT MATTER.
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed tracking-wide">
          Photography, videography, and visual storytelling crafted with intention.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold text-xs tracking-editorial uppercase hover:bg-neutral-200 transition-all group"
          >
            <span>VIEW OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium text-xs tracking-editorial uppercase hover:border-white hover:bg-white/5 transition-all"
          >
            <span>START A PROJECT</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#selected-work"
          className="mt-16 sm:mt-20 inline-flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
          aria-label="Scroll to Selected Work"
        >
          <span className="text-[10px] tracking-cinematic uppercase font-mono">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
