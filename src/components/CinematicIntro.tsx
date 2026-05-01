"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export default function CinematicIntro({ setSlide }: { setSlide: (i: number) => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleBegin = () => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.5;
    }
    setSlide(1);
  };

  return (
    <div className="scene-container bg-black items-center justify-center">
      
      {/* Bespoke Elegant Score */}
      <audio 
        ref={audioRef}
        loop 
        src="https://cdn.pixabay.com/audio/2022/03/10/audio_c3e6005c26.mp3" 
      />

      <div className="w-full max-w-[1400px] flex flex-col gap-10 z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="flex items-center justify-between"
        >
           <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">
              Emaar Properties PJSC
           </div>
           <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">
              Global Sales Platform V4.0
           </div>
        </motion.div>

        {/* Cinematic Theater Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-video border border-white/10 bg-white/5 overflow-hidden shadow-[0_0_100px_-20px_rgba(212,175,55,0.15)] group"
        >
          {/* Metadata Overlays */}
          <div className="absolute top-6 left-6 z-20 text-[9px] uppercase tracking-[0.4em] text-white/50 font-black mix-blend-difference">
            REC // 001
          </div>
          <div className="absolute top-6 right-6 z-20 text-[9px] uppercase tracking-[0.4em] text-white/50 font-black mix-blend-difference">
            4K UHD
          </div>
          <div className="absolute bottom-6 left-6 z-20 text-[9px] uppercase tracking-[0.4em] text-white/50 font-black mix-blend-difference">
            LOC: DUBAI, UAE
          </div>
          <div className="absolute bottom-6 right-6 z-20 text-[9px] uppercase tracking-[0.4em] text-white/50 font-black mix-blend-difference">
            INTERNAL BRIEFING
          </div>

          <iframe
            src="https://www.youtube.com/embed/fz7Qi2W0aPk?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playlist=fz7Qi2W0aPk"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] pointer-events-none object-cover opacity-90 transition-transform duration-[10000ms] group-hover:scale-105"
            style={{ border: 'none' }}
            allow="autoplay; encrypted-media"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col md:flex-row items-end justify-between gap-8 mt-4"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase leading-none mb-4">
              <span className="text-white">THE DUBAI</span> <span className="text-dubai-gold">MALL.</span>
            </h1>
            <p className="text-white/40 text-lg uppercase tracking-[0.3em] font-medium max-w-xl">
              A Strategic Vision of Global Excellence.
            </p>
          </div>

          <button 
            onClick={handleBegin}
            className="px-12 py-6 bg-dubai-gold text-black font-black uppercase text-[11px] tracking-[0.6em] hover:bg-white transition-all shadow-[0_20px_60px_-10px_rgba(212,175,55,0.4)] flex items-center gap-6 group flex-shrink-0"
          >
            BEGIN THE JOURNEY
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
