"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, ArrowUpRight, Code2 } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function LandingPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.fromTo(
          ".hero-label",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
        )
          .fromTo(
            ".hero-name",
            {
              opacity: 0,
              y: 45,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
            },
            "-=0.2",
          )
          .fromTo(
            ".hero-role",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.5",
          )
          .fromTo(
            ".hero-description",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7 },
            "-=0.35",
          )
          .fromTo(
            ".hero-actions",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3",
          );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-24 sm:px-8"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-100/70 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Intro Label */}
        <div className="hero-label mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <Code2 size={14} className="text-gray-500" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
            Frontend Developer
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-name w-full select-none text-center text-[clamp(4rem,13vw,10rem)] font-black leading-[0.85] tracking-[-0.075em] text-transparent bg-linear-to-b from-gray-400 via-gray-800 to-black bg-clip-text">
          AFEEF M<span className="text-gray-400">.</span>
        </h1>

        {/* Role */}
        <h2 className="hero-role mt-7 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
          Building Digital Experiences
        </h2>

        {/* Description */}
        <p className="hero-description mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 md:text-lg">
          Frontend Developer specializing in{" "}
          <span className="font-semibold text-gray-900">
            React.js and Next.js
          </span>
          , with additional experience in Svelte 5 and Tauri 2. Passionate about
          creating responsive interfaces and meaningful digital experiences.
        </p>

        {/* Primary Actions */}
        <div className="hero-actions mt-9 flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-lg"
          >
            View Projects
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/afeef-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50"
          >
            <Linkedin size={17} />
            LinkedIn
          </Link>

          <Link
            href="https://github.com/Afeef-m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50"
          >
            <Github size={17} />
            GitHub
          </Link>
        </div>

        {/* Bottom Label */}
        <div className="hero-actions mt-16 flex items-center gap-3">
          <span className="h-px w-8 bg-gray-300" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            Design · Develop · Create
          </p>

          <span className="h-px w-8 bg-gray-300" />
        </div>
      </div>
    </main>
  );
}
