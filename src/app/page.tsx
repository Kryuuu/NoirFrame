import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import FeaturedProject from '@/components/FeaturedProject';
import Services from '@/components/Services';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import Process from '@/components/Process';
import Clients from '@/components/Clients';
import CTASection from '@/components/CTASection';
import { getAllProjects, getFeaturedProjects } from '@/data/portfolio';

export default function HomePage() {
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();
  const heroFeatured = featuredProjects[0] || allProjects[0];
  
  // Display a curated selection of 5-6 projects on the home page in an editorial rhythm
  const selectedProjects = allProjects.slice(0, 6);

  return (
    <div className="w-full">
      {/* 1. Cinematic Fullscreen Hero */}
      <Hero />

      {/* 2. Selected Work Section */}
      <section id="selected-work" className="py-28 sm:py-36 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                // ARCHIVE CURATION
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
                SELECTED WORK
              </h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-neutral-400 max-w-sm font-light">
                A selection of stories, moments, and visual identities we&apos;ve captured.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs tracking-editorial uppercase text-neutral-300 hover:text-white mt-4 transition-colors group"
              >
                <span>EXPLORE ALL ARCHIVES</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Editorial Asymmetrical Portfolio Grid */}
          <PortfolioGrid projects={selectedProjects} enableFiltering={false} />

          {/* Bottom View All Link */}
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-xs tracking-cinematic uppercase text-white hover:bg-white hover:text-black hover:border-white transition-all group"
            >
              <span>VIEW FULL PORTFOLIO ARCHIVE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Showcase Project */}
      {heroFeatured && (
        <FeaturedProject project={heroFeatured} badgeNumber="01" />
      )}

      {/* 4. What We Do (Editorial Services with interactive hover preview) */}
      <Services />

      {/* 5. Pricelist & Investment Rates */}
      <PricingSection />

      {/* 6. About NOIR FRAME */}
      <AboutSection />

      {/* 6. From Idea To Frame (4-Step Process) */}
      <Process />

      {/* 7. Selected Clients */}
      <Clients />

      {/* 8. Large Typography CTA */}
      <CTASection />
    </div>
  );
}
