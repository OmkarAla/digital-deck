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
    <div className="scene-container">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-dubai-gold" />
             <span className="text-dubai-gold uppercase tracking-[0.6em] text-xs font-bold">The Platform Advantage</span>
          </div>
          <h3 className="text-6xl md:text-8xl font-black cinemactic-text uppercase tracking-tighter leading-none mb-12">
            The Hub of <br /> <span className="text-white/20 italic font-medium">Global Influence.</span>
          </h3>
          <p className="text-white/40 text-xl font-light leading-relaxed tracking-tight max-w-xl">
            A convergence of global trade, haute couture, and <span className="text-white italic">bespoke lifestyle curation.</span> Every node within the ecosystem is a strategic point of impact for the world&apos;s most influential demographics.
          </p>
        </div>
        <div className="flex flex-col gap-8 text-left md:text-right pt-4">
           <div className="text-dubai-gold font-black text-5xl tabular-nums tracking-tighter">1.2M+ SQM</div>
           <p className="text-xs uppercase tracking-[0.4em] text-white/30 font-bold max-w-[200px] leading-relaxed">
             Of Integrated <br /> Commercial Ecosystem
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[550px] overflow-hidden border border-white/5 group"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover opacity-20 contrast-125 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12">
              <h4 className="text-4xl font-black tracking-tight mb-4 uppercase">{cat.title}</h4>
              <p className="text-dubai-gold text-xs uppercase tracking-[0.3em] font-bold">{cat.count}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 flex flex-col md:flex-row gap-12 items-start border-t border-white/10 pt-16">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-dubai-gold font-bold text-xs uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 rounded-full bg-dubai-gold" />
            Gastronomy & Lifestyle
          </div>
          <div className="text-white font-black text-4xl tracking-tighter uppercase tabular-nums">200+</div>
          <div className="text-[11px] uppercase tracking-[0.3em] font-medium text-white/20 leading-relaxed">
            Curated Global Culinary Concepts <br /> including 5 Michelin-Starred Nodes
          </div>
        </div>
      </div>

      <div className="mt-24 flex justify-between items-center opacity-10 gap-20 overflow-hidden py-12 border-y border-white/5 grayscale">
         {["GUCCI", "NIKE", "APPLE", "ZARA", "LEGO", "ROLEX", "HERMES"].map((brand) => (
           <span key={brand} className="text-2xl font-black tracking-[0.5em] mb-0 whitespace-nowrap">{brand}</span>
         ))}
      </div>
    </div>
  );
}
