import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
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
          <span>// INQUIRY SEQUENCE</span>
          <span>EST. 2026</span>
        </div>
        <div className="flex justify-between text-[9px] sm:text-[10px] tracking-cinematic font-mono text-neutral-600 uppercase">
          <span>NOIR FRAME STUDIO</span>
          <span>OPEN COMMISSIONS</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-20 flex flex-col items-center">
        <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-400 block mb-4 sm:mb-6">
          // INITIATE DIALOGUE
        </span>

        {/* Dramatic Large Typography */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.02]">
          LET&apos;S CREATE
          <br />
          <span className="text-neutral-400 font-light italic">SOMETHING</span>
          <br />
          WORTH FRAMING.
        </h2>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-base md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          Have a story, campaign, event, or idea in mind? Let&apos;s turn it into visual work.
        </p>

        {/* Action Button */}
        <div className="mt-8 sm:mt-12 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all group"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Contact info strip */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-14 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-neutral-500" />
            <a href="mailto:hello@noirframe.studio" className="hover:text-white transition-colors">
              hello@noirframe.studio
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>BANJARMASIN • JAKARTA • BALI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
