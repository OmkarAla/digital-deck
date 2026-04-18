"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Monitor, CreditCard, Layout, MapPin, Eye, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

const opportunities = [
  { id: 1, title: "Grand Atrium Takeover", reach: "High Impact", type: "Digital / Physical", cost: "$$$", x: "45%", y: "40%" },
  { id: 2, title: "Fashion Avenue Screens", reach: "Premium Audience", type: "Digital OOH", cost: "$$$", x: "20%", y: "60%" },
  { id: 3, title: "Cinema Cluster Branding", reach: "Youth / Families", type: "Experiential", cost: "$$", x: "75%", y: "30%" },
  { id: 4, title: "Valet Entry Dominance", reach: "HNI / Affluent", type: "Physical Iconic", cost: "$$$", x: "10%", y: "20%" },
];

export default function SponsorshipModule() {
  const [activeId, setActiveId] = useState(1);
  const activeOpp = opportunities.find(o => o.id === activeId);

  return (
    <div className="scene-container">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-dubai-gold" />
             <span className="text-dubai-gold uppercase tracking-[0.6em] text-xs font-bold">Brand Dominance</span>
          </div>
          <h3 className="text-6xl md:text-8xl font-black cinemactic-text uppercase tracking-tighter leading-none">
            OMNIPRESENT <br /> <span className="text-white/20 italic font-medium">ACTIVATION.</span>
          </h3>
        </div>
        <div className="p-12 glass-panel border border-white/5 flex flex-col gap-10 max-w-sm h-fit self-end">
           <div className="flex items-center gap-4 text-dubai-gold font-black text-xs uppercase tracking-[0.4em]">
              <Eye size={16} /> 1.2M+ Weekly Impressions
           </div>
           <p className="text-white/40 text-lg font-light leading-relaxed tracking-tight">
              Capture attention at critical decision points along the world's most valuable retail journey.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        {/* Interactive Map/Map Surrogate */}
        <div className="lg:col-span-7 relative aspect-[14/9] bg-charcoal border border-white/5 rounded-sm overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 z-0 bg-[url('/assets/sponsorship.png')] opacity-20 bg-cover grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[3000ms]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Hotspots */}
          {opportunities.map((opp) => (
            <button
              key={opp.id}
              onClick={() => setActiveId(opp.id)}
              style={{ left: opp.x, top: opp.y }}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 transition-all duration-700 flex items-center justify-center group/btn",
                activeId === opp.id 
                  ? "bg-dubai-gold border-white scale-125 z-20 shadow-[0_0_50px_rgba(212,175,55,0.8)]" 
                  : "bg-black/80 border-white/10 hover:border-dubai-gold z-10 hover:bg-dubai-gold/20"
              )}
            >
              <div className={cn(
                "w-1 h-1 rounded-full transition-all duration-500",
                activeId === opp.id ? "bg-black" : "bg-white/40 group-hover/btn:bg-white"
              )} />
              
              <AnimatePresence>
                {activeId === opp.id && (
                   <motion.div 
                     initial={{ scale: 0.5, opacity: 0, y: 10 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-black px-5 py-2.5 rounded-sm uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl"
                   >
                      {opp.title}
                   </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}

          {/* Map Overlay Text */}
          <div className="absolute bottom-10 right-10 text-[11px] uppercase tracking-[0.6em] text-white/20 font-bold">
            Interactive Node Mapping V1.4
          </div>
        </div>

        {/* Detailed Info Card */}
        <div className="lg:col-span-5 px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-12"
            >
              <div>
                 <h4 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">{activeOpp?.title}</h4>
                 <p className="text-white/40 text-2xl font-light leading-relaxed mb-10 tracking-tight">
                    Leverage our highest-traffic corridors with curated placement strategies for maximum brand recall.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-12 py-12 border-y border-white/5">
                 <div className="space-y-4">
                    <div className="text-dubai-gold uppercase tracking-[0.4em] text-xs font-black">Audience Fit</div>
                    <div className="text-white font-black text-2xl uppercase tracking-tighter">{activeOpp?.reach}</div>
                 </div>
                 <div className="space-y-4">
                    <div className="text-dubai-gold uppercase tracking-[0.4em] text-xs font-black">Format Type</div>
                    <div className="text-white font-black text-2xl uppercase tracking-tighter">{activeOpp?.type}</div>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-10 pt-4">
                 <button className="luxury-button w-full sm:w-fit">Request Media Pack</button>
                 <div className="text-xs uppercase tracking-[0.5em] font-black text-white/20">
                    Tier: <span className="text-dubai-gold">{activeOpp?.cost}</span>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
