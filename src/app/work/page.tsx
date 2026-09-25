import React from 'react';
import type { Metadata } from 'next';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTASection from '@/components/CTASection';
import { getAllProjects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Karya & Arsip Portofolio — NOIR FRAME',
  description:
    'Jelajahi arsip portofolio visual NOIR FRAME: film komersial, dokumentasi wisuda, campaign visual brand, dan fotografi portrait.',
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#080808] min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Page Header */}
        <div className="mb-10 sm:mb-20 pb-6 sm:pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>INDEKS</span>
            <span>//</span>
            <span>ARSIP PORTOFOLIO</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
            KARYA &amp;
            <br />
            <span className="text-neutral-300 font-light italic">ARSIP TERPILIH.</span>
          </h1>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between sm:items-end gap-3 sm:gap-4 text-neutral-400">
            <p className="text-xs sm:text-sm max-w-xl font-light leading-relaxed">
              Setiap karya merepresentasikan kolaborasi harmonis antara cahaya, intensi artistik, dan narasi yang bernyawa. Telusuri berdasarkan kategori atau disiplin karya.
            </p>
            <span className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase">
              TOTAL DOKUMENTASI // {projects.length} KARYA
            </span>
          </div>
        </div>

        {/* Filterable Portfolio Grid */}
        <PortfolioGrid projects={projects} enableFiltering={true} />
      </div>

      {/* Embedded CTA */}
      <div className="mt-16 sm:mt-28">
        <CTASection />
      </div>
    </div>
  );
}
