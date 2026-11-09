"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const experiences = [
  {
    period: "May 2026 — Present",
    role: "Junior Frontend Developer",
    company: "Bedrock Foundry",
    location: "Kozhikode, Kerala",
    current: true,
    description:
      "Working on modern web and cross-platform applications using Svelte 5 and SvelteKit, focusing on responsive interfaces, reusable components, and API integration.",
    achievements: [
      "Developed responsive frontend interfaces for a car accessories e-commerce platform using Svelte 5 and SvelteKit.",
      "Developed cross-platform Android applications, including an interactive digital reading app with page-flip navigation and an alphabet learning app with coloring activities.",
      "Designed high-fidelity UI/UX prototypes for a smartwatch health-monitoring research application, covering onboarding, Bluetooth pairing, health dashboards, and ECG visualization.",
      "Contributed to frontend architecture and interaction planning for a smartwatch Android application using SvelteKit and Tauri 2.",
    ],
    technologies: [
      "Svelte 5",
      "SvelteKit",
      "Tauri 2",
      "TypeScript",
      "REST APIs",
      "Excalidraw",
    ],
  },
  {
    period: "April 2025 — April 2026",
    role: "Frontend Developer Intern",
    company: "Bridgeon Skillversity",
    location: "Malappuram, Kerala",
    current: false,
    description:
      "Built responsive web applications using React.js and Next.js, developing reusable UI components and integrating APIs to deliver dynamic user experiences.",
    achievements: [
      "Developed responsive web applications using React.js and Next.js with reusable component-based architecture.",
      "Translated UI/UX wireframes into responsive, cross-browser compatible interfaces using Tailwind CSS, HTML5, and JavaScript.",
      "Integrated REST APIs and managed asynchronous data flows for dynamic application experiences.",
      "Collaborated in Agile/Scrum workflows, contributing to debugging, performance optimization, and feature delivery.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header animation
        gsap.fromTo(
          ".experience-header-item",
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
              trigger: ".experience-header",
              start: "top 85%",
              once: true,
            },
          },
        );

        // Timeline animation
        gsap.fromTo(
          ".experience-card",
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".experience-timeline",
              start: "top 85%",
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
      id="experience"
      className="bg-gray-50 px-5 py-24 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="experience-header mb-14 text-center sm:mb-16">
          <p className="experience-header-item mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            My Professional Journey
          </p>

          <h2 className="experience-header-item text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            Experience<span className="text-gray-400">.</span>
          </h2>

          <div className="experience-header-item mx-auto mt-5 h-1 w-14 rounded-full bg-gray-900" />

          <p className="experience-header-item mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            {
              " My professional journey, the products I've worked on, and the experience I've gained along the way."
            }
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute bottom-8 left-2.25 top-2 w-px bg-gray-200 sm:left-2.75" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((item) => (
              <article
                key={item.company}
                className="experience-card relative pl-9 sm:pl-14"
              >
                {/* Timeline Dot */}
                <span
                  className={`absolute left-0 top-7 z-10 h-4.75 w-4.75 rounded-full border-[5px] border-gray-50 ${
                    item.current ? "bg-gray-900" : "bg-gray-400"
                  }`}
                />

                {/* Card */}
                <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  {/* Top Section */}
                  <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                          {item.period}
                        </span>

                        {item.current && (
                          <span className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Current Position
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-gray-600">
                        {item.company}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {item.location}
                      </p>
                    </div>

                    <span className="hidden rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs font-medium text-gray-400 sm:inline-block">
                      {item.current ? "02 / Present" : "01 / Previous"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-7">
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Key Contributions
                    </h4>

                    <ul className="space-y-4">
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[10px] font-semibold text-gray-600">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="text-sm leading-7 text-gray-600">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 border-t border-gray-100 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Technologies & Tools
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-[11px] font-medium text-gray-600 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 border-t border-gray-200 pt-7 text-center">
          <p className="text-sm text-gray-500">
            Every experience is an opportunity to learn, build, and grow.
          </p>
        </div>
      </div>
    </section>
  );
}
