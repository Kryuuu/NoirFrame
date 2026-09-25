'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    number: '01',
    title: 'PHOTOGRAPHY',
    category: 'STILL IMAGERY',
    description:
      'Event, wedding, portrait, commercial, product, lifestyle, and high-fidelity documentation photography crafted with intentional light and chiaroscuro discipline.',
    tags: ['Wedding Stories', 'Commercial Stills', 'Fine Art Portraiture', 'Editorial & Event'],
    previewImage: '/porto/portrait/portrait-01.jpg',
  },
  {
    number: '02',
    title: 'VIDEOGRAPHY',
    category: 'CINEMATIC MOTION',
    description:
      'Event films, commercial videos, cinematic documentation, high-speed brand films, and social campaign visual sequences filmed on cinema-grade glass.',
    tags: ['Brand Films', 'Commercial Spots', 'Event Recaps', 'Anamorphic Cinematography'],
    previewImage: '/porto/commercial/commercial-02.jpg',
  },
  {
    number: '03',
    title: 'CREATIVE PRODUCTION',
    category: 'FULL SPECTRUM DIRECTION',
    description:
      'Concept development, moodboarding, location scouting, art direction, on-set technical execution, and rigorous color grading and sound design.',
    tags: ['Visual Direction', 'Set Architecture', 'Post-Production', 'Master Color Grading'],
    previewImage: '/porto/campaign/campaign-01.jpg',
  },
  {
    number: '04',
    title: 'BRAND VISUALS',
    category: 'IDENTITY ARCHITECTURE',
    description:
      'Comprehensive photography and video visual assets for premium brands, digital campaigns, seasonal lookbooks, and luxury marketing channels.',
    tags: ['E-Commerce Series', 'Campaign Lookbooks', 'Digital Presence', 'Content Systems'],
    previewImage: '/porto/product/product-01.jpg',
  },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="relative py-28 sm:py-36 bg-[#080808] border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-3">
              // CORE DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm font-light">
            We operate at the intersection of photographic art and cinematic precision to articulate your story.
          </p>
        </div>

        {/* Editorial Split Layout: Left is Service List, Right is Interactive Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Services List */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            {SERVICES_DATA.map((service, index) => {
              const isHovered = activeIdx === index;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`group py-8 sm:py-10 transition-all duration-300 cursor-pointer ${
                    isHovered ? 'bg-white/[0.02] pl-4 sm:pl-6' : 'pl-0'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs font-mono text-neutral-500 tracking-wider">
                        {service.number}
                      </span>
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors ${
                          isHovered ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isHovered
                          ? 'text-white translate-x-1 -translate-y-1'
                          : 'text-neutral-600 opacity-40'
                      }`}
                    />
                  </div>

                  <p className="text-sm text-neutral-400 max-w-xl font-light leading-relaxed pl-8 sm:pl-12">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pl-8 sm:pl-12">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-editorial uppercase px-2.5 py-1 bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Preview on Desktop */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] border border-white/20 overflow-hidden bg-[#0c0c0c]">
              <Image
                src={SERVICES_DATA[activeIdx].previewImage}
                alt={SERVICES_DATA[activeIdx].title}
                fill
                sizes="(max-width: 1200px) 40vw, 35vw"
                className="object-cover transition-opacity duration-500 ease-out"
                priority
              />

              {/* Viewfinder frame overlay */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/70" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/70" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/70" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/70" />

              {/* Live Preview Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">
                    CURRENT PREVIEW // {SERVICES_DATA[activeIdx].number}
                  </span>
                  <span className="text-xs font-bold uppercase text-white tracking-wide">
                    {SERVICES_DATA[activeIdx].title}
                  </span>
                </div>
                <Link
                  href="/services"
                  className="text-[10px] tracking-editorial uppercase text-neutral-300 hover:text-white underline underline-offset-4"
                >
                  FULL DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
