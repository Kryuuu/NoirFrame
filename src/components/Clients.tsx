import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CLIENT_PLACEHOLDERS = [
  { label: 'CLIENT NAME 01', type: 'Fashion & Editorial' },
  { label: 'BRAND NAME 02', type: 'Horology & Luxury Goods' },
  { label: 'STUDIO NAME 03', type: 'Architectural Digest' },
  { label: 'COMPANY NAME 04', type: 'Automotive & Tech' },
  { label: 'CREATIVE LAB 05', type: 'Music & Performing Arts' },
  { label: 'COLLECTIVE 06', type: 'Hospitality & Travel' },
];

export default function Clients() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block mb-2">
              // COLLABORATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white">
              SELECTED CLIENTS
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            COMMISSION ARCHIVE
          </span>
        </div>

        {/* Minimalist Monochrome Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
          {CLIENT_PLACEHOLDERS.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#080808] p-8 sm:p-10 flex flex-col justify-between items-center text-center group hover:bg-[#0e0e0e] transition-colors h-40 sm:h-44"
            >
              <span className="text-[10px] font-mono text-neutral-600 tracking-wider">
                0{idx + 1}
              </span>
              <span className="text-sm sm:text-base font-bold tracking-editorial uppercase text-neutral-400 group-hover:text-white transition-colors">
                {client.label}
              </span>
              <span className="text-[10px] tracking-cinematic text-neutral-500 uppercase font-mono">
                {client.type}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Collaboration Inquiry CTA */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-400 font-light text-center sm:text-left">
            Interested in working together on your next commercial film, campaign, or event?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white text-xs tracking-editorial uppercase text-white hover:bg-white hover:text-black transition-all group shrink-0"
          >
            <span>INQUIRE FOR COLLABORATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
