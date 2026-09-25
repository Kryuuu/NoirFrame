'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Sparkles, MessageCircle } from 'lucide-react';
import { useWhatsAppModal } from '@/components/WhatsAppModal';

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
    name: 'SESI FOTOGRAFI',
    category: 'FOTO & STILL IMAGERY',
    price: 'Rp 550.000',
    duration: '3 JAM SESI',
    description: 'Dokumentasi foto profesional dengan pencahayaan natural dan color-grading khas NOIR FRAME.',
    features: [
      '3 Jam Waktu Sesi Foto',
      '1 Fotografer Profesional',
      'Pengambilan Foto Tanpa Batas',
      'Semua File Resolusi Tinggi (Color Graded)',
      '30-50 Foto Pilihan Terbaik',
      'Akses Cloud Pribadi Cepat (Google Drive)',
    ],
  },
  {
    id: 'video-regular',
    name: 'SESI VIDEOGRAFI',
    category: 'CINEMATIC MOTION',
    price: 'Rp 550.000',
    duration: '3 JAM SESI',
    description: 'Liputan video sinematik untuk event, brand visual, atau momen berharga dengan dynamic pacing.',
    features: [
      '3 Jam Waktu Sesi Video',
      '1 Videografer Profesional',
      'Perekaman Resolusi Bioskop 4K',
      'Video Highlight Sinematik (1-2 Menit)',
      '1x Video Vertikal (9:16 untuk Reels/TikTok)',
      'Sinkronisasi Musik & Audio Khusus',
    ],
  },
  {
    id: 'combo-photo-video',
    name: 'FOTO + VIDEOGRAFI',
    category: 'PAKET KOMBO LENGKAP',
    price: 'Rp 990.000',
    duration: 'NILAI TERBAIK // 3 JAM',
    badge: 'PALING DIMINATI',
    popular: true,
    description: 'Paket kombinasi komplit foto dan video secara simultan. Mendokumentasikan setiap sudut momen berharga.',
    features: [
      '3 Jam Sesi Dokumentasi Lengkap',
      '2 Kru (1 Fotografer + 1 Videografer)',
      'Seluruh Galeri Foto Pilihan (Color Graded)',
      '1 Video Highlight Sinematik (1-3 Menit)',
      '2x Potongan Format Vertikal (9:16)',
      'Pengiriman Pascaproduksi Prioritas',
    ],
  },
  {
    id: 'video-drone',
    name: 'VIDEOGRAFI + DRONE',
    category: 'AERIAL & SINEMATIK',
    price: 'Rp 1.200.000',
    duration: 'LIPUTAN AERIAL // 3 JAM',
    badge: 'PRODUKSI AERIAL',
    description: 'Produksi video sinematik darat dilengkapi pengambilan gambar udara (Aerial Drone 4K) yang megah.',
    features: [
      '3 Jam Waktu Sesi Total',
      'Sinematografi Darat + Drone Udara',
      'Operator Drone Berlisensi & Bersertifikat',
      'Perspektif Udara Drone 4K DCI',
      'Master Highlight Sinematik Lengkap (2-3 Menit)',
      'Master Tata Suara & Desain Audio Lengkap',
    ],
  },
];

export default function PricingSection() {
  const { openWhatsAppModal } = useWhatsAppModal();

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
              <span>DAFTAR HARGA</span>
              <span>//</span>
              <span>BIAYA INVESTASI</span>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
              TRANSPARAN
              <br />
              <span className="text-neutral-400 font-light italic">HARGA & PAKET.</span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-light">
              Investasi transparan dengan kualitas visual sinematik standar rumah produksi profesional.
            </p>
            <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
              TERSEDIA PESANAN KHUSUS SESUAI PERMINTAAN
            </span>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 border transition-all duration-500 ease-out hover:-translate-y-1.5 ${
                  plan.popular
                    ? 'bg-[#0d0d0d] border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.8)] ring-1 ring-white/20 hover:border-white/60'
                    : 'bg-[#080808] border-white/[0.08] hover:border-white/35 hover:bg-[#0c0c0c] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white text-black text-[9px] font-mono tracking-cinematic uppercase font-bold flex items-center gap-1.5 shadow-md">
                    {plan.popular && <Sparkles className="w-2.5 h-2.5" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Frame Corner Accents that react on hover */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300" />

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
                      HARGA BERSIH / SESI
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Deliverables / Features List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
                      YANG ANDA DAPATKAN:
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
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsAppModal({
                        packageTitle: `${plan.name} (${plan.price})`,
                      })
                    }
                    className={`w-full py-3.5 px-4 text-xs font-semibold tracking-editorial uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'border border-white/20 text-white hover:bg-white hover:text-black hover:border-white'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>PESAN VIA WHATSAPP</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
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
            <span>Tersedia penambahan durasi, liputan multi-hari, dan konsep komersial/pernikahan khusus.</span>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-colors uppercase tracking-editorial shrink-0"
          >
            KONSULTASI SEKARANG
          </Link>
        </div>
      </div>
    </section>
  );
}
