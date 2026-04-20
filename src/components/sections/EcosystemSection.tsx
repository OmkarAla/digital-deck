"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { title: "Retail", count: "1,200 stores", image: "/assets/luxury.png" },
  { title: "Dining", count: "200+ outlets", image: "/assets/hero.png" },
  { title: "Entertainment", count: "10+ anchors", image: "/assets/aquarium.png" },
];

export default function EcosystemSection() {
  return (
    <div className="scene-container flex-row gap-20 items-center">
      {/* LEFT COLUMN: Narrative & Stats */}
      <div className="flex flex-col justify-center w-[38%] flex-shrink-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-10 bg-dubai-gold" />
          <span className="text-dubai-gold uppercase tracking-[0.5em] text-[10px] font-bold">The Platform Advantage</span>
        </div>
        <h3 className="text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
          The Hub of <br /> <span className="text-white/20 italic font-medium">Global Influence.</span>
        </h3>
        <p className="text-white/40 text-base font-light leading-relaxed tracking-tight mb-10">
          A convergence of global trade, haute couture, and{" "}
          <span className="text-white italic">bespoke lifestyle curation.</span> Every node is a strategic point of impact for the world&apos;s most influential demographics.
        </p>

        {/* KPIs */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
          <div>
            <div className="text-dubai-gold font-black text-4xl tabular-nums tracking-tighter">1.2M+ SQM</div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mt-1">Integrated Commercial Ecosystem</p>
          </div>
          <div>
            <div className="text-white font-black text-4xl tracking-tighter uppercase tabular-nums">200+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 mt-1">Curated Culinary Concepts</div>
          </div>
        </div>

        {/* Brand Ticker */}
        <div className="mt-10 flex gap-8 opacity-20 overflow-hidden grayscale">
          {["GUCCI", "APPLE", "ROLEX", "HERMES", "NIKE"].map((brand) => (
            <span key={brand} className="text-sm font-black tracking-[0.4em] whitespace-nowrap">{brand}</span>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Image Cards */}
      <div className="flex-1 grid grid-cols-3 gap-4 h-[calc(100vh-160px)]">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden border border-white/5 group"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover opacity-25 contrast-125 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70 transition-all duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl font-black tracking-tight mb-2 uppercase">{cat.title}</h4>
              <p className="text-dubai-gold text-[10px] uppercase tracking-[0.3em] font-bold">{cat.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
