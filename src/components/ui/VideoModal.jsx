"use client";

import { X } from "lucide-react";

export default function VideoModal({
  isVideoModalOpen,
  setIsVideoModalOpen,
  currentSlideTitle,
}) {
  if (!isVideoModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
        <button
          onClick={() => setIsVideoModalOpen(false)}
          aria-label="Close Video Modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition flex items-center justify-center border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative aspect-video w-full bg-black">
          <video
            src="/bg-landing/hero-bg-video.mp4"
            autoPlay
            controls
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 bg-slate-950 text-white flex items-center justify-between">
          <div>
            <h3 className="font-sans font-bold text-lg uppercase tracking-wide">
              KliSus - {currentSlideTitle}
            </h3>
            <p className="text-xs text-slate-400">Environmental Intelligence & Infrastructure Platform</p>
          </div>
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="px-5 py-2 bg-white text-slate-950 hover:bg-slate-200 rounded-full text-xs font-bold uppercase transition"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}
