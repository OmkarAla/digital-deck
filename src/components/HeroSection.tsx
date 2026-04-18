"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="scene-container items-start !justify-end pb-32">
      {/* Background Graphic */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/assets/hero.png"
          alt="Dubai Mall Aerial"
          fill
          className="object-cover brightness-[0.4] contrast-125 scale-105"
          priority
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full animate-fade-in content-reveal">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl"
        >
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
             <motion.div 
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] w-20 bg-dubai-gold" 
             />
             <span className="text-dubai-gold uppercase tracking-[0.8em] text-xs font-bold">
               2026 STRATEGIC SALES DECK
             </span>
          </div>
          
          <h1 className="text-8xl md:text-[10vw] font-black uppercase leading-[0.8] tracking-[-0.06em] mb-12">
            THE WORLD'S <br />
            <span className="text-white/20 italic font-medium -ml-4">CENTER STAGE.</span>
          </h1>
          
          <p className="text-white/40 text-2xl font-light max-w-2xl leading-relaxed mb-16 tracking-tight">
            An iconic destination where retail meets cultural legacy. <br />
            Surpassing physical scale to define the future of global commerce.
          </p>

          <div className="flex flex-col sm:flex-row gap-10">
            <button className="luxury-button group relative overflow-hidden">
               Begin Exploration
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-[var(--luxury-padding)] flex items-center gap-6">
         <div className="h-12 w-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-4 bg-dubai-gold"
            />
         </div>
         <span className="text-[11px] uppercase tracking-[0.5em] text-white/20 font-bold">Scroll to navigate the arena</span>
      </div>
    </div>
  );
}
