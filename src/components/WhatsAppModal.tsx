'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, ArrowUpRight, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface WhatsAppModalContextType {
  isOpen: boolean;
  openWhatsAppModal: (data?: { message?: string; packageTitle?: string }) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType>({
  isOpen: false,
  openWhatsAppModal: () => {},
  closeWhatsAppModal: () => {},
});

export const useWhatsAppModal = () => useContext(WhatsAppModalContext);

export const ADMIN_1 = {
  name: 'ADMIN 1',
  role: 'Videografer & Meja Kreatif',
  phoneDisplay: '+62 819-1371-5220',
  phoneRaw: '6281913715220',
  description: 'Konsultasi Videografer, Komersial, Dokumentasi Event, Drone, & Konsep Khusus',
  badge: 'RESPON CEPAT',
};

export const ADMIN_2 = {
  name: 'ADMIN 2',
  role: 'Fotografer & Meja Produksi',
  phoneDisplay: '+62 812-5743-6797',
  phoneRaw: '6281257436797',
  description: 'Konsultasi Fotografer, Paket Wisuda, Sesi Foto Studio, & Booking Jadwal',
  badge: 'AKTIF ONLINE',
};

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [inquiryData, setInquiryData] = useState<{ message?: string; packageTitle?: string }>({});

  const openWhatsAppModal = (data?: { message?: string; packageTitle?: string }) => {
    if (data) setInquiryData(data);
    else setInquiryData({});
    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
  };

  // Bidirectional animation lifecycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setShouldRender(true);
      timer = setTimeout(() => {
        setIsAnimating(true);
      }, 25);
    } else {
      setIsAnimating(false);
      timer = setTimeout(() => {
        setShouldRender(false);
      }, 420);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Close on Escape key press & handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeWhatsAppModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const generateWhatsAppUrl = (phoneRaw: string) => {
    let text = 'Halo Admin NOIR FRAME, saya ingin konsultasi mengenai booking dan ketersediaan jadwal photoshoot / videography.';
    if (inquiryData.packageTitle) {
      text = `Halo Admin NOIR FRAME, saya tertarik untuk booking / konsultasi paket "${inquiryData.packageTitle}". Mohon info ketersediaan tanggal dan detail berikutnya.`;
    }
    if (inquiryData.message) {
      text = inquiryData.message;
    }
    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <WhatsAppModalContext.Provider value={{ isOpen, openWhatsAppModal, closeWhatsAppModal }}>
      {children}

      {/* Smooth WhatsApp Modal Dialog with Bidirectional Transitions */}
      {shouldRender && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isAnimating
              ? 'bg-black/85 backdrop-blur-md opacity-100 pointer-events-auto'
              : 'bg-black/0 backdrop-blur-none opacity-0 pointer-events-none'
          }`}
          onClick={closeWhatsAppModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`relative w-full max-w-lg bg-[#0a0a0a] border border-white/20 p-6 sm:p-8 text-neutral-200 overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isAnimating
                ? 'scale-100 translate-y-0 opacity-100 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(16,185,129,0.08)]'
                : 'scale-[0.92] translate-y-6 opacity-0 shadow-none'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Viewfinder Crosshair Accents with Subtle Corner Expansion */}
            <div
              className={`absolute top-2 left-2 border-t-2 border-l-2 border-white/80 pointer-events-none transition-all duration-500 ease-out ${
                isAnimating ? 'w-3.5 h-3.5' : 'w-1 h-1'
              }`}
            />
            <div
              className={`absolute top-2 right-2 border-t-2 border-r-2 border-white/80 pointer-events-none transition-all duration-500 ease-out ${
                isAnimating ? 'w-3.5 h-3.5' : 'w-1 h-1'
              }`}
            />
            <div
              className={`absolute bottom-2 left-2 border-b-2 border-l-2 border-white/80 pointer-events-none transition-all duration-500 ease-out ${
                isAnimating ? 'w-3.5 h-3.5' : 'w-1 h-1'
              }`}
            />
            <div
              className={`absolute bottom-2 right-2 border-b-2 border-r-2 border-white/80 pointer-events-none transition-all duration-500 ease-out ${
                isAnimating ? 'w-3.5 h-3.5' : 'w-1 h-1'
              }`}
            />

            {/* Modal Header */}
            <div
              style={{ transitionDelay: isAnimating ? '80ms' : '0ms' }}
              className={`flex items-start justify-between pb-5 border-b border-white/[0.08] mb-6 transition-all duration-500 ease-out ${
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-400 block mb-1.5">
                  // JALUR LANGSUNG • LAYANAN WHATSAPP
                </span>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  PILIH ADMIN WHATSAPP
                </h3>
                <p className="mt-1 text-xs text-neutral-400 font-light leading-relaxed">
                  Hubungi salah satu tim studio kami untuk konsultasi cepat &amp; booking jadwal.
                </p>
              </div>

              <button
                onClick={closeWhatsAppModal}
                className="p-2 border border-white/10 hover:border-white/40 text-neutral-400 hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-105 bg-white/5 cursor-pointer ml-3 shrink-0"
                aria-label="Tutup Popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Package Notice (if triggered with a specific package) */}
            {inquiryData.packageTitle && (
              <div
                style={{ transitionDelay: isAnimating ? '120ms' : '0ms' }}
                className={`mb-6 p-3 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 flex items-center justify-between transition-all duration-500 ease-out ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                <span className="text-neutral-400 uppercase text-[10px]">PAKET TERPILIH:</span>
                <span className="text-white font-medium">{inquiryData.packageTitle}</span>
              </div>
            )}

            {/* Admin Cards Selection */}
            <div className="space-y-4">
              {/* ADMIN 1 */}
              <a
                href={generateWhatsAppUrl(ADMIN_1.phoneRaw)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeWhatsAppModal}
                style={{ transitionDelay: isAnimating ? '160ms' : '0ms' }}
                className={`group block p-4 sm:p-5 bg-[#101010] hover:bg-[#151515] border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 relative overflow-hidden ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold tracking-cinematic uppercase text-white">
                        {ADMIN_1.name}
                      </span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">
                        {ADMIN_1.role}
                      </span>
                    </div>

                    <div className="text-base sm:text-lg font-mono font-bold text-white tracking-wider flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                      <span>{ADMIN_1.phoneDisplay}</span>
                    </div>

                    <p className="mt-1 text-xs text-neutral-400 font-light leading-relaxed">
                      {ADMIN_1.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                      </span>
                      {ADMIN_1.badge}
                    </span>

                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-semibold text-xs tracking-cinematic uppercase group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300 shadow-sm">
                      <span>CHAT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              {/* ADMIN 2 */}
              <a
                href={generateWhatsAppUrl(ADMIN_2.phoneRaw)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeWhatsAppModal}
                style={{ transitionDelay: isAnimating ? '240ms' : '0ms' }}
                className={`group block p-4 sm:p-5 bg-[#101010] hover:bg-[#151515] border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 relative overflow-hidden ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold tracking-cinematic uppercase text-white">
                        {ADMIN_2.name}
                      </span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">
                        {ADMIN_2.role}
                      </span>
                    </div>

                    <div className="text-base sm:text-lg font-mono font-bold text-white tracking-wider flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                      <span>{ADMIN_2.phoneDisplay}</span>
                    </div>

                    <p className="mt-1 text-xs text-neutral-400 font-light leading-relaxed">
                      {ADMIN_2.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                      </span>
                      {ADMIN_2.badge}
                    </span>

                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-semibold text-xs tracking-cinematic uppercase group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300 shadow-sm">
                      <span>CHAT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Bottom Info Note */}
            <div
              style={{ transitionDelay: isAnimating ? '300ms' : '0ms' }}
              className={`mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase transition-all duration-500 ease-out ${
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span>JAM OPERASIONAL 09:00 — 18:00 WITA</span>
              <span>NOIR FRAME BANJARMASIN</span>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Floating WhatsApp Quick-Button with Micro-interactions */}
      <button
        onClick={() => openWhatsAppModal()}
        aria-label="Hubungi WhatsApp Admin NOIR FRAME"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 bg-[#0c0c0c] hover:bg-black text-white border border-white/20 hover:border-emerald-500/60 shadow-[0_8px_30px_rgb(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-[11px] font-mono tracking-cinematic uppercase font-semibold">
          WHATSAPP
        </span>
      </button>
    </WhatsAppModalContext.Provider>
  );
}
