"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LuxurySection({ setSlide }: { setSlide: (i: number) => void }) {
  return (
    <div className="scene-container py-20 lg:py-0 overflow-y-auto lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] lg:h-[800px] w-full lg:w-1/2 overflow-hidden border border-white/5 group shadow-2xl"
        >
          <Image
            src="/assets/luxury.png"
            alt="Fashion Avenue Luxury"
            fill
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 contrast-125 brightness-75 grayscale group-hover:grayscale-0 transition-all"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.8)_0%,transparent_100%)]" />
          
          <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 right-10 lg:right-20">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
               <div className="h-[1px] w-8 lg:w-12 bg-dubai-gold" />
               <span className="text-dubai-gold text-[10px] lg:text-xs uppercase tracking-[0.5em] font-bold">The Pinnacle</span>
            </div>
            <h4 className="text-3xl lg:text-5xl font-black cinematic-text tracking-tighter uppercase leading-none text-white">FASHION <br /> <span className="text-white/20 italic">AVENUE</span></h4>
          </div>
        </motion.div>
 
        <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-1/2">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-4xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter cinematic-text uppercase mb-6 lg:mb-10">
              WHERE LEGENDS <br /> <span className="text-white/20 italic font-medium">RESIDE.</span>
            </h3>
            
            <p className="text-white/40 text-sm lg:text-lg xl:text-2xl font-light leading-relaxed mb-4 lg:mb-6 tracking-tight max-w-xl mx-auto lg:mx-0">
              The world's most prestigious luxury destination. A dedicated avenue hosting global flagship stores for the house of luxury—Hermès, Louis Vuitton, and Chanel.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-12 border-y border-white/5">
            <div className="space-y-2 lg:space-y-4">
              <div className="text-3xl lg:text-5xl font-black text-dubai-gold tabular-nums tracking-tighter">150+</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-white/20 font-bold">Luxury Maison Flagships</div>
            </div>
            <div className="space-y-2 lg:space-y-4">
              <div className="text-3xl lg:text-5xl font-black text-dubai-gold tabular-nums tracking-tighter">22k</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-white/20 font-bold">SQM OF ELITE RETAIL</div>
            </div>
          </div>

          <button className="luxury-button w-full lg:w-fit mt-4 px-10 py-5 bg-dubai-gold text-black font-black uppercase text-[10px] tracking-[0.5em] hover:bg-white transition-all">
            Request Flagship Prospectus
          </button>
        </div>
      </div>
    </div>
  );
}
