import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About The Studio — NOIR FRAME',
  description:
    'Learn about NOIR FRAME: our philosophy of visual storytelling, creative direction, and cinematic discipline.',
};

const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'THE DISCIPLINE OF NEGATIVE SPACE',
    text: 'We believe what you leave out of the frame is just as crucial as what you include. Emptiness grants breathing room for raw emotion and architectural form.',
  },
  {
    number: '02',
    title: 'INTENTIONAL ILLUMINATION',
    text: 'Light is our primary medium. We sculpt highlights and shadows using chiaroscuro techniques that elevate subjects beyond standard flat documentation.',
  },
  {
    number: '03',
    title: 'NARRATIVE ARCHITECTURE',
    text: 'Every image belongs to a larger sequence. We structure visual rhythm like cinema—alternating between breathtaking wide tableaus and visceral close-ups.',
  },
  {
    number: '04',
    title: 'ARCHIVAL LONGEVITY',
    text: 'Trends expire rapidly. We prioritize timeless color grading, natural skin tones, and organic textures that maintain dignity and resonance decades into the future.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#080808] min-h-screen text-neutral-200">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-28 pb-6 sm:pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>IDENTITY</span>
            <span>//</span>
            <span>STUDIO MANIFESTO</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
            AESTHETIC
            <br />
            <span className="text-neutral-300 font-light italic">WITH INTENTION.</span>
          </h1>
        </div>

        {/* Studio Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 sm:mb-28">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-lg text-neutral-300 font-light leading-relaxed">
            <p className="text-xl sm:text-3xl text-white font-normal leading-relaxed">
              NOIR FRAME is a visual creative studio focused on photography, videography, and visual storytelling.
            </p>
            <p className="text-neutral-400">
              We believe a strong image is more than something that looks good. It should carry atmosphere, emotion, identity, and meaning.
            </p>
            <p className="text-neutral-400">
              From intimate moments to large-scale productions, we approach every project with a balance of creativity, precision, and intention.
            </p>

            {/* Studio Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-white/[0.08]">
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
                  XX+
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  PROJECTS
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
                  XX+
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  CLIENTS
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono block">
                  20XX
                </span>
                <span className="text-[9px] sm:text-xs tracking-cinematic uppercase text-neutral-500 font-mono mt-1 block">
                  — PRESENT
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] border border-white/20 bg-[#0d0d0d] overflow-hidden">
              <Image
                src="/porto/campaign/campaign-02.jpg"
                alt="NOIR FRAME Studio Philosophy"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/80" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-cinematic uppercase text-neutral-300 bg-black/80 px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/10">
                RAW DISCIPLINE // FRAME ARCHIVE
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of NOIR FRAME */}
        <div className="pt-12 sm:pt-20 border-t border-white/[0.08] mb-16 sm:mb-28">
          <div className="mb-8 sm:mb-14">
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
              // FOUNDATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              CORE PHILOSOPHY
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
