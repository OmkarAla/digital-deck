"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let isSnapping = false;
    let snapTimeout: NodeJS.Timeout;

    const snapToNearestSection = () => {
      if (isSnapping) return;
      
      const sections = document.querySelectorAll("section[id]");
      let nearestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          nearestSection = section;
        }
      });

      if (nearestSection && minDistance > 10) {
        isSnapping = true;
        lenis.scrollTo(nearestSection, {
          duration: 1.2,
          easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, // Smooth cubic-in-out
          onComplete: () => {
             isSnapping = false;
          }
        });
      }
    };

    lenis.on('scroll', () => {
      clearTimeout(snapTimeout);
      if (!isSnapping) {
        snapTimeout = setTimeout(snapToNearestSection, 400); // 400ms delay after scroll stop
      }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(snapTimeout);
    };
  }, []);

  return <>{children}</>;
}
