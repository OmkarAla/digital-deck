"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LuxurySection() {
  return (
    <div className="scene-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[800px] w-full overflow-hidden border border-white/5 group shadow-2xl"
        >
          <Image
            src="/assets/luxury.png"
            alt="Fashion Avenue Luxury"
            fill
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 contrast-125 brightness-75 grayscale group-hover:grayscale-0 transition-all"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.8)_0%,transparent_100%)]" />
          
          <div className="absolute bottom-20 left-20 right-20">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-dubai-gold" />
               <span className="text-dubai-gold text-xs uppercase tracking-[0.5em] font-bold">The Pinnacle</span>
            </div>
            <h4 className="text-5xl font-black cinemactic-text tracking-tighter uppercase leading-none text-white">FASHION <br /> <span className="text-white/20 italic">AVENUE</span></h4>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <h3 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter cinemactic-text uppercase mb-10">
              WHERE LEGENDS <br /> <span className="text-white/20 italic font-medium">RESIDE.</span>
            </h3>
            
            <p className="text-white/40 text-2xl font-light leading-relaxed mb-6 tracking-tight">
              The world's most prestigious luxury destination. A dedicated avenue hosting global flagship stores for the house of luxury—Hermès, Louis Vuitton, and Chanel.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16 py-12 border-y border-white/5">
            <div className="space-y-4">
              <div className="text-5xl font-black text-dubai-gold tabular-nums tracking-tighter">150+</div>
              <div className="text-xs uppercase tracking-[0.4em] text-white/20 font-bold">Luxury Maison Flagships</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-black text-dubai-gold tabular-nums tracking-tighter">22k</div>
              <div className="text-xs uppercase tracking-[0.4em] text-white/20 font-bold">SQM OF ELITE RETAIL</div>
            </div>
          </div>

          <button className="luxury-button w-fit mt-4">
            Request Flagship Prospectus
          </button>
        </div>
      </div>
    </div>
  );
}
