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
    { scope: sectionRef }
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
          {/* Left: Animated Description */}
          <div className="space-y-6">
            <AnimatedText
              className="text-gray-600 leading-relaxed text-base"
              text="I’m a frontend developer specializing in React and Next.js, focused on building scalable and production-grade web applications. I translate structured UI/UX designs into responsive, accessible interfaces using modern CSS systems and TypeScript."
            />

            <AnimatedText
              className="text-gray-600 leading-relaxed text-base"
              text="My approach emphasizes maintainable component architecture, efficient state management, and performance optimization. When interaction enhances usability, I integrate motion using tools like GSAP and Three.js with purpose—not decoration."
            />
          </div>

          {/* Right Card */}
          <div className="reveal-card rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold mb-6 text-gray-900 text-lg">
              What I do
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Develop scalable frontend architectures using React, Next.js,
                and TypeScript
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Build reusable, component-driven UI systems
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Optimize performance and rendering efficiency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}