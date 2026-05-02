"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function CinematicIntro({ setSlide }: { setSlide: (i: number) => void }) {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Increased scale and aggressive cropping to hide YouTube UI
    setVideoSrc(`https://www.youtube.com/embed/fz7Qi2W0aPk?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playlist=fz7Qi2W0aPk&enablejsapi=1&playsinline=1&origin=${window.location.origin}`);
  }, []);

  const handleBegin = () => {
    setSlide(1);
  };

  return (
    <div className="scene-container bg-black flex items-center justify-center py-20 overflow-y-auto lg:overflow-hidden">
      
      <div className="w-full max-w-[1400px] flex flex-col gap-8 lg:gap-12 z-10 relative px-6 lg:px-0">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="flex items-center justify-between"
        >
           <div className="text-[8px] lg:text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">
              Emaar Properties PJSC
           </div>
           <div className="text-[8px] lg:text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">
              Global Sales Platform V4.0
           </div>
        </motion.div>

        {/* Cinematic Theater Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-video border border-white/10 bg-black overflow-hidden shadow-[0_0_100px_-20px_rgba(212,175,55,0.15)] group"
        >
          {/* 1. Base Video Layer - Aggressive Crop (150%) to hide YouTube UI */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {videoSrc && (
              <iframe
                src={videoSrc}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none object-cover opacity-80 contrast-[1.1] saturate-[0.8] transition-transform duration-[10000ms] group-hover:scale-105"
                style={{ border: 'none' }}
                allow="autoplay; encrypted-media; gyroscope; accelerometer; picture-in-picture"
                loading="lazy"
                title="Dubai Mall Cinematic Intro"
              />
            )}
          </div>

          {/* AI Strategy Badge */}
          <div className="absolute top-4 right-4 lg:top-10 lg:right-10 z-50 group/ai">
             <div className="flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full cursor-help hover:border-dubai-gold/30 transition-all">
                <div className="w-1 lg:w-1.5 h-1 lg:h-1.5 rounded-full bg-dubai-gold animate-pulse" />
                <span className="text-[7px] lg:text-[9px] uppercase tracking-[0.4em] text-white/60 font-black">AI-Enhanced Platform</span>
             </div>
             <div className="absolute top-full right-0 mt-4 w-56 lg:w-64 p-4 lg:p-6 glass-panel border border-white/10 opacity-0 group-hover/ai:opacity-100 translate-y-2 group-hover/ai:translate-y-0 transition-all pointer-events-none z-50">
                <div className="text-dubai-gold font-black text-[8px] lg:text-[9px] tracking-[0.3em] uppercase mb-3">Strategic AI Usage</div>
                <div className="space-y-3">
                   <div className="text-[9px] lg:text-[10px] text-white/50 leading-relaxed font-medium">
                      • <span className="text-white">Generative Spatial Visuals</span> for conceptual nodes.
                   </div>
                   <div className="text-[9px] lg:text-[10px] text-white/50 leading-relaxed font-medium">
                      • <span className="text-white">Cinematic Prompt Engineering</span> for narrative video flow.
                   </div>
                   <div className="text-[9px] lg:text-[10px] text-white/50 leading-relaxed font-medium">
                      • <span className="text-white">Predictive Persona Modeling</span> for brand-fit simulations.
                   </div>
                </div>
             </div>
          </div>

          {/* 2. Professional Color Grade & Vignette */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-radial-[circle_at_center,_transparent_40%,_black_90%] opacity-60" />
          <div className="absolute inset-0 z-10 pointer-events-none bg-dubai-gold/5 mix-blend-overlay" />

          {/* 3. Cinematic Scanlines */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)', backgroundSize: '100% 4px' }} />

          {/* 4. Digital HUD Markers */}
          <div className="absolute inset-0 z-30 pointer-events-none border-[10px] lg:border-[40px] border-transparent">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 lg:w-8 lg:h-8 border-t border-l border-dubai-gold/40" />
            <div className="absolute top-0 right-0 w-4 h-4 lg:w-8 lg:h-8 border-t border-r border-dubai-gold/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 lg:w-8 lg:h-8 border-b border-l border-dubai-gold/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 lg:w-8 lg:h-8 border-b border-r border-dubai-gold/40" />

            {/* Tracking Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-20 lg:h-20 opacity-20">
               <div className="absolute top-1/2 left-0 w-2 lg:w-4 h-[1px] bg-white" />
               <div className="absolute top-1/2 right-0 w-2 lg:w-4 h-[1px] bg-white" />
               <div className="absolute top-0 left-1/2 w-[1px] h-2 lg:h-4 bg-white" />
               <div className="absolute bottom-0 left-1/2 w-[1px] h-2 lg:h-4 bg-white" />
            </div>
          </div>

          {/* 5. Metadata Overlays */}
          <div className="absolute top-4 left-4 lg:top-10 lg:left-10 z-40 flex flex-col gap-1">
            <div className="text-[7px] lg:text-[10px] uppercase tracking-[0.4em] text-dubai-gold font-black">
              STREAM: DXB_LIVE_01
            </div>
            <div className="text-[6px] lg:text-[8px] uppercase tracking-[0.2em] text-white/40 font-medium">
              4K_UHD // 60FPS // ENCRYPTED
            </div>
          </div>

          <div className="absolute bottom-4 left-4 lg:bottom-10 lg:left-10 z-40 flex items-center gap-2 lg:gap-4">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-red-600 animate-pulse" />
            <div className="text-[7px] lg:text-[10px] uppercase tracking-[0.4em] text-white/60 font-black">
              LIVE SIGNAL
            </div>
          </div>

          <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 z-40 text-right">
             <div className="text-[6px] lg:text-[8px] uppercase tracking-[0.3em] text-white/40 font-medium mb-1 italic">COORDINATES</div>
             <div className="text-[7px] lg:text-[10px] uppercase tracking-[0.4em] text-white/60 font-black tabular-nums">
               25.1972° N, 55.2744° E
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mt-2"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.05em] uppercase leading-none mb-4">
              <span className="text-white">THE DUBAI</span> <span className="text-dubai-gold">MALL.</span>
            </h1>
            <p className="text-white/40 text-sm lg:text-lg uppercase tracking-[0.3em] font-medium max-w-xl mx-auto lg:mx-0">
              A Strategic Vision of Global Excellence.
            </p>
          </div>

          <button 
            onClick={handleBegin}
            className="w-full lg:w-auto px-8 py-5 lg:px-12 lg:py-6 bg-dubai-gold text-black font-black uppercase text-[10px] lg:text-[11px] tracking-[0.4em] lg:tracking-[0.6em] hover:bg-white transition-all shadow-[0_20px_60px_-10px_rgba(212,175,55,0.4)] flex items-center justify-center gap-6 group flex-shrink-0"
          >
            BEGIN THE JOURNEY
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
