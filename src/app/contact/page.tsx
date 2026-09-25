'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, MessageCircle, Phone, MapPin, Clock, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { useWhatsAppModal, ADMIN_1, ADMIN_2 } from '@/components/WhatsAppModal';

function ContactContentInner() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get('package');
  const { openWhatsAppModal } = useWhatsAppModal();

  const [selectedPackage, setSelectedPackage] = useState('Photo + Videography Combo (Rp 990.000)');
  const [userName, setUserName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [customNote, setCustomNote] = useState('');

  useEffect(() => {
    if (packageParam === 'photo-regular') {
      setSelectedPackage('Fotography Biasa 3 Jam (Rp 550.000)');
    } else if (packageParam === 'video-regular') {
      setSelectedPackage('Videography 3 Jam (Rp 550.000)');
    } else if (packageParam === 'combo-photo-video') {
      setSelectedPackage('Photo + Videography Combo (Rp 990.000)');
    } else if (packageParam === 'video-drone') {
      setSelectedPackage('Videography + Drone (Rp 1.200.000)');
    }
  }, [packageParam]);

  const handleStartWhatsAppConsultation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let compiledMessage = `Halo Admin NOIR FRAME,\n\nSaya ingin konsultasi booking photoshoot / video:\n• Paket: ${selectedPackage}`;
    if (userName) compiledMessage += `\n• Nama: ${userName}`;
    if (eventDate) compiledMessage += `\n• Rencana Tanggal: ${eventDate}`;
    if (location) compiledMessage += `\n• Lokasi / Kampus: ${location}`;
    if (customNote) compiledMessage += `\n• Catatan: ${customNote}`;
    compiledMessage += `\n\nMohon info ketersediaan slot tanggal & arahan selanjutnya. Terima kasih!`;

    openWhatsAppModal({
      packageTitle: selectedPackage,
      message: compiledMessage,
    });
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Primary Direct Callout Banner */}
      <div className="p-6 sm:p-10 border border-white/20 bg-gradient-to-br from-[#0e0e0e] to-[#070707] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-[10px] font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SALURAN WHATSAPP RESMI AKTIF</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              HUBUNGI ADMIN WHATSAPP
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Pilih admin untuk fast response. Tim studio NOIR FRAME siap membantu perencanaan sesi wisuda, portrait, hingga produksi komersial.
            </p>
          </div>

          <button
            onClick={() => handleStartWhatsAppConsultation()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 bg-white text-black font-bold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all shadow-[0_4px_25px_rgba(255,255,255,0.1)] group shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>PILIH ADMIN WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 2. Direct Admin Contact Cards (Side-by-Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Admin 1 Card */}
        <div className="p-6 sm:p-8 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between relative group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-400">
                SALURAN 01 // VIDEOGRAFER & MEJA KREATIF
              </span>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase px-2 py-0.5 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AKTIF ONLINE
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
              {ADMIN_1.name}
            </h3>
            <p className="text-sm font-mono text-neutral-300 font-bold mt-1 tracking-wider">
              {ADMIN_1.phoneDisplay}
            </p>
            <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed">
              {ADMIN_1.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <a
              href={`https://wa.me/${ADMIN_1.phoneRaw}?text=${encodeURIComponent(
                'Halo Admin 1 (Videographer) NOIR FRAME, saya ingin konsultasi mengenai videography, commercial, event, drone, atau custom visual project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-cinematic uppercase border border-white/20 transition-all group/btn"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-black transition-colors" />
              <span>CHAT ADMIN 1 SEKARANG</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Admin 2 Card */}
        <div className="p-6 sm:p-8 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between relative group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-400">
                SALURAN 02 // FOTOGRAFER & MEJA PRODUKSI
              </span>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase px-2 py-0.5 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AKTIF ONLINE
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
              {ADMIN_2.name}
            </h3>
            <p className="text-sm font-mono text-neutral-300 font-bold mt-1 tracking-wider">
              {ADMIN_2.phoneDisplay}
            </p>
            <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed">
              {ADMIN_2.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <a
              href={`https://wa.me/${ADMIN_2.phoneRaw}?text=${encodeURIComponent(
                'Halo Admin 2 (Photographer) NOIR FRAME, saya ingin konsultasi mengenai jadwal dan booking sesi graduation / portrait photoshoot.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-cinematic uppercase border border-white/20 transition-all group/btn"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-black transition-colors" />
              <span>CHAT ADMIN 2 SEKARANG</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Interactive Quick Booking Form that launches WhatsApp Popup */}
      <div className="p-6 sm:p-10 border border-white/[0.08] bg-[#050505]">
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-8">
          <div>
            <span className="text-[10px] font-mono tracking-cinematic uppercase text-neutral-400 block mb-1">
              // FORMULIR PESAN KUSTOM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              SUSUN PESAN BOOKING
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Isi formulir singkat di bawah ini, lalu klik tombol untuk memilih Admin 1 atau Admin 2 di WhatsApp.
            </p>
          </div>
        </div>

        <form onSubmit={handleStartWhatsAppConsultation} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Package Selector */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                PILIH PAKET LAYANAN
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-4 py-3.5 bg-black/60 border border-white/[0.15] text-white text-sm focus:border-white focus:outline-none transition-colors"
              >
                <option value="Sesi Fotografi 3 Jam (Rp 550.000)">
                  Sesi Fotografi 3 Jam — Rp 550.000
                </option>
                <option value="Sesi Videografi 3 Jam (Rp 550.000)">
                  Sesi Videografi 3 Jam — Rp 550.000
                </option>
                <option value="Foto + Videografi Kombo (Rp 990.000)">
                  Foto + Videografi Kombo — Rp 990.000 (Paling Diminati)
                </option>
                <option value="Videografi + Drone (Rp 1.200.000)">
                  Videografi + Drone 3 Jam — Rp 1.200.000
                </option>
                <option value="Proyek Khusus / Kampanye Komersial">
                  Proyek Khusus / Kampanye Komersial
                </option>
              </select>
            </div>

            {/* Client Name */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                NAMA LENGKAP / INSTANSI
              </label>
              <input
                type="text"
                placeholder="Contoh: Futri Risqi / Angkatan 2026"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* Target Date */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                RENCANA TANGGAL / BULAN
              </label>
              <input
                type="text"
                placeholder="Contoh: 15 Oktober 2026"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                LOKASI / KAMPUS
              </label>
              <input
                type="text"
                placeholder="Contoh: Banjarmasin / ULM / On-Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
              CATATAN TAMBAHAN / KONSEP KHUSUS (OPSIONAL)
            </label>
            <textarea
              rows={3}
              placeholder="Ceritakan gambaran konsep, jumlah orang, atau preferensi visual yang Anda inginkan..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Action Trigger */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>LANJUTKAN VIA WHATSAPP (PILIH ADMIN)</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <span className="text-[11px] font-mono text-neutral-500">
              *Akan membuka pilihan Admin 1 & Admin 2 dengan format pesan otomatis.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <div className="pt-28 sm:pt-32 pb-14 sm:pb-24 bg-[#080808] min-h-screen text-neutral-200">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Page Header */}
        <div className="mb-10 sm:mb-20 pb-6 sm:pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-3 sm:mb-4">
            <span>KONSULTASI</span>
            <span>//</span>
            <span>RESERVASI &amp; BOOKING</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight sm:leading-none">
                MARI BEKERJASAMA
                <br />
                <span className="text-neutral-300 font-light italic">DENGAN KAMI.</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-xs sm:text-base max-w-2xl font-light text-neutral-400 leading-relaxed">
                Hubungi kami via WhatsApp untuk reservasi tanggal sesi wisuda, portrait, maupun komersial. Kami menyediakan 2 nomor hotline admin untuk kemudahan konsultasi Anda.
              </p>
            </div>

            <button
              onClick={() => openWhatsAppModal()}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all font-semibold text-xs tracking-cinematic uppercase group cursor-pointer self-start lg:self-end"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-black transition-colors" />
              <span>POPUP PILIH ADMIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: WhatsApp Hub & Inquiry Composer */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-8 text-neutral-500 font-mono text-xs">MEMUAT SALURAN KONTAK...</div>}>
              <ContactContentInner />
            </Suspense>
          </div>

          {/* Right: Studio Direct Channels & Location */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-8 border border-white/[0.08] bg-[#050505] space-y-5 sm:space-y-6">
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block">
                HOTLINE WHATSAPP STUDIO
              </span>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  ADMIN 1 (VIDEOGRAFER, KOMERSIAL, EVENT, DRONE)
                </span>
                <a
                  href={`https://wa.me/${ADMIN_1.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-mono font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{ADMIN_1.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  ADMIN 2 (FOTOGRAFER, WISUDA, SESI STUDIO, PORTRAIT)
                </span>
                <a
                  href={`https://wa.me/${ADMIN_2.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-mono font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{ADMIN_2.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  EMAIL STUDIO
                </span>
                <a
                  href="mailto:hello@noirframe.studio"
                  className="text-sm font-medium text-neutral-300 hover:text-white"
                >
                  hello@noirframe.studio
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  LOKASI BASIS STUDIO
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Banjarmasin, Kalimantan Selatan
                  <br />
                  <span className="text-xs text-neutral-400">Tersedia untuk on-location &amp; luar kota.</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  JAM RESPON CHAT
                </span>
                <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                  SENIN — JUMAT: 09:00 — 18:00 WITA
                  <br />
                  SABTU — MINGGU: DI LOKASI &amp; RESPON CEPAT
                </p>
              </div>
            </div>

            {/* Price Summary Quick Reference */}
            <div className="p-5 sm:p-8 border border-white/[0.08] bg-[#050505] space-y-4">
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block">
                DAFTAR HARGA RESMI
              </span>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-neutral-400">Fotografi (3 Jam)</span>
                  <span className="text-white font-bold">550k</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-neutral-400">Videografi (3 Jam)</span>
                  <span className="text-white font-bold">550k</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-neutral-400">Kombo Foto + Video</span>
                  <span className="text-emerald-400 font-bold">990k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Videografi + Drone</span>
                  <span className="text-white font-bold">1,2JT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
