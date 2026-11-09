
"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categories = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building modern and responsive web applications.",
    skills: [
      { name: "HTML", src: "/skills/html.svg" },
      { name: "CSS", src: "/skills/css.svg" },
      { name: "JavaScript", src: "/skills/javascript.svg" },
      { name: "TypeScript", src: "/skills/typescript.svg" },
      { name: "React.js", src: "/skills/react.svg" },
      { name: "Next.js", src: "/skills/nextjs.svg" },
      { name: "Svelte 5", src: "/skills/svelte.svg" },
    ],
  },
  {
    number: "02",
    title: "State & Data Management",
    description: "Managing application state and server data.",
    tags: [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Context API",
      "REST API Integration",
    ],
  },
  {
    number: "03",
    title: "UI & Animation",
    description: "Creating engaging interfaces and interactions.",
    skills: [
      { name: "Tailwind CSS", src: "/skills/tailwind.svg" },
      { name: "Bootstrap", src: "/skills/bootstrap.svg" },
      { name: "GSAP", src: "/skills/gsap.svg" },
      { name: "Three.js", src: "/skills/threejs.svg" },
      { name: "Figma", src: "/skills/figma.svg" },
    ],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    description: "Development tools and deployment workflows.",
    skills: [
      { name: "GitHub", src: "/skills/github.svg" },
      { name: "Vite", src: "/skills/vite.svg" },
      { name: "Vercel", src: "/skills/vercel.svg" },
    ],
    tags: ["Git", "GitLab", "npm", "Android Studio", "Tauri 2", "SvelteKit"],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".skills-header-item",
          {
            opacity: 0,
            y: 25,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".skills-header",
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".skill-category",
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".skills-grid",
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".skill-icon-item",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".skills-grid",
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-gray-50 px-5 py-24 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="skills-header mb-14 text-center sm:mb-16">

          <p className="skills-header-item mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            My Technical Expertise
          </p>

          <h2 className="skills-header-item text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            Skills & Technologies<span className="text-gray-400">.</span>
          </h2>

          <div className="skills-header-item mx-auto mt-5 h-1 w-14 rounded-full bg-gray-900" />

          <p className="skills-header-item mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and tools I use to build responsive,
            scalable, and interactive digital experiences.
          </p>

        </div>

        {/* Skills Categories */}
        <div className="skills-grid grid gap-5 sm:grid-cols-2 sm:gap-6">

          {categories.map((category) => (

            <div
              key={category.number}
              className="skill-category group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >

              {/* Category Header */}
              <div className="mb-7 flex items-start justify-between">

                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Category {category.number}
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                    {category.description}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                  {category.number}
                </span>

              </div>

              {/* Technology Icons */}
              {category.skills && (
                <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4">

                  {category.skills.map((skill) => (

                    <div
                      key={skill.name}
                      className="skill-icon-item group/item flex flex-col items-center gap-3"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:border-gray-300 group-hover/item:bg-white group-hover/item:shadow-sm">

                        <div className="relative h-8 w-8">
                          <Image
                            src={skill.src}
                            alt={skill.name}
                            fill
                            sizes="32px"
                            className="object-contain"
                          />
                        </div>

                      </div>

                      <span className="text-center text-[11px] font-medium text-gray-500 transition-colors group-hover/item:text-gray-900">
                        {skill.name}
                      </span>

                    </div>

                  ))}

                </div>
              )}

              {/* Additional Technology Tags */}
              {category.tags && (
                <div className="flex flex-wrap gap-2">

                  {category.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      {tag}
                    </span>

                  ))}

                </div>
              )}

            </div>

          ))}

        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-gray-200 pt-7 text-center">

          <p className="text-sm text-gray-500">
            Always exploring new technologies and improving my development skills.
          </p>

        </div>

      </div>
    </section>
  );
}
