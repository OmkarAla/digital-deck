"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mic, Video, Users, Trophy, ArrowRight } from "lucide-react";

const venues = [
  { name: "Global Atrium", capacity: "5,000+", type: "Key Activations", icon: Users },
  { name: "Performing Arts Center", capacity: "2,000", type: "Concerts / Shows", icon: Mic },
  { name: "Exposition Hall", capacity: "10,000+", type: "Conventions", icon: Trophy },
];

export default function EventsModule({ setSlide }: { setSlide: (i: number) => void }) {
  return (
    <div className="scene-container flex flex-col gap-10 lg:gap-16 py-20 lg:py-0 overflow-y-auto lg:overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 px-6 lg:px-0">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="h-[1px] w-10 bg-dubai-gold" />
            <span className="text-dubai-gold uppercase tracking-[0.5em] text-[10px] font-black">Activation & Events</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Where the World <br className="hidden lg:block" /> <span className="text-white/20 italic font-medium text-4xl lg:text-6xl">Takes Center Stage.</span>
          </h2>
          <p className="text-white/40 text-sm lg:text-base font-medium max-w-xl mx-auto lg:mx-0">
            From global fashion shows to high-stakes tech launches, our event infrastructure 
            is engineered for <span className="text-white">maximum brand impact.</span>
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <button className="px-8 py-4 lg:px-10 lg:py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-dubai-gold transition-all flex items-center justify-center gap-4 group">
            Book This Venue
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold text-center lg:text-right">
            Download 2024 Rate Card (.PDF)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-6 lg:px-0 pb-10 lg:pb-0">
        {/* Left Column: Tech Specs & KPI */}
        <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-10">
            <div>
              <div className="text-white font-black text-3xl lg:text-4xl tracking-tighter uppercase tabular-nums">42,000 SQFT</div>
              <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 mt-1 italic">Total Activation Space</div>
            </div>
            <div>
              <div className="text-dubai-gold font-black text-3xl lg:text-4xl tracking-tighter uppercase tabular-nums">8K READY</div>
              <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 mt-1 italic">Projection & AV Grid</div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-10 border-t border-white/10 pt-8 lg:pt-12">
            {[
              { label: "Global Reach", val: "20,000+ Avg Daily Footfall", detail: "Per Major Event Node" },
              { label: "Elite Access", val: "UHNWI Persona Density", detail: "94% Decision Makers" },
              { label: "Tech Spec", val: "5G Integrated Core", detail: "Live Stream Ready" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="text-dubai-gold font-black text-[10px] uppercase tracking-[0.4em] mb-2">{stat.label}</div>
                <div className="text-white font-bold text-base lg:text-lg uppercase tracking-tight">{stat.val}</div>
                <div className="text-white/20 text-[9px] lg:text-[10px] uppercase tracking-widest font-medium italic">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Case Study */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative h-full">
           <div className="relative h-[400px] lg:h-[700px] w-full border border-white/5 overflow-hidden group shadow-2xl">
              <Image src="/assets/events.png" alt="Exposition Hall" fill className="object-cover contrast-125 brightness-50 scale-110 group-hover:scale-100 transition-transform duration-[3000ms]" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
                 <div className="text-dubai-gold font-black text-[10px] uppercase tracking-[0.5em] mb-4">Venue Preview</div>
                 <div className="text-xl lg:text-2xl text-white font-black uppercase tracking-tight leading-none">Grand Atrium <br /> Showcase.</div>
              </div>
           </div>
           
           <div className="flex flex-col gap-8 lg:gap-12">
              <div className="relative flex-1 min-h-[250px] lg:min-h-[300px] w-full border border-white/5 overflow-hidden">
                <Image src="/assets/aquarium.png" alt="Performance" fill className="object-cover opacity-20 grayscale brightness-50" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 lg:p-10">
                   <Video className="text-white/10 mb-4 lg:mb-6" size={40} />
                   <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Watch Activation Case Study</div>
                </div>
              </div>
              
              <div className="p-8 lg:p-10 border border-dubai-gold/20 bg-dubai-gold/5 backdrop-blur-sm">
                 <div className="text-dubai-gold font-black text-[10px] uppercase tracking-[0.4em] mb-4 lg:mb-6 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-dubai-gold" />
                   ROI Spotlight
                 </div>
                 <div className="text-2xl lg:text-4xl text-white font-black uppercase tracking-tighter mb-2 italic">72%</div>
                 <div className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold leading-relaxed">
                   Increase in Brand Affinity <br className="hidden lg:block" /> post-activation.
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
