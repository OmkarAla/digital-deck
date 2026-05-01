"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import StatsSection from "@/components/sections/StatsSection";
import LuxurySection from "@/components/sections/LuxurySection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import AttractionsSection from "@/components/sections/AttractionsSection";
import EventsModule from "@/components/modules/EventsModule";
import SponsorshipModule from "@/components/modules/SponsorshipModule";
import BrandFitSimulator from "@/components/BrandFitSimulator";
import LeasingModule from "@/components/modules/LeasingModule";
import CinematicIntro from "@/components/CinematicIntro";
import GlobalHub from "@/components/GlobalHub";
import ImmersiveView from "@/components/sections/ImmersiveView";

const slides = [
  { id: "Introduction", component: CinematicIntro },
  { id: "Strategic Hub", component: GlobalHub },
  { id: "Global Scale", component: StatsSection },
  { id: "Luxury Heritage", component: LuxurySection },
  { id: "Attractions", component: AttractionsSection },
  { id: "Immersive View", component: ImmersiveView },
  { id: "Event Platform", component: EventsModule },
  { id: "Sponsorship", component: SponsorshipModule },
  { id: "Brand Simulator", component: BrandFitSimulator },
  { id: "Ecosystem", component: EcosystemSection },
  { id: "Leasing Paths", component: LeasingModule },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const setSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setCurrentSlide(index);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, [isAnimating]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Wheel Navigation (Debounced to prevent jumping multiple slides)
  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout;
    
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      
      // Ignore wheel events if coming from a scrollable element internally (like the custom-scrollbar)
      const target = e.target as HTMLElement;
      if (target.closest('.custom-scrollbar') || target.closest('.overflow-y-auto')) {
        return;
      }

      if (e.deltaY > 50) {
        nextSlide();
        setIsAnimating(true);
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => setIsAnimating(false), 1200); // Wait for transition
      } else if (e.deltaY < -50) {
        prevSlide();
        setIsAnimating(true);
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => setIsAnimating(false), 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimating, nextSlide, prevSlide]);

  const ActiveComponent = slides[currentSlide].component;

  // Slide transition direction based on index change would be ideal, but for simplicity a clean fade-push works universally.
  return (
    <main className="bg-background w-screen h-screen overflow-hidden flex flex-col relative">
      
      <div className="flex-1 relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <ActiveComponent setSlide={setSlide} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* The Digideck Controller UI overlay handles Sidebar, Header, and Bottom Bar */}
      <Navigation 
        currentSlide={currentSlide} 
        setSlide={setCurrentSlide} 
        totalSlides={slides.length} 
        slides={slides} 
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </main>
  );
}
