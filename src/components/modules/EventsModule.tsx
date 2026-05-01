"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mic, Video, Users, Trophy } from "lucide-react";

const venues = [
  { name: "Global Atrium", capacity: "5,000+", type: "Key Activations", icon: Users },
  { name: "Performing Arts Center", capacity: "2,000", type: "Concerts / Shows", icon: Mic },
  { name: "Exposition Hall", capacity: "10,000+", type: "Conventions", icon: Trophy },
];

export default function EventsModule({ setSlide }: { setSlide: (i: number) => void }) {
  return (
    <div className="scene-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start w-full">
        <div className="lg:col-span-5 flex flex-col gap-14">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-dubai-gold" />
             <span className="text-dubai-gold uppercase tracking-[0.6em] text-xs font-bold">The Global Stage</span>
          </div>
          
          <h3 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter cinematic-text uppercase">
            A PLATFORM <br /> FOR <span className="text-white/20 italic font-medium">LEGENDS.</span>
          </h3>
          
          <p className="text-white/40 text-2xl font-light leading-relaxed max-w-lg tracking-tight">
            Dubai Mall is not just a building; it's a global medium. From luxury fashion shows to world tours and tech launches, we provide the ultimate venue for high-stakes activations.
          </p>

          <div className="space-y-6 pt-10 border-t border-white/5">
            {venues.map((venue, i) => {
              const Icon = venue.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-8 p-8 glass-panel border border-white/5 hover:border-dubai-gold/20 transition-all group"
                >
                  <Icon className="text-dubai-gold/40 group-hover:text-dubai-gold transition-colors" size={28} />
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.4em] font-bold text-white mb-2">{venue.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/20 font-medium">{venue.type} • CAPACITY: {venue.capacity}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button className="luxury-button w-fit mt-8">Request Venue Specification Deck</button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 relative h-full">
           <div className="relative h-[700px] w-full border border-white/5 overflow-hidden group shadow-2xl">
              <Image src="/assets/events.png" alt="Exposition Hall" fill className="object-cover contrast-125 brightness-50 scale-110 group-hover:scale-100 transition-transform duration-[3000ms]" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12">
                 <div className="text-dubai-gold font-black text-xs uppercase tracking-[0.5em] mb-4">Venue Preview</div>
                 <h4 className="text-white font-black text-3xl uppercase tracking-tighter">Exposition Hall <br /> <span className="text-white/20 italic font-medium">Node Alpha</span></h4>
              </div>
           </div>
           
           <div className="flex flex-col gap-12">
              <div className="relative flex-1 min-h-[300px] w-full border border-white/5 overflow-hidden">
                <Image src="/assets/aquarium.png" alt="Performance" fill className="object-cover opacity-20 grayscale brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Video className="text-white/10" size={64} />
                </div>
              </div>
              <div className="p-16 glass-panel flex flex-col justify-center gap-8 border border-white/5 h-fit">
                 <div className="text-6xl font-black text-white leading-none tracking-tighter tabular-nums">111M+</div>
                 <div>
                    <div className="text-xs uppercase tracking-[0.5em] font-bold text-white mb-2">Global Impressions</div>
                    <div className="text-[11px] uppercase tracking-[0.3em] font-medium text-white/20 leading-relaxed">Per Primary Activation Node <br /> in Fiscal Year 2024</div>
                 </div>
                 <div className="w-16 h-[1px] bg-dubai-gold" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
