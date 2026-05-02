"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BarChart3, Gem, Tent, Trophy, Handshake, Cpu, Landmark, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HubNode {
  id: string;
  title: string;
  index: number;
  icon: any;
  description: string;
  stats: string;
}

const nodes: HubNode[] = [
  { id: "Global Scale", title: "Global Scale", index: 2, icon: BarChart3, description: "105M+ Annual Footfall. Unprecedented visibility.", stats: "105M+" },
  { id: "Luxury Heritage", title: "Luxury Heritage", index: 3, icon: Gem, description: "The world's premier fashion destination.", stats: "1200+ Stores" },
  { id: "Attractions", title: "Immersive Experiences", index: 4, icon: Landmark, description: "Beyond retail. A global entertainment landmark.", stats: "10+ Icons" },
  { id: "Event Platform", title: "Event Platform", index: 6, icon: Trophy, description: "Host to the world's most exclusive activations.", stats: "500+ Events" },
  { id: "Brand Simulator", title: "AI Strategy Lab", index: 8, icon: Cpu, description: "Data-driven brand fit analysis.", stats: "94% Accuracy" },
  { id: "Sponsorship", title: "Strategic Partnerships", index: 7, icon: Handshake, description: "Connect with high-net-worth audiences.", stats: "ROI Focused" },
];

export default function GlobalHub({ setSlide }: { setSlide: (i: number) => void }) {
  const [hoveredNode, setHoveredNode] = useState<HubNode | null>(null);

  return (
    <div className="scene-container bg-black overflow-y-auto lg:overflow-hidden flex items-center justify-center py-20 lg:py-0">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6 lg:px-0">
        {/* Left Side: Strategic Overview */}
        <div className="flex flex-col gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
             <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
                <div className="h-[1px] w-8 lg:w-12 bg-dubai-gold" />
                <span className="text-dubai-gold uppercase tracking-[0.5em] lg:tracking-[0.6em] text-[9px] lg:text-[10px] font-black italic">Strategic Control Center</span>
             </div>
             <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-[-0.06em] leading-[0.8] mb-6 lg:mb-8">
               CHOOSE YOUR <br /> <span className="text-white/10">TRAJECTORY.</span>
             </h2>
             <p className="text-white/30 text-sm lg:text-xl font-light tracking-tight max-w-lg mx-auto lg:mx-0 leading-relaxed uppercase">
                A non-linear journey through the world's most visited retail and entertainment ecosystem.
             </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {hoveredNode ? (
              <motion.div
                key={hoveredNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-panel p-6 lg:p-10 border-dubai-gold/20"
              >
                <div className="text-dubai-gold font-black text-[9px] lg:text-[10px] uppercase tracking-[0.4em] mb-4">Section Preview</div>
                <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter mb-4 text-white">{hoveredNode.title}</h3>
                <p className="text-white/50 text-sm lg:text-lg mb-6 lg:mb-8 leading-relaxed">{hoveredNode.description}</p>
                <div className="flex flex-wrap items-center gap-6 lg:gap-12">
                   <div>
                      <div className="text-white font-black text-2xl lg:text-3xl tabular-nums">{hoveredNode.stats}</div>
                      <div className="text-[8px] lg:text-[9px] uppercase tracking-[0.3em] text-white/20 font-black mt-1">Core Metric</div>
                   </div>
                   <button 
                     onClick={() => setSlide(hoveredNode.index)}
                     className="ml-auto flex items-center gap-4 text-[9px] lg:text-[10px] uppercase tracking-[0.4em] font-black text-dubai-gold hover:text-white transition-colors group"
                   >
                     ENTER MODULE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 lg:p-10 border border-white/5 bg-white/[0.02] flex items-center justify-center text-center italic"
              >
                <p className="text-white/20 text-[10px] lg:text-sm uppercase tracking-[0.4em] font-black">Hover or tap a strategic node to preview</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Node Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 lg:gap-8 pb-10 lg:pb-0">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.button
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => {
                  if (hoveredNode?.id === node.id) {
                    setSlide(node.index);
                  } else {
                    setHoveredNode(node);
                  }
                }}
                className={cn(
                  "group relative aspect-square p-4 lg:p-8 border flex flex-col items-center justify-center gap-4 lg:gap-6 transition-all duration-700 overflow-hidden",
                  hoveredNode?.id === node.id ? "border-dubai-gold bg-dubai-gold/5 scale-[1.02] shadow-[0_0_50px_rgba(212,175,55,0.1)]" : "border-white/5 bg-white/[0.02] hover:border-white/20"
                )}
              >
                 {/* Decorative Background Elements */}
                 <div className="absolute top-2 right-2 lg:top-4 lg:right-4 text-[7px] lg:text-[8px] font-black text-white/5 tracking-[0.3em] uppercase">Node {node.index}</div>
                 
                 <Icon 
                   size={32}
                   className={cn(
                     "transition-all duration-700 lg:w-12 lg:h-12",
                     hoveredNode?.id === node.id ? "text-dubai-gold scale-110 rotate-3" : "text-white/10 group-hover:text-white/40"
                   )} 
                 />
               
               <div className="text-center">
                  <div className={cn(
                    "text-[8px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-all duration-500 mb-1 lg:mb-2",
                    hoveredNode?.id === node.id ? "text-white" : "text-white/20"
                  )}>
                    {node.title}
                  </div>
                  {hoveredNode?.id === node.id && (
                    <motion.div layoutId="node-line" className="h-[1px] w-6 lg:w-8 bg-dubai-gold mx-auto" />
                  )}
               </div>

               {/* Grid Pattern Background */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
            </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
