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

        {/* Reactive Viewfinder Corner Brackets that expand on hover */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-white/40 pointer-events-none group-hover:border-white group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-white/40 pointer-events-none group-hover:border-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300" />

        {/* Gradient Overlay for hover contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-500" />

        {/* Floating Category Badge */}
        {showCategoryBadge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] tracking-cinematic uppercase px-2.5 py-1 bg-black/60 backdrop-blur-md text-neutral-300 border border-white/10 group-hover:border-white/30 transition-colors">
              {project.category}
            </span>
          </div>
        )}

        {/* Hover View Project CTA for desktop */}
        <div className="hidden sm:flex absolute bottom-4 right-4 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out items-center gap-1.5 text-[11px] tracking-editorial uppercase text-white font-medium bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-white/30 shadow-lg">
          <span>LIHAT KARYA</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Project Meta Information */}
      <div className="p-4 sm:p-6 bg-[#0a0a0a] border-t border-white/[0.06] flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[10px] tracking-cinematic text-neutral-500 uppercase font-mono mb-1.5 truncate">
            <span>{project.serviceType}</span>
            <span>•</span>
            <span>{project.location}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-lg font-bold tracking-wide text-white uppercase group-hover:text-neutral-200 transition-colors truncate">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-neutral-500 sm:hidden shrink-0 group-hover:text-white transition-colors" />
          </div>
          <p className="mt-1 text-xs text-neutral-400 line-clamp-2 font-light">
            {project.description}
          </p>
        </div>

        <div className="text-right shrink-0 hidden sm:block">
          <span className="text-xs font-mono text-neutral-500 block">
            {project.year}
          </span>
        </div>
      </div>
    </Link>
  );
}
