"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LandingAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.timeline({
      repeat: -1,        
      yoyo: true,        
      repeatDelay: 0,    
    }).fromTo(
      ".dot",
      {
        scale: 0.3,
        opacity: 0.6,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.6,
        ease: "sine.inOut",   
        stagger: {
          amount: 2,       
          grid: "auto",
          from: "edges",    
        },
      }
    );
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={containerRef}
      className="grid grid-cols-12 gap-4 "
    >
      {Array.from({ length: 120 }).map((_, i) => (
        <div
          key={i}
          className="dot bg-linear-to-b from-emerald-200 to-green-300 rounded-full "
        />
      ))}
    </div>
  );
}
