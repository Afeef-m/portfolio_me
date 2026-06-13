"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AnimatedText({ text, className }) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block word opacity-0 blur-sm"
          style={{ marginRight: "6px" }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Blur text reveal
        gsap.from(".blur-text", {
          scrollTrigger: {
            trigger: ".blur-text",
            start: "top 80%",
          },
          opacity: 0,
          filter: "blur(10px)",
          y: 40,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        });
        // Blur word reveal
        gsap.to(".word", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          z: 0,
          rotateX: 0,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(".reveal-card", {
          scrollTrigger: {
            trigger: ".reveal-card",
            start: "top 85%",
          },
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 px-6 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-sm p-8 md:p-14">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="blur-text text-sm uppercase tracking-widest text-gray-400 mb-3">
            Introduction
          </p>

          <h2 className="blur-text text-4xl sm:text-5xl font-bold text-gray-900">
            About Me
          </h2>

          <div className="mt-4 mx-auto h-0.5 w-16 bg-gray-900 rounded-full" />
        </div>

        <div className="grid gap-14 md:grid-cols-2 items-start">
          {/* Left: Description */}
          <div className="space-y-6">
            <AnimatedText
              className="text-gray-600 leading-relaxed text-base"
              text="I'm a Frontend Developer with experience building modern web, desktop, and Android applications using React.js, Next.js, Svelte 5, and Tauri 2. I enjoy transforming ideas and wireframes into fast, responsive, and user-friendly products."
            />

            <AnimatedText
              className="text-gray-600 leading-relaxed text-base"
              text="My focus is on creating scalable component architectures, integrating APIs, managing application state, and delivering production-ready experiences. I continuously explore new technologies and prioritize clean code, performance, and maintainability in every project."
            />
          </div>

          {/* Right Card */}
          <div className="reveal-card rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold mb-6 text-gray-900 text-lg">
              What I Do
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Build modern web applications with React.js, Next.js,
                TypeScript, and Tailwind CSS
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Develop desktop and Android applications using Svelte 5 and
                Tauri 2
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Create reusable UI systems, integrate APIs, and optimize
                performance for production environments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
