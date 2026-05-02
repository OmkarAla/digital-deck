"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Eye, Zap, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const hotspots = [
  { id: 1, top: "40%", left: "30%", title: "VIP Tunnel Experience", content: "Strategic sponsorship node with 98% brand recall and primary engagement index.", icon: Eye },
  { id: 2, top: "60%", left: "70%", title: "Digital Surface Node", content: "AI-driven content projection with 4.5x higher conversion than standard retail media.", icon: Zap },
  { id: 3, top: "30%", left: "80%", title: "Hedge Fund Audience", index: "9.8/10", content: "World's highest concentration of UHNWI during peak financial cycles.", icon: Users },
];

export default function ImmersiveView({ setSlide }: { setSlide: (i: number) => void }) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div className="scene-container !px-0 bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* The Immersive Panorama */}
      <div className="relative w-full h-full group">
        <motion.div 
          initial={{ scale: 1.1, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/assets/aquarium.png" 
            alt="Dubai Mall Aquarium" 
            fill 
            className="object-cover brightness-75 transition-transform duration-[20000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/60" />
        </motion.div>

        {/* Floating Hotspots */}
        {hotspots.map((spot) => {
          const Icon = spot.icon;
          return (
            <div 
              key={spot.id}
              className="absolute z-30"
              style={{ top: spot.top, left: spot.left }}
            >
              <button
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={cn(
                  "w-12 h-12 rounded-full border border-dubai-gold/50 flex items-center justify-center transition-all duration-500",
                  activeHotspot === spot.id ? "bg-dubai-gold text-black scale-125 shadow-[0_0_40px_rgba(212,175,55,0.6)]" : "bg-black/40 text-dubai-gold backdrop-blur-md"
                )}
              >
                <Icon size={20} />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                    className="absolute left-16 top-0 w-80 glass-panel p-8 pointer-events-none"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-[1px] w-6 bg-dubai-gold" />
                      <span className="text-dubai-gold uppercase tracking-[0.4em] text-[9px] font-black italic">Strategic Intelligence</span>
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight text-white mb-3">{spot.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{spot.content}</p>
                    {spot.index && (
                      <div className="flex items-center gap-2">
                         <TrendingUp size={14} className="text-dubai-gold" />
                         <span className="text-dubai-gold font-black text-xs uppercase tracking-widest">Affinity Index: {spot.index}</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Overlay Navigation Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center">
           <motion.div
             animate={{ y: [0, -5, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-black"
           >
             Interact with the ecosystem
           </motion.div>
        </div>

        {/* Side Text Overlay */}
        <div className="absolute top-24 left-24 z-20 max-w-xl">
           <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]"
           >
             IMMERSIVE <br /> <span className="text-dubai-gold">GRAVITY.</span>
           </motion.h3>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2 }}
             className="text-white/40 uppercase tracking-[0.3em] font-medium text-xs mt-6"
           >
             Captivating the world's most discerning audience in 360°.
           </motion.p>
        </div>
      </div>
    </div>
  );
}
