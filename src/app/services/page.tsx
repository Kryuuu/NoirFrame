import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services & Capabilities — NOIR FRAME',
  description:
    'Explore our creative production disciplines: commercial photography, cinematic videography, brand visual direction, and event documentation.',
};

const DETAILED_SERVICES = [
  {
    number: '01',
    title: 'PHOTOGRAPHY',
    subtitle: 'STILL IMAGERY ARCHITECTURE',
    description:
      'We treat every frame as an archival composition. Whether documenting intimate sacred weddings, high-end commercial products, or architectural spaces, our approach combines subtle chiaroscuro lighting, medium format resolution, and raw documentary authenticity.',
    deliverables: [
      'Wedding Stories & Intimate Ceremonies',
      'Commercial & Advertising Campaigns',
      'Fine Art & Editorial Portraiture',
      'Product & Still-Life Macro Photography',
      'Event & Cultural Documentation',
      'Architectural & Spatial Photography',
    ],
    gear: 'Hasselblad Medium Format • Leica M11 • Sony A1 Prime Ecosystem',
    image: '/porto/wedding/wedding-02.jpg',
  },
  {
    number: '02',
    title: 'VIDEOGRAPHY',
    subtitle: 'CINEMATIC MOTION & NARRATIVE',
    description:
      'From 60-second high-speed commercials to feature-length wedding and documentary films, we capture moving images with deliberate pacing, anamorphic flares, and organic cinema color rendering.',
    deliverables: [
      'Brand Commercials & Launch Films',
      'Cinematic Wedding Documentation Films',
      'Cultural & Corporate Event Recaps',
      'Anamorphic Narrative Campaigns',
      'Social Cutdowns & Vertical 9:16 Visuals',
      'Music Videos & Performing Arts Films',
    ],
    gear: 'ARRI Alexa Mini LF • RED V-RAPTOR 8K • Cooke Anamorphic /i',
    image: '/porto/commercial/commercial-02.jpg',
  },
  {
    number: '03',
    title: 'CREATIVE PRODUCTION',
    subtitle: 'FULL SCALE END-TO-END EXECUTION',
    description:
      'A great image begins long before the shutter clicks. We lead treatment writing, visual moodboarding, location scouting across Southeast Asia, casting, and meticulous on-set lighting and art direction.',
    deliverables: [
      'Concept Formulation & Moodboarding',
      'Location Scouting & Production Permitting',
      'On-Set Art Direction & Set Styling',
      'Post-Production & Offline Editing',
      'Master Color Grading (ACES Workflow)',
      'Custom Sound Design & Audio Finishing',
    ],
    gear: 'DaVinci Resolve Studio • Flanders Scientific Reference Displays',
    image: '/porto/campaign/campaign-03.jpg',
  },
  {
    number: '04',
    title: 'BRAND VISUALS',
    subtitle: 'HOLISTIC DIGITAL IDENTITY',
    description:
      'Tailored visual ecosystems designed for luxury brands, architectural firms, and modern enterprises seeking an elevated visual presence across digital, print, and physical mediums.',
    deliverables: [
      'Seasonal Lookbooks & Campaign Suites',
      'E-Commerce High-Res Product Assets',
      'Executive & Team Editorial Portraits',
      'Social Media Curated Content Packages',
      'Print Ad Spreads & Billboard Masters',
      'Brand Visual Style Guides',
    ],
    gear: 'Phase One IQ4 150MP • Broncolor Studio Lighting Systems',
    image: '/porto/product/product-01.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-[#080808] min-h-screen text-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-20 sm:mb-28 pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-4">
            <span>CAPABILITIES</span>
            <span>//</span>
            <span>CREATIVE DISCIPLINES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
            DISCIPLINES
            <br />
            <span className="text-neutral-300 font-light italic">& SERVICES.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base max-w-2xl font-light text-neutral-400 leading-relaxed">
            NOIR FRAME operates as an integrated creative studio. We unite artistic intentionality with technical rigor to craft unforgettable visual stories.
          </p>
        </div>

        {/* In-Depth Service Sections */}
        <div className="space-y-24 sm:space-y-32">
          {DETAILED_SERVICES.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <section
                key={item.number}
                className="border-b border-white/[0.08] pb-24 sm:pb-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Visual Frame */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[4/3] border border-white/20 bg-[#0d0d0d] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/80" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/80" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/80" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/80" />

                      <div className="absolute bottom-4 left-4 z-10 text-[10px] font-mono tracking-cinematic uppercase text-neutral-300 bg-black/80 px-3 py-1.5 border border-white/10">
                        {item.gear}
                      </div>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-neutral-500">
                        {item.number}
                      </span>
                      <span className="w-8 h-[1px] bg-white/20" />
                      <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-400">
                        {item.subtitle}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                      {item.title}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4">
                      <span className="text-[11px] font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
                        SCOPE & DELIVERABLES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Inquiry Link */}
                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs tracking-editorial uppercase text-white hover:text-neutral-300 border-b border-white/40 pb-1 hover:border-white transition-all group"
                      >
                        <span>COMMISSION THIS SERVICE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Embedded Pricing & Rates Section */}
      <PricingSection />

      {/* Embedded CTA */}
      <CTASection />
    </div>
  );
}
