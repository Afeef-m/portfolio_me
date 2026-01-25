"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function CradleSwing({ direction = "left" }) {
  const cradleRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const angle = direction === "left" ? -12 : 12;

    gsap.to(cradleRef.current, {
      rotation: angle,
      duration: direction === "left" ? 2.8 : 3.2, 
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 0%",
    });
  }, [direction]);

  const imageSrc =
    direction === "left"
      ? "/assets/cradle-1.png"
      : "/assets/cradle-2.png";

  return (
    <div ref={cradleRef}>
      <Image
        src={imageSrc}
        alt=""
        width={160}
        height={160}
        draggable="false"
        priority={false}
      />
    </div>
  );
}
