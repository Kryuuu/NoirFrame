'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const STATUS_MESSAGES = [
  'MEMPERSIAPKAN LENSA & OPTIK...',
  'MEMUAT ARSIP VISUAL...',
  'KALIBRASI COLOR GRADING NOIR...',
  'MENYIAPKAN PENGALAMAN SINEMATIK...',
  'STUDIO NOIR FRAME SIAP',
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock body scroll during loading screen
    document.body.style.overflow = 'hidden';

    // Increment progress counter smoothly
    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds total duration

    let animFrame: number;
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatusIndex(0);
      } else if (rawProgress < 60) {
        setStatusIndex(1);
      } else if (rawProgress < 85) {
        setStatusIndex(2);
      } else if (rawProgress < 99) {
        setStatusIndex(3);
      } else {
        setStatusIndex(4);
      }

      if (rawProgress < 100) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        // Trigger exit shutter transition
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = '';
          }, 850);
        }, 300);
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = '';
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center transition-opacity duration-500 ${
        isClosing ? 'pointer-events-none' : ''
      }`}
      aria-label="Memuat NOIR FRAME"
    >
      {/* Top Shutter Curtain Panel */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#050505] border-b border-white/[0.08] transition-transform duration-[850ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isClosing ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Shutter Curtain Panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#050505] border-t border-white/[0.08] transition-transform duration-[850ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Film Grain / Subtle Vignette Accent */}
      <div
        className={`absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] transition-opacity duration-500 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Viewfinder Telemetry Overlay */}
      <div
        className={`absolute inset-6 sm:inset-10 lg:inset-14 pointer-events-none flex flex-col justify-between transition-all duration-500 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Top Indicators */}
        <div className="flex justify-between items-center text-[9px] sm:text-[11px] font-mono tracking-cinematic text-neutral-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-neutral-300 font-semibold">REC // OPTICS BOOT</span>
          </div>
          <span className="hidden sm:inline-block">DCI 4K RAW // 24.00 FPS</span>
          <span>ISO 100 // 5600K</span>
        </div>

        {/* Viewfinder Corner Framing Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

        {/* Bottom Indicators */}
        <div className="flex justify-between items-center text-[9px] sm:text-[11px] font-mono tracking-cinematic text-neutral-500 uppercase">
          <span>ASPECT // 2.39:1 CINEMASCOPE</span>
          <span className="hidden sm:inline-block">COLOR PROFILE: NOIR LAB LUT</span>
          <span>BANJARMASIN • ID</span>
        </div>
      </div>

      {/* Center Cinematic Card & Logo Unit */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isClosing ? 'opacity-0 scale-105 filter blur-sm' : 'opacity-100 scale-100'
        }`}
      >
        {/* Camera Reticle Box */}
        <div className="relative p-7 sm:p-10 bg-black/60 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-sm w-full mx-auto flex flex-col items-center">
          {/* Micro Corner Crosshairs */}
          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white/80" />
          <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white/80" />
          <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />

          {/* Logo Badge */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#080808] flex items-center justify-center">
              <Image
                src="/porto/Logo/noir-emblem-circle.png"
                alt="NOIR FRAME Logo"
                fill
                priority
                className="object-contain p-2 animate-breathing"
              />
            </div>
          </div>

          {/* Typography */}
          <div className="text-center space-y-1 mb-6">
            <h1 className="text-base sm:text-xl font-bold tracking-cinematic text-white uppercase">
              NOIR FRAME
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-editorial text-neutral-400 uppercase font-light">
              FOTOGRAFI & VIDEOGRAFI SINEMATIK
            </p>
          </div>

          {/* Minimalist Progress Meter */}
          <div className="w-full space-y-2.5 pt-2 border-t border-white/[0.06]">
            <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-neutral-400">
              <span className="truncate max-w-[200px] text-neutral-300">
                {STATUS_MESSAGES[statusIndex]}
              </span>
              <span className="text-white font-bold tabular-nums pl-2">
                {progress}%
              </span>
            </div>

            {/* Glowing Hairline Bar */}
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-neutral-400 via-white to-white transition-all duration-75 ease-out shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Studio Subtext */}
        <p className="mt-6 text-[10px] font-mono tracking-cinematic text-neutral-500 uppercase text-center">
          ARSIP VISUAL ELEGAN // © 2026
        </p>
      </div>
    </div>
  );
}
