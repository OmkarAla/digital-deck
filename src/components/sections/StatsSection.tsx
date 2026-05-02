"use client";

import { motion } from "framer-motion";
import { Users, Layout, Globe, TrendingUp } from "lucide-react";

const stats = [
  { label: "Annual Visitors", value: "111M+", icon: Users, sub: "Surpassing most global cities" },
  { label: "Total Area", value: "1.1M", icon: Layout, sub: "Square Meters of Retail & Leisure" },
  { label: "Retail Outlets", value: "1,200+", icon: Globe, sub: "Global & Regional Brands" },
  { label: "Growth Rate", value: "19%", icon: TrendingUp, sub: "Year-on-Year Increase" },
];

export default function StatsSection({ setSlide }: { setSlide: (i: number) => void }) {
  return (
    <div className="scene-container py-20 lg:py-0 overflow-y-auto lg:overflow-hidden px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-12 lg:mb-24 gap-8 lg:gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
             <div className="h-[1px] w-8 lg:w-12 bg-dubai-gold" />
             <span className="text-dubai-gold uppercase tracking-[0.5em] lg:tracking-[0.6em] text-[10px] lg:text-xs font-bold">Market Leadership</span>
          </div>
          <h3 className="text-5xl lg:text-7xl xl:text-8xl font-black cinematic-text uppercase tracking-tighter leading-none">
            THE FORCE <br /> OF <span className="text-white/20 italic">NUMBERS.</span>
          </h3>
        </div>
        <p className="text-white/40 max-w-sm mt-4 text-sm lg:text-lg font-light leading-relaxed text-center lg:text-left">
          Unprecedented footfall meets global connectivity. A platform where every data point represents a significant commercial opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 w-full">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 lg:p-16 group hover:border-dubai-gold/40 transition-all duration-700 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]"
            >
              <div>
                <Icon className="text-dubai-gold/40 mb-8 lg:mb-12 group-hover:text-dubai-gold transition-colors" size={24} className="lg:w-8 lg:h-8" />
                <div className="text-5xl lg:text-7xl font-black mb-4 lg:mb-6 tracking-tighter tabular-nums leading-none">{stat.value}</div>
                <div className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] mb-2 lg:mb-4 text-white/40 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
              <p className="text-white/20 text-[9px] lg:text-xs leading-relaxed font-light uppercase tracking-widest">{stat.sub}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative Interactive Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 lg:mt-20 flex flex-col sm:flex-row items-center justify-between py-6 lg:py-8 border-t border-white/5 gap-4 lg:gap-0"
      >
        <div className="text-[9px] lg:text-[11px] uppercase tracking-[0.4em] lg:tracking-[0.5em] text-white/20 font-bold">Certified 2024 Audit Data</div>
        <button className="text-dubai-gold text-[10px] lg:text-xs uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold hover:text-white transition-colors flex items-center gap-4">
          View Demographics Report
          <TrendingUp size={14} />
        </button>
      </motion.div>
    </div>
  );
}
