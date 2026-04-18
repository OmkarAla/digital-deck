"use client";

import { motion } from "framer-motion";
import { Users, Layout, Globe, TrendingUp } from "lucide-react";

const stats = [
  { label: "Annual Visitors", value: "111M+", icon: Users, sub: "Surpassing most global cities" },
  { label: "Total Area", value: "1.1M", icon: Layout, sub: "Square Meters of Retail & Leisure" },
  { label: "Retail Outlets", value: "1,200+", icon: Globe, sub: "Global & Regional Brands" },
  { label: "Growth Rate", value: "19%", icon: TrendingUp, sub: "Year-on-Year Increase" },
];

export default function StatsSection() {
  return (
    <div className="scene-container">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-dubai-gold" />
             <span className="text-dubai-gold uppercase tracking-[0.5em] text-xs font-bold">Market Leadership</span>
          </div>
          <h3 className="text-6xl md:text-8xl font-black cinemactic-text uppercase">
            THE FORCE <br /> OF <span className="text-white/20 italic">NUMBERS.</span>
          </h3>
        </div>
        <p className="text-white/40 max-w-sm mt-4 text-lg font-light leading-relaxed">
          Unprecedented footfall meets global connectivity. A platform where every data point represents a significant commercial opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-16 group hover:border-dubai-gold/40 transition-all duration-700 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <stat.icon className="text-dubai-gold/40 mb-12 group-hover:text-dubai-gold transition-colors" size={32} />
              <div className="text-7xl font-black mb-6 tracking-tighter tabular-nums leading-none">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-white/40 group-hover:text-white transition-colors">{stat.label}</div>
            </div>
            <p className="text-white/20 text-xs leading-relaxed font-light uppercase tracking-widest">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Interactive Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex items-center justify-between py-8 border-t border-white/5"
      >
        <div className="text-[11px] uppercase tracking-[0.5em] text-white/20 font-bold">Certified 2024 Audit Data</div>
        <button className="text-dubai-gold text-xs uppercase tracking-[0.3em] font-bold hover:text-white transition-colors flex items-center gap-4">
          View Demographics Report
          <TrendingUp size={14} />
        </button>
      </motion.div>
    </div>
  );
}
