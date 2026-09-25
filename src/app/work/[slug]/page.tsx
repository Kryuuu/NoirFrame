import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Film } from 'lucide-react';
import ProjectGallery from '@/components/ProjectGallery';
import { getAllProjects, getNextProject, getProjectBySlug } from '@/data/portfolio';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — NOIR FRAME',
    };
  }

  return {
    title: `${project.title} — NOIR FRAME`,
    description: project.description,
    openGraph: {
      title: `${project.title} — NOIR FRAME`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  return (
    <article className="pt-28 pb-24 bg-[#080808] min-h-screen text-neutral-200">
      {/* Top Breadcrumb & Back Link */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>KEMBALI KE ARSIP</span>
        </Link>
      </div>

      {/* 1. Project Editorial Header */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-10 sm:mb-16">
        <div className="border-b border-white/[0.08] pb-6 sm:pb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>{project.category}</span>
            <span>//</span>
            <span>{project.serviceType}</span>
            <span>//</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none mb-6 sm:mb-8">
            {project.title}
          </h1>

          {/* Project Meta Spec Table */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/[0.08] text-xs font-mono">
            <div>
              <span className="text-neutral-500 block uppercase text-[9px] sm:text-[10px] tracking-wider mb-1">
                KLIEN
              </span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase text-[9px] sm:text-[10px] tracking-wider mb-1">
                LOKASI
              </span>
              <span className="text-white font-medium">{project.location}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase text-[9px] sm:text-[10px] tracking-wider mb-1">
                TAHUN
              </span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase text-[9px] sm:text-[10px] tracking-wider mb-1">
                DISIPLIN
              </span>
              <span className="text-white font-medium">{project.serviceType}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Full-Width Hero Cover Frame */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-14 sm:mb-28">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden border border-white/20 bg-[#0c0c0c]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Viewfinder corner brackets */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-white/80" />
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white/80" />
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white/80" />
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-white/80" />

          {/* Technical camera specs overlay */}
          {project.cameraSpecs && (
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono tracking-cinematic uppercase text-neutral-300">
              <Camera className="w-3 h-3 text-neutral-400" />
              <span>{project.cameraSpecs}</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Narrative Context & Story Breakdown */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-16 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2 sm:mb-3">
              // KONSEP & INTENSI
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              CERITA KARYA
            </h2>
            
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                  LUARAN KARYA
                </span>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-white/60 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg font-light text-neutral-300 leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-normal leading-relaxed">
              {project.description}
            </p>
            {project.story && (
              <p className="text-neutral-400">
                {project.story}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 4. Editorial Image Gallery */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-28">
        <ProjectGallery images={project.images} title={project.title} />
      </div>

      {/* 5. Production Credits & Technical Archive */}
      {project.credits && project.credits.length > 0 && (
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-16 sm:mb-28">
          <div className="p-5 sm:p-12 border border-white/[0.08] bg-[#050505]">
            <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-5 sm:mb-6">
              <Film className="w-3.5 h-3.5" />
              <span>KREDIT PRODUKSI</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-xs font-mono">
              {project.credits.map((credit, idx) => (
                <div key={idx} className="border-l border-white/10 pl-3 sm:pl-4 py-1">
                  <span className="text-neutral-500 block text-[9px] sm:text-[10px] tracking-wider uppercase">
                    {credit.role}
                  </span>
                  <span className="text-neutral-200 font-medium text-xs sm:text-sm">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. Next Project Navigation Banner */}
      {nextProject && (
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-white/[0.08] pt-10 sm:pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] sm:text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-1 sm:mb-2">
                ARSIP BERIKUTNYA //
              </span>
              <h3 className="text-xl sm:text-4xl font-extrabold uppercase tracking-tight text-white hover:text-neutral-300 transition-colors">
                <Link href={`/work/${nextProject.slug}`}>
                  {nextProject.title}
                </Link>
              </h3>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-semibold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all group shrink-0"
            >
              <span>JELAJAHI KARYA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
