"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        ref={barRef}
        className="h-full w-0 bg-gray-900"
      />
    </div>
  );
}
