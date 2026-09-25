import React from 'react';
import type { Metadata } from 'next';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTASection from '@/components/CTASection';
import { getAllProjects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Work & Portfolio Archive — NOIR FRAME',
  description:
    'Explore the portfolio archive of NOIR FRAME: commercial films, intimate wedding stories, luxury brand visuals, and fine art portraits.',
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-32 pb-20 bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-16 sm:mb-20 pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-4">
            <span>INDEX</span>
            <span>//</span>
            <span>PORTFOLIO ARCHIVE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
            SELECTED
            <br />
            <span className="text-neutral-300 font-light italic">STORIES & FRAMES.</span>
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4 text-neutral-400">
            <p className="text-sm max-w-xl font-light leading-relaxed">
              Every project represents a tailored collaboration between light, intention, and narrative architecture. Browse by discipline or archive category.
            </p>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              TOTAL COMMISSIONS // {projects.length} FRAMES
            </span>
          </div>
        </div>

        {/* Filterable Portfolio Grid */}
        <PortfolioGrid projects={projects} enableFiltering={true} />
      </div>

      {/* Embedded CTA */}
      <div className="mt-28">
        <CTASection />
      </div>
    </div>
  );
}
