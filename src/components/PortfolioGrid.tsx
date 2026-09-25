'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
  enableFiltering?: boolean;
  initialFilter?: string;
}

const FILTER_TABS: (ProjectCategory | 'All')[] = [
  'All',
  'Graduation',
  'Portrait',
  'Event',
  'Commercial',
  'Wedding',
  'Campaign',
  'Product',
];

export default function PortfolioGrid({
  projects,
  enableFiltering = false,
  initialFilter = 'All',
}: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialFilter);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase() === activeCategory.toLowerCase() ||
            p.serviceType.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="w-full">
      {/* Category Filter Tabs with Mobile Swipe */}
      {enableFiltering && (
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-16 border-b border-white/[0.08] pb-4 sm:pb-6 overflow-x-auto no-scrollbar sm:flex-wrap -mx-6 px-6 sm:mx-0 sm:px-0">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`text-[11px] sm:text-xs tracking-editorial uppercase px-3.5 sm:px-4 py-2 border transition-all duration-300 shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'border-white bg-white text-black font-semibold'
                    : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/30 bg-black/20'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => {
          // Asymmetric editorial rhythm based on index pattern
          let colSpanClass = 'md:col-span-6';
          if (index % 5 === 0) {
            // Heroic widescreen feature card
            colSpanClass = 'md:col-span-12 lg:col-span-8';
          } else if (index % 5 === 1) {
            colSpanClass = 'md:col-span-12 lg:col-span-4';
          } else if (index % 5 === 2) {
            colSpanClass = 'md:col-span-6 lg:col-span-4';
          } else if (index % 5 === 3) {
            colSpanClass = 'md:col-span-6 lg:col-span-4';
          } else if (index % 5 === 4) {
            colSpanClass = 'md:col-span-12 lg:col-span-4';
          }

          return (
            <div key={project.id} className={`${colSpanClass}`}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center border border-dashed border-white/10 p-12">
          <p className="text-sm tracking-editorial uppercase text-neutral-400">
            No projects found in this archive category.
          </p>
        </div>
      )}
    </div>
  );
}
