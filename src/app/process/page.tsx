import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Alur Kerja Produksi — NOIR FRAME',
  description:
    'Pelajari metodologi kreatif 4 tahap NOIR FRAME: dari eksplorasi konsep hingga penyerahan hasil akhir.',
};

const PHASES = [
  {
    step: '01',
    name: 'EKSPLORASI',
    subtitle: 'DIALOG & PENYELARASAN ESTETIKA',
    description:
      'Setiap karya bermula dari dialog yang seksama. Kami mendalami visi cerita, identitas brand, kehangatan emosi yang ingin disampaikan, serta jadwal penting momen Anda.',
    steps: [
      'Sesi Diskusi Konsep & Visi Visual',
      'Riset Estetika & Referensi Moodboard',
      'Peninjauan Lokasi & Kelayakan Logistik',
      'Penetapan Ruang Lingkup & Jadwal Sesi',
    ],
  },
  {
    step: '02',
    name: 'PERENCANAAN',
    subtitle: 'KONSEP & PRA-PRODUKSI',
    description:
      'Kami merumuskan cetak biru kreatif. Dari treatment visual dan moodboard terarah hingga shot list, tata cahaya, dan pemilihan peralatan kamera presisi.',
    steps: [
      'Treatment Visual & Panduan Gaya',
      'Shot-by-Shot Storyboard & Panduan Angle',
      'Koordinasi Kostum, Properti & Lokasi',
      'Persiapan Kru & Kalibrasi Peralatan Sesi',
    ],
  },
  {
    step: '03',
    name: 'PRODUKSI',
    subtitle: 'SESI PEMOTRETAN & PENGAMBILAN GAMBAR',
    description:
      'Di lokasi pemotretan, kru kami bekerja dengan arahan gaya yang tenang dan pembingkaian penuh intensi. Kami memanfaatkan cahaya alami, kontras dramatis, dan optik bioskop.',
    steps: [
      'Pengarahan Gaya Alami & Pemantauan Real-Time',
      'Perekaman Sinematik & Foto High-Resolution',
      'Dokumentasi Dokumenter Momen Spontan',
      'Pencadangan Ganda Data Aman di Lokasi',
    ],
  },
  {
    step: '04',
    name: 'PENYERAHAN',
    subtitle: 'PASCAPRODUKSI & SERAH TERIMA MASTER',
    description:
      'Penyempurnaan setiap frame. Kami melakukan seleksi kurasi, master color grading berstandar sinema, penataan audio khusus, dan penyerahan arsip digital aman.',
    steps: [
      'Kurasi Foto Terbaik & Editing Video',
      'Master Color Grading Khas NOIR FRAME',
      'Sinkronisasi Musik & Desain Tata Suara',
      'Penyerahan File Resolusi Penuh & Galeri Cloud',
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#080808] min-h-screen text-neutral-200">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Header */}
        <div className="mb-10 sm:mb-28 pb-6 sm:pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>METODOLOGI</span>
            <span>//</span>
            <span>ALUR KERJA STUDIO</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
            DARI GAGASAN
            <br />
            <span className="text-neutral-300 font-light italic">MENJADI KARYA.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base max-w-2xl font-light text-neutral-400 leading-relaxed">
            Kami mengeliminasi keraguan. Alur kerja 4 tahap kami menyeimbangkan eksplorasi kreatif bebas dengan ketepatan logistik yang rapi dari awal brief hingga serah terima karya.
          </p>
        </div>

        {/* 4 Phases In Depth */}
        <div className="space-y-10 sm:space-y-24 mb-16 sm:mb-32">
          {PHASES.map((phase) => (
            <div
              key={phase.step}
              className="p-5 sm:p-12 lg:p-16 border border-white/[0.08] bg-[#050505] relative overflow-hidden"
            >
              {/* Giant Background Step Number */}
              <div className="absolute right-4 top-4 text-6xl sm:text-9xl font-mono font-black text-white/[0.03] select-none pointer-events-none">
                {phase.step}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
                    TAHAP {phase.step} // {phase.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    {phase.name}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                      LUARAN UTAMA &amp; AKSI KERJA
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.steps.map((action, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-center gap-2 text-xs text-neutral-300 font-mono"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CTA */}
      <CTASection />
    </div>
  );
}
