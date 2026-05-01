"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, Target, Star, Cpu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = ["Luxury", "Fashion Retail", "Food & Beverage", "Entertainment", "Emerging Brand"];
const investments = [
  { id: "premium", label: "Premium (Flagship)", icon: Star, desc: "High visibility, maximum square footage" },
  { id: "mid", label: "Mid-Tier (Core)", icon: Target, desc: "Prime retail zones with balanced reach" },
  { id: "pop", label: "Experimental (Pop-up)", icon: Zap, desc: "High-impact short-term activations" },
];
const objectives = ["Brand Awareness", "Direct Sales", "Customer Experience", "Product Launch"];

export default function BrandFitSimulator({ setSlide }: { setSlide: (i: number) => void }) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    category: "",
    investment: "",
    objective: "",
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showProjection, setShowProjection] = useState(false);

  const handleSelect = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else analyzeResults();
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2000);
  };

  const toggleProjection = () => {
    setShowProjection(!showProjection);
  };

  const reset = () => {
    setStep(1);
    setSelections({ category: "", investment: "", objective: "" });
    setShowResult(false);
    setShowProjection(false);
  };

  return (
    <div className="scene-container !h-screen overflow-hidden">
       {/* Background Graphic */}
       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none grayscale">
          <Image src="/assets/simulator-bg.png" alt="Data Grid" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
       </div>

      <div className="relative z-10 max-w-[1700px] w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-16 h-full">
        {/* Left Side: Editorial Typography */}
        <div className="text-left w-full xl:w-[45%] flex-shrink-0 py-10">
          <div className="flex items-center justify-start gap-4 mb-10 overflow-hidden">
             <div className="h-[1px] w-12 bg-dubai-gold" />
             <span className="text-dubai-gold uppercase tracking-[0.6em] text-xs font-black italic">Cognitive Asset Mapping</span>
          </div>
          <h3 className="text-6xl md:text-8xl font-black uppercase tracking-[-0.06em] leading-[0.85] mb-10">
            PROJECT YOUR <br /> <span className="text-white/20 italic font-medium">LEGACY.</span>
          </h3>
          <p className="text-white/40 text-2xl font-light tracking-tight max-w-lg leading-relaxed">
             Our AI engine correlates 105M+ data points to identify the precise commercial node for your brand heritage.
          </p>
        </div>

        {/* Right Side: Interactive Panel */}
        <div className={cn(
          "glass-panel p-12 lg:p-16 w-full xl:w-[55%] h-[75vh] flex flex-col justify-between border border-white/5 relative transition-all duration-1000 overflow-hidden",
          showProjection ? "bg-black/90 border-dubai-gold/20" : ""
        )}>
          {!showResult && !isAnalyzing && (
            <div className="flex flex-col h-full justify-between">
              {/* Steps Indicator */}
              <div className="flex justify-between mb-16 w-full px-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-4 flex-1 relative">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-700",
                      step >= s ? "border-dubai-gold bg-dubai-gold text-black shadow-[0_0_30px_rgba(212,175,55,0.4)]" : "border-white/10 text-white/20"
                    )}>
                      {step > s ? <Check size={20} /> : <span className="text-xs font-black tracking-widest">{s}</span>}
                    </div>
                    <span className={cn(
                      "text-[9px] uppercase tracking-[0.4em] font-black",
                      step >= s ? "text-white" : "text-white/20"
                    )}>
                      {s === 1 ? "Sector" : s === 2 ? "Scale" : "Growth"}
                    </span>
                    {s < 3 && <div className={cn("absolute top-6 left-1/2 w-full h-[1px] -z-10", step > s ? "bg-dubai-gold/40" : "bg-white/5")} />}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                  >
                    {step === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleSelect("category", cat)}
                            className={cn(
                              "p-8 border text-left transition-all duration-700 group relative overflow-hidden",
                              selections.category === cat ? "border-dubai-gold bg-dubai-gold/5" : "border-white/5 hover:border-white/20"
                            )}
                          >
                            <div className={cn("text-lg font-black uppercase tracking-tight transition-all duration-500", selections.category === cat ? "text-white scale-105" : "text-white/30 group-hover:text-white")}>
                              {cat}
                            </div>
                            {selections.category === cat && <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-dubai-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]" />}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="grid grid-cols-1 gap-4 w-full">
                        {investments.map((inv) => {
                          const Icon = inv.icon;
                          return (
                            <button
                              key={inv.id}
                              onClick={() => handleSelect("investment", inv.id)}
                              className={cn(
                                "p-8 border text-left flex items-center gap-8 transition-all duration-700 group",
                                selections.investment === inv.id ? "border-dubai-gold bg-dubai-gold/5" : "border-white/5 hover:border-white/20"
                              )}
                            >
                              <Icon className={cn("transition-colors duration-500", selections.investment === inv.id ? "text-dubai-gold" : "text-white/20")} size={32} />
                              <div>
                                <div className={cn("text-xl font-black uppercase tracking-tighter transition-all duration-500", selections.investment === inv.id ? "text-white" : "text-white/40 group-hover:text-white")}>
                                  {inv.label}
                                </div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 mt-1 font-bold">{inv.desc}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {step === 3 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {objectives.map((obj) => (
                          <button
                            key={obj}
                            onClick={() => handleSelect("objective", obj)}
                            className={cn(
                              "p-8 border text-left transition-all duration-700 group flex justify-between items-center",
                              selections.objective === obj ? "border-dubai-gold bg-dubai-gold/5 text-white" : "border-white/5 text-white/40 hover:border-white/20 hover:text-white"
                            )}
                          >
                            <div className="text-xs font-black uppercase tracking-tighter">
                              {obj}
                            </div>
                            {selections.objective === obj && <Check size={20} className="text-dubai-gold" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                <button
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  className={cn("text-[10px] uppercase tracking-[0.4em] font-black transition-all", step === 1 ? "opacity-0 invisible" : "opacity-30 hover:opacity-100 hover:text-dubai-gold")}
                >
                  PREVIOUS
                </button>
                <div className="flex gap-2">
                   {[1, 2, 3].map(s => <div key={s} className={cn("w-1.5 h-1.5 rounded-full transition-colors", step >= s ? "bg-dubai-gold" : "bg-white/10")} />)}
                </div>
                <button
                  onClick={nextStep}
                  disabled={!((step === 1 && selections.category) || (step === 2 && selections.investment) || (step === 3 && selections.objective))}
                  className="px-10 py-5 bg-dubai-gold text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white transition-all disabled:opacity-20 flex items-center gap-4 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)]"
                >
                  {step === 3 ? "Run Inference" : "Continue"}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {isAnalyzing && (
             <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 h-full">
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border border-dubai-gold/20 border-t-dubai-gold rounded-full shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                     <Cpu size={24} className="text-dubai-gold" />
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black uppercase tracking-[0.3em] text-white">Aggregating Nodes</h4>
                  <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Generating Strategic Projection...</p>
                </div>
             </div>
          )}

          {showResult && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col h-full overflow-y-auto custom-scrollbar pr-4 justify-between"
            >
               <div className="flex flex-col xl:flex-row gap-12 items-stretch h-full">
                  <AnimatePresence mode="wait">
                    {showProjection ? (
                      <motion.div 
                        key="projection"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex-1 relative border border-dubai-gold/30 rounded-sm overflow-hidden min-h-[400px]"
                      >
                         <Image src="/assets/ai-projection.png" alt="AI Projection" fill className="object-cover" />
                         <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                         <div className="absolute bottom-8 left-8">
                            <div className="text-dubai-gold font-black text-[10px] uppercase tracking-[0.4em] mb-2 italic underline decoration-dubai-gold/30">AI Visual Interpretation</div>
                            <h6 className="text-3xl font-black uppercase tracking-tighter text-white">Flagship Concept Alpha</h6>
                         </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="results"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex-1 flex flex-col justify-center"
                      >
                         <div className="flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-8 bg-dubai-gold" />
                            <span className="text-dubai-gold uppercase tracking-[0.4em] text-[10px] font-black italic underline decoration-dubai-gold/30">Strategic Output: 0094-DM</span>
                         </div>
                         
                         <h5 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-[-0.05em] leading-[0.9] whitespace-pre-line">
                           {selections.category === 'Luxury' ? 'Fashion Avenue \n Strategic Node' : 'Grand Atrium \n Central Node'}
                         </h5>
                         
                         <p className="text-white/40 leading-relaxed font-light text-lg mb-10 tracking-tight">
                            AI Confidence: <span className="text-white font-bold">98.2%</span>. Based on targeting for {selections.objective}, this is the highest-velocity zone within the {selections.category} cluster.
                         </p>
                         
                         <div className="grid grid-cols-2 gap-6 min-h-0">
                            <div className="p-6 border border-white/5 bg-white/[0.02]">
                               <div className="text-dubai-gold font-black text-4xl tabular-nums tracking-tighter">118k+</div>
                               <div className="text-[9px] uppercase text-white/20 tracking-[0.3em] font-black mt-2">Daily Footfall</div>
                            </div>
                            <div className="p-6 border border-white/5 bg-white/[0.02]">
                               <div className="text-dubai-gold font-black text-4xl tabular-nums tracking-tighter">94%</div>
                               <div className="text-[9px] uppercase text-white/20 tracking-[0.3em] font-black mt-2">Sentiment Index</div>
                            </div>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {!showProjection && (
                    <div className="w-full xl:w-1/3 min-h-[250px] xl:min-h-0 relative overflow-hidden flex-shrink-0 border border-white/5 rounded-sm">
                       <Image src="/assets/simulator-bg.png" alt="Recommendation" fill className="object-cover contrast-125 brightness-50" />
                       <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="text-dubai-gold font-black text-[9px] uppercase tracking-[0.4em] mb-2">Spatial Context</div>
                          <div className="text-white font-black text-xl uppercase tracking-tighter">North Sector 04</div>
                       </div>
                    </div>
                  )}
               </div>

               <div className="flex flex-col md:flex-row gap-4 mt-8 pt-6 border-t border-white/5">
                  <button 
                    onClick={toggleProjection}
                    className="flex-1 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-dubai-gold transition-all shadow-[0_20px_60px_-10px_rgba(255,255,255,0.1)]"
                  >
                    {showProjection ? "View Strategic Data" : "View AI Visual Projection"}
                  </button>
                  <button className="flex-1 py-5 bg-dubai-gold text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white transition-all shadow-[0_20px_60px_-10px_rgba(212,175,55,0.4)]">
                    Request Analysis
                  </button>
                  <button onClick={reset} className="px-10 py-5 border border-white/10 text-white/30 hover:text-white uppercase text-[10px] tracking-[0.4em] transition-all font-black hover:border-white/20">
                    RESET
                  </button>
               </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
