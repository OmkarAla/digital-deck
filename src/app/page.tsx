"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import LuxurySection from "@/components/sections/LuxurySection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import AttractionsSection from "@/components/sections/AttractionsSection";
import EventsModule from "@/components/modules/EventsModule";
import SponsorshipModule from "@/components/modules/SponsorshipModule";
import BrandFitSimulator from "@/components/BrandFitSimulator";
import LeasingModule from "@/components/modules/LeasingModule";
import CinematicIntro from "@/components/CinematicIntro";

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      
      <section id="intro"><CinematicIntro /></section>
      <section id="stats"><StatsSection /></section>
      <section id="ecosystem"><EcosystemSection /></section>
      <section id="luxury"><LuxurySection /></section>
      <section id="attractions"><AttractionsSection /></section>
      <section id="events"><EventsModule /></section>
      <section id="sponsorship"><SponsorshipModule /></section>
      <section id="simulator"><BrandFitSimulator /></section>
      <section id="leasing" className="min-h-screen"><LeasingModule /></section>

      <footer className="scene-container !min-h-0 py-32 bg-black border-t border-white/5 items-center text-center">
        <div className="text-4xl font-black tracking-[-0.05em] uppercase mb-12">
          <span className="text-white">THE DUBAI</span>
          <span className="text-dubai-gold ml-2">MALL.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-16 text-[9px] uppercase tracking-[0.5em] text-white/40 mb-20 font-bold">
          <a href="#hero" className="hover:text-dubai-gold transition-all duration-500">Overview</a>
          <a href="#ecosystem" className="hover:text-dubai-gold transition-all duration-500">Scale</a>
          <a href="#luxury" className="hover:text-dubai-gold transition-all duration-500">Luxury</a>
          <a href="#events" className="hover:text-dubai-gold transition-all duration-500">Events</a>
          <a href="#leasing" className="hover:text-dubai-gold transition-all duration-500">Partnerships</a>
        </div>
        
        <div className="w-20 h-[1px] bg-dubai-gold/20 mb-12 mx-auto" />
        
        <div className="space-y-4">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-medium">
            A Strategic Vision of Global Excellence
          </p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/10">
            © 2026 Emaar Properties PJSC. Confidential Sales Deck.
          </p>
        </div>
      </footer>
    </main>
  );
}
