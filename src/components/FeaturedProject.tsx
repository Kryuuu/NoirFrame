import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface FeaturedProjectProps {
  project: Project;
  badgeNumber?: string;
}

export default function FeaturedProject({
  project,
  badgeNumber = '01',
}: FeaturedProjectProps) {
  return (
    <section className="relative py-16 sm:py-32 bg-[#050505] border-y border-white/[0.08] overflow-hidden">
      {/* Background Frame Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border-x border-white/[0.06]" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Large Visual Frame (Left or Dominant) */}
          <div className="lg:col-span-7">
            <Link
              href={`/work/${project.slug}`}
              className="group block relative aspect-[16/10] overflow-hidden border border-white/20 bg-[#0e0e0e]"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Viewfinder frame corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/70" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/70" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/70" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/70" />

              {/* Camera spec pill overlay */}
              <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] tracking-cinematic font-mono text-neutral-300 uppercase">
                <span>{project.cameraSpecs || 'MASTER PRIME CINEMATOGRAPHY'}</span>
              </div>
            </Link>
          </div>

          {/* Project Information & Narrative (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-500 tracking-widest">
                PROJECT {badgeNumber}
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="text-[11px] font-semibold tracking-cinematic uppercase text-neutral-400">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
              {project.title}
            </h2>

            <blockquote className="border-l border-white/20 pl-4 py-1 text-xs sm:text-base text-neutral-300 italic font-light">
              &ldquo;From atmosphere to emotion, every frame is created to tell a story.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Quick Metadata Spec Sheet */}
            <div className="grid grid-cols-2 gap-4 py-3 sm:py-4 border-y border-white/[0.06] text-xs font-mono">
              <div>
                <span className="text-neutral-500 block text-[10px] tracking-wider uppercase">CLIENT</span>
                <span className="text-neutral-200">{project.client}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px] tracking-wider uppercase">LOCATION</span>
                <span className="text-neutral-200">{project.location}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href={`/work/${project.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-editorial uppercase hover:bg-neutral-200 transition-all group"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
