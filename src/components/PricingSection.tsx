import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  category: string;
  price: string;
  duration?: string;
  badge?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'photo-regular',
    name: 'PHOTOGRAPHY SESSION',
    category: 'STILL IMAGERY',
    price: 'Rp 550.000',
    duration: '3 JAM SESI',
    description: 'Dokumentasi foto profesional dengan pencahayaan natural dan color-grading khas NOIR FRAME.',
    features: [
      '3 Jam Waktu Sesi Foto',
      '1 Professional Photographer',
      'Unlimited Raw Capture Shots',
      'All High-Res Color Graded Files',
      '30-50 Curated Highlight Photos',
      'Private High-Speed Cloud Access (Google Drive)',
    ],
  },
  {
    id: 'video-regular',
    name: 'VIDEOGRAPHY SESSION',
    category: 'CINEMATIC MOTION',
    price: 'Rp 550.000',
    duration: '3 JAM SESI',
    description: 'Liputan video sinematik untuk event, brand visual, atau momen berharga dengan dynamic pacing.',
    features: [
      '3 Jam Waktu Sesi Video',
      '1 Professional Videographer',
      '4K Cinema Resolution Capture',
      'Cinematic Highlight Video (1-2 Menit)',
      '1x Vertical Video (9:16 untuk Reels/TikTok)',
      'Bespoke Audio & Music Sync',
    ],
  },
  {
    id: 'combo-photo-video',
    name: 'PHOTO + VIDEOGRAPHY',
    category: 'COMPLETE COMBO',
    price: 'Rp 990.000',
    duration: 'BEST VALUE // 3 JAM',
    badge: 'MOST POPULAR',
    popular: true,
    description: 'Paket kombinasi komplit foto dan video secara simultan. Mendokumentasikan setiap sudut momen berharga.',
    features: [
      '3 Jam Sesi Dokumentasi Lengkap',
      '2 Crew (1 Photographer + 1 Videographer)',
      'Full Curated Photo Gallery (Color Graded)',
      '1 Cinematic Highlight Video (1-3 Menit)',
      '2x Social Media Cutdowns (9:16)',
      'Priority Post-Production Delivery',
    ],
  },
  {
    id: 'video-drone',
    name: 'VIDEOGRAPHY + DRONE',
    category: 'AERIAL & CINEMATICS',
    price: 'Rp 1.200.000',
    duration: 'AERIAL COVERAGE // 3 JAM',
    badge: 'AERIAL PRODUCTION',
    description: 'Produksi video sinematik darat dilengkapi pengambilan gambar udara (Aerial Drone 4K) yang megah.',
    features: [
      '3 Jam Waktu Sesi Total',
      'Ground Cinematography + Aerial Drone',
      'Licensed & Certified Drone Operator',
      '4K DCI Drone Aerial Perspectives',
      'Full Cinematic Master Highlight (2-3 Menit)',
      'Full Master Audio & Sound Design',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-36 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      {/* Background Frame Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border-x border-white/[0.05]" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-24 pb-6 sm:pb-8 border-b border-white/[0.08] gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-2 sm:mb-3">
              <span>PRICELIST</span>
              <span>//</span>
              <span>INVESTMENT RATES</span>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
              TRANSPARENT
              <br />
              <span className="text-neutral-400 font-light italic">PRICING & RATES.</span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-light">
              Investasi transparan dengan kualitas visual sinematik standar production house profesional.
            </p>
            <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
              CUSTOM COMMISSIONS AVAILABLE UPON REQUEST
            </span>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#0d0d0d] border-white/40 shadow-2xl ring-1 ring-white/20'
                    : 'bg-[#080808] border-white/[0.08] hover:border-white/25 hover:bg-[#0c0c0c]'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white text-black text-[9px] font-mono tracking-cinematic uppercase font-bold flex items-center gap-1.5 shadow-md">
                    {plan.popular && <Sparkles className="w-2.5 h-2.5" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Frame Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 pointer-events-none" />

                <div>
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
                    <span>{plan.category}</span>
                    {plan.duration && (
                      <span className="text-neutral-400 font-semibold">{plan.duration}</span>
                    )}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-3 sm:mb-4">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-white/[0.08]">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                      {plan.price}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mt-1">
                      NET PRICE / SESSION
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Deliverables / Features List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
                      WHAT IS INCLUDED:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking CTA Button */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <Link
                    href={`/contact?package=${plan.id}`}
                    className={`w-full py-3 px-4 text-xs font-semibold tracking-editorial uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'border border-white/20 text-white hover:bg-white hover:text-black hover:border-white'
                    }`}
                  >
                    <span>BOOK THIS PACKAGE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note / Custom Requests */}
        <div className="mt-12 p-6 border border-white/[0.06] bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="text-center sm:text-left">
            <span className="text-white font-semibold uppercase block mb-1">
              BUTUH DURASI LEBIH LAMA ATAU KONSEP KHUSUS?
            </span>
            <span>Tersedia penambahan durasi, multi-day coverage, dan konsep komersial/wedding khusus.</span>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-colors uppercase tracking-editorial shrink-0"
          >
            KONSULTASI GRATIS
          </Link>
        </div>
      </div>
    </section>
  );
}
