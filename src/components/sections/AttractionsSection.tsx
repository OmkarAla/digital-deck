"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AttractionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="scene-container overflow-hidden">
      <div ref={containerRef} className="container mx-auto relative h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-48 w-full">
          {/* Parallax Image Stack */}
          <div className="lg:w-1/2 relative h-[800px] w-full">
             <motion.div style={{ y: y1 }} className="absolute top-20 left-0 w-4/5 h-4/5 z-20 overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
               <Image src="/assets/aquarium.png" alt="Aquarium" fill className="object-cover scale-110" />
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
             </motion.div>
             <motion.div style={{ y: y2 }} className="absolute -bottom-10 -right-10 w-3/4 h-3/4 z-10 overflow-hidden border border-white/5 opacity-30 grayscale brightness-50">
               <Image src="/assets/hero.png" alt="Dubai Fountain" fill className="object-cover" />
             </motion.div>
             <div className="absolute inset-0 bg-dubai-gold/5 mix-blend-overlay z-0 translate-x-12 translate-y-12 blur-3xl opacity-50" />
          </div>

          <div className="lg:w-1/2 flex flex-col gap-12">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                 <div className="h-[1px] w-12 bg-dubai-gold" />
                 <span className="text-dubai-gold uppercase tracking-[0.6em] text-xs font-bold">Experiential Anchors</span>
              </div>
              
              <h3 className="text-6xl md:text-8xl font-black cinemactic-text tracking-tighter leading-[0.85] uppercase">
                THE EPICENTER <br /> OF <span className="text-white/20 italic font-medium">WONDER.</span>
              </h3>
              
              <p className="text-white/40 text-2xl font-light leading-relaxed max-w-xl tracking-tight">
                From the deep blue of the world's largest suspended aquarium to the Olympic-sized Ice Rink, we create experiences that defy expectations and command attention.
              </p>
            </div>
            
            <div className="space-y-10 pt-8 border-t border-white/5">
              {[
                { name: "Dubai Aquarium & Underwater Zoo", sub: "Global Landmark" },
                { name: "Dubai Ice Rink", sub: "Olympic-Sized Center" },
                { name: "VR Park & Play DXB", sub: "Digital Frontier" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-8 group"
                >
                  <div className="text-xs font-black text-white/20 group-hover:text-dubai-gold transition-colors font-mono">0{i+1}</div>
                  <div>
                    <div className="uppercase tracking-[0.4em] text-xs font-bold text-white group-hover:text-dubai-gold transition-colors">{item.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/20 mt-2 font-medium">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
