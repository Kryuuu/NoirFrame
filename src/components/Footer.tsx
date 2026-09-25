import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Frame Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-full h-full border-x border-white/[0.04]" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-10 sm:pb-16 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-cinematic text-white uppercase">
                  NOIR FRAME
                </h2>
              </Link>
              <p className="mt-3 sm:mt-4 text-xs tracking-editorial uppercase text-neutral-400 max-w-md">
                Photography / Videography / Creative Production / Visual Storytelling
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed font-light">
                A visual creative studio crafting cinematic narratives, commercial campaigns, and timeless documentation with intention and geometric precision.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/[0.05]">
              <span className="text-[10px] sm:text-[11px] tracking-editorial uppercase text-neutral-600 block">
                INQUIRIES & COMMISSIONS
              </span>
              <a
                href="mailto:hello@noirframe.studio"
                className="text-xs sm:text-sm font-medium text-white hover:text-neutral-300 transition-colors inline-block mt-1"
              >
                hello@noirframe.studio
              </a>
            </div>
          </div>

          {/* Links Wrapper: 2 columns on mobile, distributed on desktop */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div>
              <h3 className="text-xs font-semibold tracking-cinematic uppercase text-white mb-4 sm:mb-6">
                NAVIGATION
              </h3>
              <ul className="space-y-2.5 sm:space-y-3.5 text-xs tracking-editorial uppercase">
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    WORK
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:text-white transition-colors">
                    PROCESS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xs font-semibold tracking-cinematic uppercase text-white mb-4 sm:mb-6">
                CONNECT
              </h3>
              <ul className="space-y-2.5 sm:space-y-3.5 text-xs tracking-editorial uppercase">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>TIKTOK</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>YOUTUBE</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>VIMEO</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] tracking-editorial uppercase text-neutral-600">
          <div>
            © 2026 NOIR FRAME. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[9px] sm:text-[10px]">
            <span>INDONESIA / COMMISSIONS</span>
            <span>FRAME NO. 26-09</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
