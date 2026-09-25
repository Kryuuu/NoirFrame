'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/work', label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/#pricing', label: 'PRICING' },
  { href: '/about', label: 'ABOUT' },
  { href: '/process', label: 'PROCESS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.07] py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 tracking-cinematic text-sm md:text-base font-bold text-white uppercase"
          >
            <span className="relative inline-block px-2.5 py-1 border border-white/20 group-hover:border-white/60 transition-colors">
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

          {/* CTA Right / Inquiry Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs tracking-editorial uppercase px-4 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-8 pt-24 pb-8 md:hidden border-b border-white/10 overflow-y-auto min-h-screen">
          <div className="flex flex-col space-y-5 pt-4">
            <p className="text-[10px] font-mono tracking-cinematic text-neutral-500 uppercase">
              // STUDIO NAVIGATION
            </p>
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl sm:text-2xl font-light tracking-wide transition-colors flex items-center justify-between border-b border-white/[0.06] pb-3.5 ${
                    isActive ? 'text-white font-normal' : 'text-neutral-400'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-neutral-600 font-mono">0{idx + 1}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col gap-4">
            <Link
              href="/contact"
              className="w-full text-center text-xs tracking-editorial uppercase py-3.5 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              START A PROJECT
            </Link>
            <div className="flex justify-between items-center text-[10px] font-mono tracking-editorial text-neutral-500 uppercase">
              <span>BANJARMASIN • JAKARTA • BALI</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
