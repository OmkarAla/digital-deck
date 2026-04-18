"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Scale", id: "stats" },
  { name: "Retail", id: "ecosystem" },
  { name: "Luxury", id: "luxury" },
  { name: "Events", id: "events" },
  { name: "Sponsorship", id: "sponsorship" },
  { name: "Brand Simulator", id: "simulator" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = [{ id: "intro" }, ...navItems].map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700",
      scrolled ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-10"
    )}>
      <div className="max-w-[1800px] mx-auto px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-black tracking-[-0.05em] uppercase flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-white group-hover:text-dubai-gold transition-colors duration-500">THE DUBAI</span>
          <span className="text-dubai-gold">MALL.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={cn(
                "text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-500 hover:text-dubai-gold px-2 py-1",
                activeSection === item.id ? "text-dubai-gold" : "text-white/40"
              )}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
            className="ml-4 px-10 py-4 bg-dubai-gold text-black font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)] flex items-center gap-3 group"
          >
            Lease Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        className="fixed inset-0 top-[72px] bg-black z-40 md:hidden flex flex-col items-center justify-center space-y-8"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="text-2xl uppercase tracking-widest text-white hover:text-dubai-gold"
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    </nav>
  );
}
