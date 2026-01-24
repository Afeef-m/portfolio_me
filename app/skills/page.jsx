"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", src: "/skills/html.svg" },
  { name: "CSS", src: "/skills/css.svg" },
  { name: "JavaScript", src: "/skills/javascript.svg" },
  { name: "TypeScript", src: "/skills/typescript.svg" },
  { name: "React", src: "/skills/react.svg" },
  { name: "Redux", src: "/skills/redux.svg" },
  { name: "Next.js", src: "/skills/nextjs.svg" },
  { name: "GSAP", src: "/skills/gsap.svg" },
  { name: "Three.js", src: "/skills/threejs.svg" },
  { name: "Tailwind CSS", src: "/skills/tailwind.svg" },
  { name: "Bootstrap", src: "/skills/bootstrap.svg" },
  { name: "Vite", src: "/skills/vite.svg" },
  { name: "GitHub", src: "/skills/github.svg" },
  { name: "Figma", src: "/skills/figma.svg" },
  { name: "Vercel", src: "/skills/vercel.svg" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".skill-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="skills-header text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Skills
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-gray-900 rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            I enjoy crafting aesthetic, scalable user experiences using modern
            frontend architecture and tools.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item group flex flex-col items-center gap-3"
            >
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-900 transition">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
