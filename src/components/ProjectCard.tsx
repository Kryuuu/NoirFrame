import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  aspectClassName?: string;
  showCategoryBadge?: boolean;
}

export default function ProjectCard({
  project,
  aspectClassName = 'aspect-[16/10]',
  showCategoryBadge = true,
}: ProjectCardProps) {
  // Determine aspect ratio class dynamically if not explicitly overridden
  let resolvedAspect = aspectClassName;
  if (project.aspectRatio === 'portrait') {
    resolvedAspect = 'aspect-[4/5]';
  } else if (project.aspectRatio === 'square') {
    resolvedAspect = 'aspect-square';
  } else if (project.aspectRatio === 'landscape') {
    resolvedAspect = 'aspect-[16/10]';
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block relative overflow-hidden bg-[#0e0e0e] border border-white/[0.08] hover:border-white/30 transition-all duration-500"
    >
      {/* Visual Frame Container */}
      <div className={`relative w-full ${resolvedAspect} overflow-hidden`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Subtle Frame Corner Marks */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/40 pointer-events-none" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/40 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/40 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/40 pointer-events-none" />

        {/* Gradient Overlay for hover contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Floating Category Badge */}
        {showCategoryBadge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] tracking-cinematic uppercase px-2.5 py-1 bg-black/60 backdrop-blur-md text-neutral-300 border border-white/10">
              {project.category}
            </span>
          </div>
        )}

        {/* Hover View Project CTA */}
        <div className="absolute bottom-4 right-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 text-[11px] tracking-editorial uppercase text-white font-medium bg-black/70 backdrop-blur-sm px-3 py-1.5 border border-white/20">
          <span>VIEW PROJECT</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Project Meta Information */}
      <div className="p-5 sm:p-6 bg-[#0a0a0a] border-t border-white/[0.06] flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] tracking-cinematic text-neutral-500 uppercase font-mono mb-1.5">
            <span>{project.serviceType}</span>
            <span>•</span>
            <span>{project.location}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold tracking-wide text-white uppercase group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-neutral-400 line-clamp-2 font-light">
            {project.description}
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs font-mono text-neutral-500 block">
            {project.year}
          </span>
        </div>
      </div>
    </Link>
  );
}
