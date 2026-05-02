"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Hexagon, ShoppingBag, Coffee, Zap, ArrowRight, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const paths = [
  { id: "luxury", title: "Luxury Heritage", icon: Hexagon, pitch: "Establish your legacy in Fashion Avenue, alongside the world's most prestigious maisons.", stats: { traffic: "HNI / Affluent", growth: "+12% YoY", focus: "Brand Equity" } },
  { id: "lifestyle", title: "Lifestyle Core", icon: ShoppingBag, pitch: "Capture the mass-premium market with prime placement in our high-traffic lifestyle zones.", stats: { traffic: "Global Tourist", growth: "+18% YoY", focus: "Sales Velocity" } },
  { id: "fb", title: "F&B / Lifestyle", icon: Coffee, pitch: "Elevate your culinary concept in a destination that treats dining as a primary lifestyle draw.", stats: { traffic: "Evening Prime", growth: "+22% YoY", focus: "Dwell Time" } },
  { id: "popup", title: "Experimental", icon: Zap, pitch: "Launch, test, and scale with flexible, high-impact short-term activations in our most populated nodes.", stats: { traffic: "Maximum Reach", growth: "N/A", focus: "Product Launch" } },
];

export default function LeasingModule({ setSlide }: { setSlide: (i: number) => void }) {
  const [activePath, setActivePath] = useState("luxury");
  const path = paths.find(p => p.id === activePath);

  return (
    <div className="scene-container py-20 lg:py-0 overflow-y-auto lg:overflow-hidden px-6 lg:px-0">
      <div className="flex items-center gap-4 mb-12 lg:mb-20 overflow-hidden">
         <motion.div 
           initial={{ x: -100 }}
           whileInView={{ x: 0 }}
           transition={{ duration: 1 }}
           className="h-[1px] w-12 lg:w-20 bg-dubai-gold" 
         />
         <span className="text-dubai-gold uppercase tracking-[0.6em] lg:tracking-[0.8em] text-[10px] lg:text-xs font-black underline underline-offset-8 decoration-white/10">Leasing Pathways</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start w-full pb-12 lg:pb-0">
        {/* Navigation Sidebar (Local to this module) */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActivePath(p.id)}
                className={cn(
                  "p-6 lg:p-10 border text-left transition-all duration-700 group relative overflow-hidden",
                  activePath === p.id ? "border-dubai-gold bg-dubai-gold/5" : "border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-6 lg:gap-8">
                  <Icon size={24} className={cn("transition-colors duration-500 lg:w-7 lg:h-7", activePath === p.id ? "text-dubai-gold" : "text-white/20")} />
                  <div className={cn("text-lg lg:text-xl font-black uppercase tracking-tight transition-colors duration-500", activePath === p.id ? "text-white" : "text-white/40 group-hover:text-white")}>
                    {p.title}
                  </div>
                </div>
                {activePath === p.id && (
                  <motion.div layoutId="path-indicator" className="absolute right-0 top-0 bottom-0 w-1 bg-dubai-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Path Pitch */}
        <div className="lg:col-span-8 min-h-auto lg:min-h-[600px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activePath}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="flex flex-col gap-10 lg:gap-16 text-center lg:text-left"
             >
                <div className="space-y-6 lg:space-y-10">
                   <h4 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.08em] uppercase leading-[0.8] mb-6 lg:mb-8">
                     {path?.title.split(" ")[0]} <br /> <span className="text-white/10 italic font-medium -ml-1 lg:-ml-2">{path?.title.split(" ")[1]}</span>
                   </h4>
                   <p className="text-white/40 text-lg lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-tight">
                     {path?.pitch}
                   </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 py-10 lg:py-16 border-y border-white/5">
                   <div className="space-y-2 lg:space-y-4">
                      <div className="text-[10px] lg:text-xs uppercase tracking-[0.4em] font-black text-dubai-gold/60">Target Profile</div>
                      <div className="text-white font-black text-xl lg:text-2xl uppercase tracking-tighter">{path?.stats.traffic}</div>
                   </div>
                   <div className="space-y-2 lg:space-y-4">
                      <div className="text-[10px] lg:text-xs uppercase tracking-[0.4em] font-black text-dubai-gold/60">Expansion</div>
                      <div className="text-white font-black text-xl lg:text-2xl uppercase tracking-tighter">{path?.stats.growth}</div>
                   </div>
                   <div className="space-y-2 lg:space-y-4">
                      <div className="text-[10px] lg:text-xs uppercase tracking-[0.4em] font-black text-dubai-gold/60">Strategy Focus</div>
                      <div className="text-white font-black text-xl lg:text-2xl uppercase tracking-tighter">{path?.stats.focus}</div>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center pt-4 lg:pt-6">
                  <button className="luxury-button w-full md:w-fit px-10 py-5 bg-dubai-gold text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white transition-all">
                    Initialize Partnership
                  </button>
                  <button className="flex items-center gap-4 lg:gap-6 text-[10px] lg:text-[11px] uppercase tracking-[0.4em] lg:tracking-[0.5em] font-black text-white/30 hover:text-white transition-all duration-500 group">
                    <BarChart3 size={18} className="text-dubai-gold/60" />
                    Download Prospectus
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
