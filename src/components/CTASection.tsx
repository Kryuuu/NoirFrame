'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useWhatsAppModal } from '@/components/WhatsAppModal';

export default function CTASection() {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <section className="relative py-20 sm:py-44 bg-[#050505] overflow-hidden">
      {/* Background Cinematic Texture with Deep Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/porto/campaign/campaign-01.jpg"
          alt="NOIR FRAME Atmosphere"
          fill
          sizes="100vw"
          className="object-cover opacity-20 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]" />
      </div>

      {/* Frame Outlines */}
      <div className="absolute inset-3 sm:inset-12 pointer-events-none border border-white/[0.06] z-10 flex flex-col justify-between p-3 sm:p-6">
        <div className="flex justify-between text-[9px] sm:text-[10px] tracking-cinematic font-mono text-neutral-600 uppercase">
          <span>// SESI KONSULTASI</span>
          <span>EST. 2023</span>
        </div>
        <div className="flex justify-between text-[9px] sm:text-[10px] tracking-cinematic font-mono text-neutral-600 uppercase">
          <span>STUDIO NOIR FRAME</span>
          <span>MENERIMA PROYEK BARU</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-20 flex flex-col items-center">
        <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-400 block mb-4 sm:mb-6">
          // MULAI KONSULTASI
        </span>

        {/* Dramatic Large Typography */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.02]">
          MARI CIPTAKAN
          <br />
          <span className="text-neutral-400 font-light italic">KARYA YANG</span>
          <br />
          BERMAKNA ABADI.
        </h2>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-base md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          Punya konsep visual, rencana wisuda, acara, atau kampanye brand? Hubungi WhatsApp kami sekarang untuk berdiskusi langsung dengan tim studio.
        </p>

        {/* Action Button */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => openWhatsAppModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>HUBUNGI WHATSAPP (PILIH ADMIN)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-5 border border-white/20 hover:border-white text-white text-xs tracking-cinematic uppercase transition-colors"
          >
            <span>INFO KONTAK LENGKAP</span>
          </Link>
        </div>

        {/* Contact info strip */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-14 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <button
              onClick={() => openWhatsAppModal()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              LAYANAN WHATSAPP RESPON CEPAT
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-neutral-500" />
            <a href="mailto:hello@noirframe.studio" className="hover:text-white transition-colors">
              hello@noirframe.studio
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>BANJARMASIN • KALIMANTAN SELATAN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
