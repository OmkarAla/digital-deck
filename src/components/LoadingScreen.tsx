"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Cinematic Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dubai-gold/10 border-t-dubai-gold/60 rounded-full"
        />
        
        <div className="flex flex-col items-center gap-4">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-dubai-gold font-black text-2xl tracking-[0.4em] uppercase"
           >
             EMAAR
           </motion.div>
           <div className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">
             Global Sales Platform
           </div>
        </div>
      </div>

      <div className="absolute bottom-20 flex flex-col items-center gap-6">
         <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              className="absolute inset-0 bg-dubai-gold/40"
            />
         </div>
         <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
            Initializing Strategic Assets // {progress}%
         </div>
      </div>
    </motion.div>
  );
}
