"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Svelte 5",
  "Tailwind CSS",
  "Zustand",
  "TanStack Query",
  "GSAP",
];

const expertise = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    number: "02",
    title: "UI Engineering",
    description:
      "Creating reusable components, implementing state management, and integrating REST APIs to build maintainable applications.",
  },
  {
    number: "03",
    title: "Cross-platform Development",
    description:
      "Developing desktop and Android applications using Svelte 5, SvelteKit, and Tauri 2.",
  },
];

function AnimatedText({ text, className }) {
  const words = text.split(/\s+/);

  return (
    <p className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={index}
          className="about-word inline-block"
          aria-hidden="true"
        >
          {word}
          {index !== words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header animation
        gsap.fromTo(
          ".about-header-item",
          {
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        // Statistics animation
        gsap.fromTo(
          ".about-stat",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-stats",
              start: "top 88%",
              once: true,
            },
          },
        );

        // Word reveal animation
        gsap.utils.toArray(".animated-copy").forEach((paragraph) => {
          const words = paragraph.querySelectorAll(".about-word");

          gsap.fromTo(
            words,
            {
              opacity: 0,
              y: 12,
              filter: "blur(5px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.65,
              stagger: 0.025,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        // Technology chips
        gsap.fromTo(
          ".tech-chip",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tech-list",
              start: "top 90%",
              once: true,
            },
          },
        );

        // Expertise card animation
        gsap.fromTo(
          ".expertise-item",
          {
            opacity: 0,
            x: 25,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".expertise-card",
              start: "top 85%",
              once: true,
            },
          },
        );

        // Bottom CTA animation
        gsap.fromTo(
          ".about-footer",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-footer",
              start: "top 95%",
              once: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-gray-50 px-5 py-24 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200/80 bg-white p-7 shadow-sm sm:p-10 md:p-14">
        {/* Header */}
        <div className="about-header mb-12 text-center md:mb-14">
          <p className="about-header-item mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Get to know me
          </p>

          <h2 className="about-header-item text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            About Me<span className="text-gray-400">.</span>
          </h2>

          <div className="about-header-item mx-auto mt-5 h-1 w-12 rounded-full bg-gray-900" />

          <p className="about-header-item mt-4 text-sm text-gray-500">
            A little about my journey and what I build.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column */}
          <div className="space-y-9">
            {/* Stats */}
            <div className="about-stats grid grid-cols-2 gap-3">
              <div className="about-stat rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  1+
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Years of Experience
                </p>
              </div>

              <div className="about-stat rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  React & Next
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Primary Expertise
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-5">
              <AnimatedText
                className="animated-copy text-[15px] leading-8 text-gray-600 sm:text-base"
                text="I'm a Frontend Developer with 1+ year of experience building modern web applications, primarily with React.js and Next.js. I also have hands-on experience with Svelte 5, SvelteKit, and Tauri 2, developing web, desktop, and Android applications."
              />

              <AnimatedText
                className="animated-copy text-[15px] leading-8 text-gray-600 sm:text-base"
                text="I enjoy turning ideas and UI/UX designs into functional, responsive interfaces. My work focuses on reusable components, state management, API integration, and creating intuitive user experiences with clean, maintainable code."
              />
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Technologies I Work With
                </p>
              </div>

              <div className="tech-list flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-chip rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="expertise-card rounded-2xl border border-gray-200 bg-[#F8F9FB] p-6 sm:p-8">
            {/* Card Header */}
            <div className="mb-8 flex items-center justify-between gap-3">
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-400">
                  My Capabilities
                </p>

                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  What I Do
                </h3>
              </div>

              <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-500">
                Expertise
              </span>
            </div>

            {/* Expertise List */}
            <div className="space-y-7">
              {expertise.map((item, index) => (
                <div
                  key={item.number}
                  className="expertise-item group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-xs font-bold text-gray-800 transition-all duration-300 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white">
                    {item.number}
                  </span>

                  <div className="flex-1 pt-0.5">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="about-footer mt-9 border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-900">
                Always learning. Always building.
              </p>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Exploring better ways to build meaningful digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            About / 01
          </p>

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            Frontend Developer
          </p>
        </div>
      </div>
    </section>
  );
}
