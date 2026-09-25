'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Mail, MapPin, CheckCircle2 } from 'lucide-react';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get('package');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Photo + Videography Combo (Rp 990.000)',
    budgetRange: 'Sesuai Paket Terpilih',
    details: '',
  });

  useEffect(() => {
    if (packageParam === 'photo-regular') {
      setFormData((prev) => ({
        ...prev,
        projectType: 'Fotography Biasa 3 Jam (Rp 550.000)',
        budgetRange: 'Rp 550.000 (Paket Foto 3 Jam)',
      }));
    } else if (packageParam === 'video-regular') {
      setFormData((prev) => ({
        ...prev,
        projectType: 'Videography 3 Jam (Rp 550.000)',
        budgetRange: 'Rp 550.000 (Paket Video 3 Jam)',
      }));
    } else if (packageParam === 'combo-photo-video') {
      setFormData((prev) => ({
        ...prev,
        projectType: 'Photo + Videography Combo (Rp 990.000)',
        budgetRange: 'Rp 990.000 (Combo Foto + Video)',
      }));
    } else if (packageParam === 'video-drone') {
      setFormData((prev) => ({
        ...prev,
        projectType: 'Videography + Drone (Rp 1.200.000)',
        budgetRange: 'Rp 1.200.000 (Paket Video + Drone)',
      }));
    }
  }, [packageParam]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate interactive submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#050505]">
      {isSubmitted ? (
        <div className="py-16 text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            INQUIRY RECEIVED.
          </h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto font-light leading-relaxed">
            Terima kasih, {formData.name || 'valued partner'}. Pesanan / inquiry paket{' '}
            <strong className="text-white font-medium">{formData.projectType}</strong> telah dicatat ke dalam antrean studio NOIR FRAME. Tim kami akan menghubungi Anda segera melalui email / WhatsApp.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: 'Photo + Videography Combo (Rp 990.000)',
                budgetRange: 'Sesuai Paket Terpilih',
                details: '',
              });
            }}
            className="mt-6 px-6 py-3 border border-white/20 text-xs tracking-cinematic uppercase hover:bg-white hover:text-black transition-colors"
          >
            KIRIM INQUIRY LAIN
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                NAMA LENGKAP *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Bianca Renata"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                ALAMAT EMAIL / WHATSAPP *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. bianca@brand.com atau 0812..."
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company / Brand */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                BRAND / INSTANSI (OPSIONAL)
              </label>
              <input
                type="text"
                placeholder="e.g. Maison Atelier / Personal Event"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* Project / Package Selection */}
            <div>
              <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
                PAKET / SERVICE YANG DIPILIH *
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-[#0e0e0e] border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
              >
                <optgroup label="Pricelist Paket Standar">
                  <option value="Fotography Biasa 3 Jam (Rp 550.000)">
                    Fotography Biasa 3 Jam — Rp 550.000
                  </option>
                  <option value="Videography 3 Jam (Rp 550.000)">
                    Videography 3 Jam — Rp 550.000
                  </option>
                  <option value="Photo + Videography Combo (Rp 990.000)">
                    Photo + Videography Combo — Rp 990.000 (Best Value)
                  </option>
                  <option value="Videography + Drone (Rp 1.200.000)">
                    Videography + Drone Aerial — Rp 1.200.000
                  </option>
                </optgroup>
                <optgroup label="Custom Creative & Commercial">
                  <option value="Commercial Photography">Commercial Photography</option>
                  <option value="Commercial Videography">Commercial Videography</option>
                  <option value="Wedding Full Day Documentation">Wedding Full Day Documentation</option>
                  <option value="Event Documentation">Event Documentation</option>
                  <option value="Brand Visual Content Suite">Brand Visual Content Suite</option>
                  <option value="Creative Production">Creative Production / Direction</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
              ESTIMASI BUDGET
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) =>
                setFormData({ ...formData, budgetRange: e.target.value })
              }
              className="w-full px-4 py-3.5 bg-[#0e0e0e] border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
            >
              <option value="Sesuai Paket Terpilih">Sesuai Paket Terpilih</option>
              <option value="Rp 550.000 (Paket Foto / Video 3 Jam)">Rp 550.000 (Paket Foto / Video 3 Jam)</option>
              <option value="Rp 990.000 (Combo Foto + Video)">Rp 990.000 (Combo Foto + Video)</option>
              <option value="Rp 1.200.000 (Paket Video + Drone)">Rp 1.200.000 (Paket Video + Drone)</option>
              <option value="Rp 2.000.000 - Rp 5.000.000">Rp 2.000.000 - Rp 5.000.000 (Multi-day / Wedding)</option>
              <option value="Rp 5.000.000 - Rp 15.000.000">Rp 5.000.000 - Rp 15.000.000 (Commercial Campaign)</option>
              <option value="Rp 15.000.000+">Rp 15.000.000+ (Full Studio Production)</option>
            </select>
          </div>

          {/* Details */}
          <div>
            <label className="block text-[11px] font-mono tracking-cinematic uppercase text-neutral-400 mb-2">
              DETAIL ACARA, LOKASI & TANGGAL PELAKSANAAN *
            </label>
            <textarea
              rows={5}
              required
              placeholder="Ceritakan rencana acara Anda (lokasi, estimasi tanggal, referensi visual atau konsep khusus)..."
              value={formData.details}
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
              className="w-full px-4 py-3.5 bg-black/40 border border-white/[0.12] text-white text-sm focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-semibold text-xs tracking-cinematic uppercase hover:bg-neutral-200 transition-all disabled:opacity-50 group cursor-pointer"
          >
            <span>{isSubmitting ? 'MENGIRIM PESAN...' : 'SEND INQUIRY'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#080808] min-h-screen text-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-16 sm:mb-24 pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-cinematic uppercase text-neutral-500 mb-4">
            <span>INQUIRY</span>
            <span>//</span>
            <span>COMMISSIONS & BOOKINGS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
            LET&apos;S WORK
            <br />
            <span className="text-neutral-300 font-light italic">TOGETHER.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base max-w-2xl font-light text-neutral-400 leading-relaxed">
            Booking paket fotografi, videografi, atau ajukan konsep kolaborasi brand Anda. Tim NOIR FRAME akan merespons dalam kurun waktu 24 jam.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Client Inquiry Form wrapped in Suspense */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-12 text-neutral-500 font-mono text-xs">LOADING INQUIRY FORM...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>

          {/* Right: Studio Direct Channels & Location */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 border border-white/[0.08] bg-[#050505] space-y-6">
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block">
                DIRECT COMMISSIONS
              </span>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  EMAIL
                </span>
                <a
                  href="mailto:hello@noirframe.studio"
                  className="text-base font-medium text-white hover:underline"
                >
                  hello@noirframe.studio
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  FAST RESPONSE WHATSAPP
                </span>
                <p className="text-sm text-neutral-200 font-mono">
                  +62 812-3456-7890
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  OFFICIAL STUDIO LOCATIONS
                </span>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Jakarta • Bali • Surabaya
                  <br />
                  <span className="text-xs text-neutral-400">Melayani dokumentasi dalam dan luar kota.</span>
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1">
                  JAM KERJA
                </span>
                <p className="text-xs font-mono text-neutral-400">
                  SENIN — JUMAT: 09:00 — 18:00 WIB
                  <br />
                  SABTU — MINGGU: PRODUCTION & ON-SET ONLY
                </p>
              </div>
            </div>

            {/* Price Summary Quick Reference */}
            <div className="p-8 border border-white/[0.08] bg-[#050505] space-y-4">
              <span className="text-xs font-mono tracking-cinematic uppercase text-neutral-500 block">
                RINGKASAN PRICELIST
              </span>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-neutral-400">Fotography (3 Jam)</span>
                  <span className="text-white font-bold">550k</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-neutral-400">Videography (3 Jam)</span>
                  <span className="text-white font-bold">550k</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-neutral-400">Photo + Video Combo</span>
                  <span className="text-white font-bold">990k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Videography + Drone</span>
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
