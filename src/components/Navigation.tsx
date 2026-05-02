"use client";

import { motion } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavigationProps {
  currentSlide: number;
  setSlide: (index: number) => void;
  totalSlides: number;
  slides: { id: string }[];
  nextSlide: () => void;
  prevSlide: () => void;
}

export default function Navigation({ currentSlide, setSlide, totalSlides, slides, nextSlide, prevSlide }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. TOP LEFT HAMBURGER MENU (Floating over content) */}
      <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-dubai-gold transition-colors p-2 bg-black/40 backdrop-blur-md rounded-sm border border-white/10"
        >
          {isOpen ? <X size={20} className="lg:w-6 lg:h-6" /> : <Menu size={20} className="lg:w-6 lg:h-6" />}
        </button>
      </div>

      {/* 2. DIGIDECK OFF-CANVAS COLLAPSIBLE SIDEBAR */}
      <motion.nav 
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-72 lg:w-80 h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] bg-black/95 backdrop-blur-3xl border-r border-white/10 flex flex-col justify-between py-10 lg:py-12 px-6 lg:px-8 z-[150] flex-shrink-0"
      >
        <div className="text-lg lg:text-xl font-black tracking-[-0.05em] uppercase flex flex-col gap-1 mt-8 lg:mt-12">
          <span className="text-white">THE DUBAI</span>
          <span className="text-dubai-gold">MALL.</span>
          <div className="h-[1px] w-10 lg:w-12 bg-dubai-gold/30 mt-4 lg:mt-6" />
        </div>

        <div className="flex flex-col gap-5 lg:gap-7 flex-1 justify-center overflow-y-auto custom-scrollbar mt-6 lg:mt-8 pr-2">
          <div className="text-[10px] lg:text-xs uppercase tracking-[0.5em] text-white/30 font-bold mb-3 lg:mb-4">Presentation Index</div>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setSlide(index);
                setIsOpen(false);
              }}
              className="group flex flex-col items-start text-left w-full"
            >
              <div className="flex items-center gap-3 lg:gap-4 w-full py-1">
                <span className={cn(
                  "text-xs lg:text-sm font-black tabular-nums transition-colors duration-500",
                  currentSlide === index ? "text-dubai-gold" : "text-white/20 group-hover:text-white/50"
                )}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={cn(
                  "text-[10px] lg:text-xs uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold transition-all duration-500 truncate",
                  currentSlide === index ? "text-white" : "text-white/30 group-hover:text-white/60"
                )}>
                  {slide.id}
                </span>
              </div>
              {currentSlide === index && (
                <motion.div layoutId="active-indicator" className="h-[1px] w-full bg-dubai-gold/50 mt-2 lg:mt-3" />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* 3. PERSISTENT BOTTOM PRESENTATION BAR */}
      <div className="fixed bottom-0 left-0 w-full h-[64px] lg:h-[80px] bg-black border-t border-white/10 z-[100] flex items-center justify-between px-6 lg:px-12 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">
        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 lg:gap-3 text-[10px] lg:text-sm uppercase tracking-[0.3em] font-bold text-white/70 hover:text-white disabled:opacity-30 disabled:hover:text-white/60 transition-colors py-4 lg:py-6 pr-4 lg:pr-6 cursor-pointer relative"
        >
          <ChevronLeft size={16} className="lg:w-5 lg:h-5" /> <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="text-[10px] lg:text-xs uppercase tracking-[0.3em] lg:tracking-[0.4em] font-black tabular-nums text-white/50 select-none">
          <span className="text-white"><span className="hidden sm:inline">Slide </span>{currentSlide + 1}</span> of {totalSlides}
        </div>

        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-2 lg:gap-3 text-[10px] lg:text-sm uppercase tracking-[0.3em] font-bold text-white/70 hover:text-white disabled:opacity-30 disabled:hover:text-white/60 transition-colors py-4 lg:py-6 pl-4 lg:pr-6 cursor-pointer relative"
        >
          <span className="hidden sm:inline">Next</span> <ChevronRight size={16} className="lg:w-5 lg:h-5" />
        </button>
      </div>
    </>
  );
}
