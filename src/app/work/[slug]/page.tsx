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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ARCHIVE</span>
        </Link>
      </div>

      {/* 1. Project Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-4">
            <span>{project.category}</span>
            <span>//</span>
            <span>{project.serviceType}</span>
            <span>//</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none mb-8">
            {project.title}
          </h1>

          {/* Project Meta Spec Table */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono">
            <div>
              <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-1">
                CLIENT
              </span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-1">
                LOCATION
              </span>
              <span className="text-white font-medium">{project.location}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-1">
                YEAR
              </span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase text-[10px] tracking-wider mb-1">
                DISCIPLINE
              </span>
              <span className="text-white font-medium">{project.serviceType}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Full-Width Hero Cover Frame */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-white/20 bg-[#0c0c0c]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Viewfinder corner brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/80" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/80" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/80" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/80" />

          {/* Technical camera specs overlay */}
          {project.cameraSpecs && (
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-cinematic uppercase text-neutral-300">
              <Camera className="w-3 h-3 text-neutral-400" />
              <span>{project.cameraSpecs}</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Narrative Context & Story Breakdown */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
              // CONCEPT & INTENTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              THE STORY
            </h2>
            
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                  DELIVERABLES
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <ProjectGallery images={project.images} title={project.title} />
      </div>

      {/* 5. Production Credits & Technical Archive */}
      {project.credits && project.credits.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
          <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#050505]">
            <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-6">
              <Film className="w-3.5 h-3.5" />
              <span>PRODUCTION CREDITS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs font-mono">
              {project.credits.map((credit, idx) => (
                <div key={idx} className="border-l border-white/10 pl-4 py-1">
                  <span className="text-neutral-500 block text-[10px] tracking-wider uppercase">
                    {credit.role}
                  </span>
                  <span className="text-neutral-200 font-medium">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. Next Project Navigation Banner */}
      {nextProject && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-white/[0.08] pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
                NEXT ARCHIVE //
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white hover:text-neutral-300 transition-colors">
                <Link href={`/work/${nextProject.slug}`}>
                  {nextProject.title}
                </Link>
              </h3>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all group shrink-0"
            >
              <span>EXPLORE NEXT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
