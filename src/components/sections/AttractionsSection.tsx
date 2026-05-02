"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const attractions = [
  { title: "Dubai Aquarium", type: "Underwater Zoo", impressions: "1.5M+", recall: "92%" },
  { title: "Dubai Ice Rink", type: "High Dwell-Time", impressions: "800K+", recall: "85%" },
  { title: "Play DXB", type: "VR Frontier", impressions: "500K+", recall: "88%" },
  { title: "Adventure Park", type: "Active Zone", impressions: "400K+", recall: "82%" }
];

export default function AttractionsSection({ setSlide }: { setSlide: (i: number) => void }) {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div className="scene-container flex flex-col lg:flex-row gap-12 lg:gap-20 items-center py-20 lg:py-0 overflow-y-auto lg:overflow-hidden">
      {/* TEXT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 px-6 lg:px-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-10 bg-dubai-gold" />
          <span className="text-dubai-gold uppercase tracking-[0.5em] text-[10px] font-bold">Iconic Landmarks</span>
        </div>
        <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6 lg:mb-10">
          Where the World <br /> <span className="text-white/20 italic font-medium">Comes to Play.</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {attractions.map((attr, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="text-dubai-gold font-black text-2xl lg:text-3xl mb-2 tracking-tighter group-hover:text-white transition-colors uppercase leading-none">
                {attr.title}
              </div>
              <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-4">
                {attr.type}
              </div>
              <div className="space-y-2 border-l border-white/10 pl-4">
                <div className="flex items-center gap-2">
                   <div className="text-[10px] lg:text-[11px] font-bold text-white/80 tabular-nums">{attr.impressions}</div>
                   <div className="text-[8px] uppercase tracking-widest text-white/20 font-black">Impressions/Yr</div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="text-dubai-gold text-[10px] lg:text-[11px] font-black">{attr.recall}</div>
                   <div className="text-[8px] uppercase tracking-widest text-white/20 font-black">Brand Recall</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-4 group text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-white/60 hover:text-dubai-gold transition-colors">
          View Sponsorship Deck
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* VISUAL CONTENT */}
      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[800px] order-1 lg:order-2 px-6 lg:px-0">
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-0 lg:top-20 left-0 w-full lg:w-[90%] h-full lg:h-[80%] z-20 overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        >
          <Image 
            src="/assets/aquarium.png" 
            alt="Aquarium" 
            fill 
            className="object-cover scale-110" 
            sizes="(max-width: 768px) 100vw, 50vw" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>
        
        {/* Secondary image only visible on desktop */}
        <motion.div 
          style={{ y: y2 }} 
          className="hidden lg:block absolute -bottom-10 -right-10 w-3/4 h-3/4 z-10 overflow-hidden border border-white/5 opacity-30 grayscale brightness-50"
        >
          <Image 
            src="/assets/hero.png" 
            alt="Dubai Fountain" 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw" 
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-dubai-gold/5 mix-blend-overlay z-0 translate-x-12 translate-y-12 blur-3xl opacity-50" />
      </div>
    </div>
  );
}
