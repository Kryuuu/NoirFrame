import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-36 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      {/* Background Subtle Frame Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border-x border-white/[0.05]" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Large Photographic Showcase Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="group relative aspect-[4/5] border border-white/20 bg-[#0d0d0d] overflow-hidden hover:border-white/40 transition-colors duration-500">
              <Image
                src="/porto/portrait/portrait-02.jpg"
                alt="NOIR FRAME Creative Studio Work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Viewfinder crosshairs that expand on hover */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-white/80 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-white/80 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-white/80 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />

              {/* Studio Plate Badge */}
              <div className="absolute bottom-4 left-4 z-10 p-2.5 sm:p-3 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono tracking-cinematic uppercase text-neutral-300">
                ARSIP STUDIO // OPTIK 35MM
              </div>
            </div>
          </div>

          {/* Copy and Philosophy */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2 sm:mb-3">
                // MANIFESTO & IDENTITAS
              </span>
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.06]">
                TENTANG
                <br />
                NOIR FRAME
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                NOIR FRAME adalah studio kreatif visual yang berdedikasi pada fotografi, videografi sinematik, dan penceritaan visual bernyawa.
              </p>
              <p className="text-neutral-400">
                Kami percaya sebuah karya visual sejati lebih dari sekadar gambar yang indah. Karya harus memiliki atmosfer, getaran emosi, identitas, dan makna yang abadi.
              </p>
              <p className="text-neutral-400">
                Dari momen personal berharga hingga produksi komersial dan event berskala besar, kami mengeksekusi setiap proyek dengan perpaduan kepekaan artistik, presisi teknis, dan intensi yang tulus.
              </p>
            </div>

            {/* Studio Statistics (Honest & Editorial) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 sm:pt-6 border-t border-white/[0.08]">
              <div>
                <span className="text-xl sm:text-3xl font-extrabold text-white font-mono block">
                  100+
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  PROYEK TUNTAS
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-3xl font-extrabold text-white font-mono block">
                  80+
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  KLIEN KREATIF
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-3xl font-extrabold text-white font-mono block">
                  2023
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  — SEKARANG
                </span>
              </div>
            </div>

            {/* Read Studio Philosophy Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs tracking-editorial uppercase text-white hover:text-neutral-300 border-b border-white/40 pb-1 hover:border-white transition-all group"
              >
                <span>BACA PROFIL STUDIO LENGKAP</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
