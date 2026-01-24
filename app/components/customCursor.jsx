"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-dot");
    const follower = document.querySelector(".cursor-follower");

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover interaction
    const hoverTargets = document.querySelectorAll("a, button");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 1.6, duration: 0.3 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-follower" />
    </>
  );
}
