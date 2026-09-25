'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useWhatsAppModal } from '@/components/WhatsAppModal';

const NAV_LINKS = [
  { href: '/work', label: 'PORTOFOLIO' },
  { href: '/services', label: 'LAYANAN' },
  { href: '/#pricing', label: 'HARGA' },
  { href: '/about', label: 'TENTANG' },
  { href: '/process', label: 'PROSES' },
  { href: '/contact', label: 'KONTAK' },
];

export default function Navbar() {
  const { openWhatsAppModal } = useWhatsAppModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & handle body scroll lock
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-3 tracking-cinematic text-sm md:text-base font-bold text-white uppercase relative z-50"
          >
            <span className="relative inline-block px-2.5 py-1 border border-white/20 group-hover:border-white/60 transition-colors bg-black/40 backdrop-blur-sm">
              <span className="text-white">NOIR FRAME</span>
              <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-white/60" />
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-white/60" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-editorial uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Right / WhatsApp Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openWhatsAppModal()}
              className="inline-flex items-center gap-2 text-xs tracking-editorial uppercase px-4 py-2 border border-white/20 hover:border-emerald-500/60 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black" />
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Smooth Morphing Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center p-2 focus:outline-none z-50 text-white cursor-pointer group"
            aria-label={mobileMenuOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`h-[1.5px] w-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7.25px]' : ''
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-white transition-all duration-200 ease-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7.25px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Smooth Mobile Dropdown Menu Container */}
      <div
        className={`fixed inset-0 z-40 bg-[#070707]/95 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-8 pt-24 pb-8 md:hidden border-b border-white/[0.08] overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 -translate-y-6 invisible pointer-events-none'
        }`}
      >
        {/* Subtle Decorative Camera Framing */}
        <div className="absolute top-24 left-6 w-3 h-3 border-t border-l border-white/30 pointer-events-none" />
        <div className="absolute top-24 right-6 w-3 h-3 border-t border-r border-white/30 pointer-events-none" />

        <div className="flex flex-col space-y-4 pt-4">
          <p
            className={`text-[10px] font-mono tracking-cinematic text-neutral-400 uppercase transition-all duration-500 ease-out ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '70ms' : '0ms' }}
          >
            // NAVIGASI STUDIO NOIR FRAME
          </p>

          {/* Staggered Navigation Links */}
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: mobileMenuOpen ? `${100 + idx * 40}ms` : '0ms' }}
                  className={`group text-lg sm:text-xl font-light tracking-wide transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between border-b border-white/[0.06] py-3 px-1 rounded-sm hover:bg-white/[0.03] ${
                    mobileMenuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  } ${
                    isActive ? 'text-white font-medium bg-white/[0.04]' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5 group-hover:translate-x-1.5 transition-transform duration-300">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-white scale-100' : 'bg-neutral-600 scale-0 group-hover:scale-100'
                      }`}
                    />
                    <span>{link.label}</span>
                  </span>
                  <span className="text-[11px] text-neutral-600 group-hover:text-neutral-300 font-mono transition-colors">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div
          style={{ transitionDelay: mobileMenuOpen ? '360ms' : '0ms' }}
          className={`pt-5 mt-6 border-t border-white/[0.08] flex flex-col gap-4 transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsAppModal();
            }}
            className="w-full inline-flex items-center justify-center gap-2.5 text-xs tracking-editorial uppercase py-3.5 px-4 bg-white text-black font-bold hover:bg-neutral-200 transition-all cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>KONSULTASI WHATSAPP (PILIH ADMIN)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex justify-between items-center text-[10px] font-mono tracking-cinematic text-neutral-500 uppercase px-1">
            <span>BANJARMASIN • KALIMANTAN SELATAN</span>
            <span>NOIR FRAME // 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}
