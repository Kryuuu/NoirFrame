import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understanding the story, goals, audience, and visual direction through immersive dialogue and aesthetic alignment.',
    deliverable: 'Creative Brief & Narrative Concept',
  },
  {
    step: '02',
    title: 'CREATE',
    description: 'Developing the visual concept, moodboard, treatment, shot list, casting, and bespoke lighting plan.',
    deliverable: 'Visual Treatment & Production Plan',
  },
  {
    step: '03',
    title: 'CAPTURE',
    description: 'Turning the concept into photography and moving images on set with precision optics and intentional direction.',
    deliverable: 'Principal Photography & Motion Capture',
  },
  {
    step: '04',
    title: 'DELIVER',
    description: 'Refining every frame through editorial cutting, master color grading, bespoke sound design, and archival mastering.',
    deliverable: 'Final Graded Masters & Print Editions',
  },
];

export default function Process() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#080808] border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
              // METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              FROM IDEA
              <br />
              <span className="text-neutral-300 font-light italic">TO FRAME.</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-neutral-400 max-w-sm font-light">
              Our 4-step production framework guarantees clarity, artistic integrity, and uncompromising technical execution.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-xs tracking-editorial uppercase text-neutral-300 hover:text-white mt-4 transition-colors"
            >
              <span>DETAILED WORKFLOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4-Step Editorial Grid / Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/[0.08]">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`group flex flex-col justify-between p-6 sm:p-8 lg:px-8 lg:py-6 border border-white/[0.06] lg:border-none bg-black/20 hover:bg-white/[0.02] transition-colors relative`}
            >
              {/* Top Step Number */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl sm:text-4xl font-extrabold text-neutral-600 font-mono group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Deliverable Pill */}
              <div className="pt-6 border-t border-white/[0.06]">
                <span className="text-[9px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-1">
                  CORE DELIVERABLE
                </span>
                <span className="text-xs text-neutral-300 font-mono">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
