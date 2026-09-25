import React from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <h3 className="text-xs font-mono tracking-cinematic uppercase text-neutral-400">
          ARSIP FOTO // {images.length} BINGKAI
        </h3>
        <span className="text-[10px] tracking-editorial uppercase text-neutral-600">
          PEMBINGKAIAN INTENSIONAL • RESOLUSI ASLI
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 lg:gap-12">
        {images.map((imgSrc, idx) => {
          // Asymmetric editorial gallery pattern
          let colSpan = 'md:col-span-12';
          let aspect = 'aspect-[4/5] sm:aspect-[16/10]';

          if (idx % 3 === 0) {
            colSpan = 'md:col-span-12';
            aspect = 'aspect-[16/10] sm:aspect-[21/9]';
          } else if (idx % 3 === 1) {
            colSpan = 'md:col-span-7';
            aspect = 'aspect-[4/5] sm:aspect-[4/3]';
          } else {
            colSpan = 'md:col-span-5';
            aspect = 'aspect-[4/5]';
          }

          return (
            <div
              key={idx}
              className={`${colSpan} relative group overflow-hidden border border-white/[0.08] bg-[#0c0c0c]`}
            >
              <div className={`relative w-full ${aspect}`}>
                <Image
                  src={imgSrc}
                  alt={`${title} - Frame ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle corner framing indicators */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/40 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/40 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/40 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/40 pointer-events-none" />

                {/* Plate watermark (subtle on mobile, interactive on desktop) */}
                <div className="absolute bottom-3 left-3 z-10 opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-cinematic uppercase font-mono px-2 py-1 bg-black/70 backdrop-blur-sm text-neutral-300 border border-white/10">
                    PLATE // {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
