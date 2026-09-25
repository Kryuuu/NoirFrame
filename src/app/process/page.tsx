import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Production Process — NOIR FRAME',
  description:
    'Discover the 4-phase creative methodology of NOIR FRAME: from initial concept exploration to master delivery.',
};

const PHASES = [
  {
    step: '01',
    name: 'DISCOVER',
    subtitle: 'IMMERSION & ALIGNMENT',
    description:
      'Every project commences with deep listening. We decode your narrative ambitions, brand identity, audience emotional resonance, and project milestones.',
    steps: [
      'Narrative & Brand Ideation Call',
      'Target Audience & Aesthetic Research',
      'Location & Logistical Feasibility Review',
      'Formal Scope & Production Roadmap',
    ],
  },
  {
    step: '02',
    name: 'CREATE',
    subtitle: 'CONCEPT & PRE-PRODUCTION',
    description:
      'We formulate the creative blueprint. From cinematic treatments and moodboards to shotlists, lighting schematics, and equipment configuration.',
    steps: [
      'Visual Treatment & Director’s Deck',
      'Shot-by-Shot Storyboard & Framing Guides',
      'Styling, Prop & Set Design Coordination',
      'Crew & Specialized Camera Equipment Prep',
    ],
  },
  {
    step: '03',
    name: 'CAPTURE',
    subtitle: 'PRINCIPAL PHOTOGRAPHY & PRODUCTION',
    description:
      'On set or on location, our crew executes with calm authority and intentional framing. We harness natural light, chiaroscuro contrast, and cinema optics.',
    steps: [
      'On-Set Art Direction & Real-Time Monitoring',
      'High-Speed Tracking & Anamorphic Filming',
      'Intimate Documentarian Wedding Coverage',
      'On-Site Dual Checksum Data Archival',
    ],
  },
  {
    step: '04',
    name: 'DELIVER',
    subtitle: 'POST-PRODUCTION & MASTERING',
    description:
      'Refining every frame. We execute offline cutting, precision color grading in cinema color science, bespoke audio mastering, and archival delivery.',
    steps: [
      'Director’s Cut & Collaborative Review',
      'ACES Cinema Master Color Grading',
      'Original Score & Sound Design Integration',
      'High-Res Archival Masters & Web Cutdowns',
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-20 bg-[#080808] min-h-screen text-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20 sm:mb-28 pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-4">
            <span>METHODOLOGY</span>
            <span>//</span>
            <span>PRODUCTION FRAMEWORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
            FROM IDEA
            <br />
            <span className="text-neutral-300 font-light italic">TO FRAME.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base max-w-2xl font-light text-neutral-400 leading-relaxed">
            We eliminate ambiguity. Our 4-step workflow balances boundless creative experimentation with exact logistical precision from first brief to archival delivery.
          </p>
        </div>

        {/* 4 Phases In Depth */}
        <div className="space-y-16 sm:space-y-24 mb-32">
          {PHASES.map((phase) => (
            <div
              key={phase.step}
              className="p-8 sm:p-12 lg:p-16 border border-white/[0.08] bg-[#050505] relative overflow-hidden"
            >
              {/* Giant Background Step Number */}
              <div className="absolute right-6 top-6 text-7xl sm:text-9xl font-mono font-black text-white/[0.03] select-none pointer-events-none">
                {phase.step}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
                    PHASE {phase.step} // {phase.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    {phase.name}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                      KEY DELIVERABLES & ACTIONS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.steps.map((action, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-center gap-2 text-xs text-neutral-300 font-mono"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CTA */}
      <CTASection />
    </div>
  );
}
