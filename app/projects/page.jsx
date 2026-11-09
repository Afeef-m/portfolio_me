"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const webProjects = [
  {
    image: "/projects/naaf.png",
    title: "Naaf Glamoria",
    subtitle: "Jewellery E-commerce",
    description:
      "A jewellery e-commerce platform featuring product and category management, admin authentication, and a dedicated dashboard for managing store content.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    live: "https://naaf-glamoria-two.vercel.app/en",
    status: "Full-Stack Project",
    featured: true,
  },
  {
    image: "/projects/stadium.png",
    title: "ArenaOps",
    subtitle: "Stadium Management Platform",
    description:
      "A stadium ticket booking platform featuring interactive SVG seat mapping, event management, and dynamic seat selection.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", ".NET"],
    live: "https://arenaops.netlify.app/",
    status: "Featured Project",
  },
  {
    image: "/projects/movion.png",
    title: "Movion",
    subtitle: "Movie Ticket Booking",
    description:
      "Explore movies, browse showtimes, select seats through an interactive layout, and book tickets online.",
    stack: ["Next.js", "React", "TypeScript", "Razorpay"],
    live: "https://movieon-nine.vercel.app/",
    status: "Featured Project",
  },
  {
    image: "/projects/pet-store.png",
    title: "Pet Plus",
    subtitle: "Pet E-commerce",
    description:
      "An online pet store featuring product browsing, shopping cart functionality, and product management.",
    stack: ["React.js", "Bootstrap", "JSON Server"],
    live: "https://pet-ecom-nine.vercel.app/",
    status: "Frontend Project",
  },
  {
    image: "/projects/car-accessories.png",
    title: "Car Accessories Store",
    subtitle: "Professional E-commerce Project",
    description:
      "Developing responsive e-commerce interfaces, reusable components, and REST API integration for a car accessories platform.",
    stack: ["Svelte 5", "SvelteKit", "REST API"],
    live: null,
    status: "Professional Work",
  },
];

const mobileProjects = [
  {
    image: "/projects/reading-app-mobile.png",
    title: "Digital Reading App",
    subtitle: "Interactive Reading Experience",
    description:
      "An Android reading application featuring interactive page-flip navigation and an engaging digital reading experience.",
    stack: ["Svelte 5", "SvelteKit", "Tauri 2"],
    status: "Android Application",
  },
  {
    image: "/projects/alphabet-app-mobile.png",
    title: "Alphabet Learning App",
    subtitle: "Interactive Learning Experience",
    description:
      "An educational Android application featuring interactive alphabet learning and creative coloring activities for children.",
    stack: ["Svelte 5", "Tauri 2"],
    status: "Android Application",
  },
];

function ProjectLink({ live }) {
  if (!live) {
    return (
      <span className="text-xs font-medium text-gray-400">
        Professional project
      </span>
    );
  }

  return (
    <Link
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-gray-500"
    >
      View Live Project
      <span>↗</span>
    </Link>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Section headings
        gsap.fromTo(
          ".project-heading",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".project-heading",
              start: "top 85%",
              once: true,
            },
          },
        );

        // Web project cards
        gsap.fromTo(
          ".web-project",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".web-projects-grid",
              start: "top 85%",
              once: true,
            },
          },
        );

        // Mobile project cards
        gsap.fromTo(
          ".mobile-project",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".mobile-projects-grid",
              start: "top 85%",
              once: true,
            },
          },
        );

        // CTA
        gsap.fromTo(
          ".projects-cta",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".projects-cta",
              start: "top 90%",
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
      id="projects"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white px-5 py-24 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Main Header */}
        <div className="project-heading mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            My Recent Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            Featured Projects<span className="text-gray-400">.</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gray-900" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            A collection of web and mobile applications showcasing my
            development experience and problem-solving skills.
          </p>
        </div>

        {/* ================================= */}
        {/* WEB DEVELOPMENT PROJECTS */}
        {/* ================================= */}

        <div className="mb-24">
          <div className="project-heading mb-8 flex items-end justify-between border-b border-gray-200 pb-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                01 / Web Development
              </p>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Web Projects
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Websites, platforms and digital experiences.
              </p>
            </div>

            <span className="hidden text-sm text-gray-400 sm:block">
              {webProjects.length} Projects
            </span>
          </div>

          {/* Bento Grid */}
          <div className="web-projects-grid grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
            {webProjects.map((project, index) => (
              <article
                key={project.title}
                className={`web-project group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-gray-100 ${
                    project.featured
                      ? "h-56 sm:h-80 md:h-105"
                      : "h-52 sm:h-60"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes={
                      project.featured
                        ? "(max-width: 768px) 100vw, 1200px"
                        : "(max-width: 768px) 100vw, 600px"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-700 shadow-sm backdrop-blur-md">
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`p-5 sm:p-7 ${project.featured ? "md:p-9" : ""}`}
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div className="max-w-xl">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                        {project.subtitle}
                      </p>

                      <h4 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {project.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-gray-500">
                        {project.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <ProjectLink live={project.live} />
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-[11px] font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="project-heading mb-8 flex items-end justify-between border-b border-gray-200 pb-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                02 / Mobile Development
              </p>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Mobile Applications
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Cross-platform Android application experiences.
              </p>
            </div>

            <span className="hidden text-sm text-gray-400 sm:block">
              {mobileProjects.length} Apps
            </span>
          </div>

          {/* Mobile App Grid */}
          <div className="mobile-projects-grid grid gap-6 md:grid-cols-2 md:gap-8">
            {mobileProjects.map((project) => (
              <article
                key={project.title}
                className="mobile-project group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid grid-cols-[0.85fr_1fr] items-center gap-3 p-4 sm:gap-6 sm:p-7">
                  {/* Phone Mockup */}
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-38.75 rounded-[28px] border-[5px] border-gray-900 bg-gray-900 p-1 shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-2 sm:max-w-45">
                      {/* Camera / Speaker */}
                      <div className="absolute left-1/2 top-7px z-20 h-3 w-12 -translate-x-1/2 rounded-full bg-gray-900" />

                      {/* Screen */}
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[20px] bg-gray-100">
                        <Image
                          src={project.image}
                          alt={`${project.title} Android app screenshot`}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Project Details */}
                  <div className="min-w-0 py-3">
                    <span className="mb-3 inline-block rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-gray-500 sm:text-[10px]">
                      {project.status}
                    </span>

                    <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:text-xs">
                      {project.subtitle}
                    </p>

                    <h4 className="text-base font-bold leading-tight text-gray-900 sm:text-xl">
                      {project.title}
                    </h4>

                    <p className="mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-gray-100 px-2 py-1 text-[9px] font-medium text-gray-600 sm:text-[10px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-[10px] font-medium uppercase tracking-wider text-gray-400">
                      Android Application
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects-cta relative overflow-hidden rounded-2xl bg-gray-950 px-6 py-12 text-center text-white sm:px-10 sm:py-16">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Have an idea?
            </p>

            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              {"Let's Build Something Together."}
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              {
                "I'm open to frontend development opportunities, collaborations, and interesting projects."
              }
            </p>

            <a
              href="mailto:afeefmaliyekkal14@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              Get In Touch <span>↗</span>
            </a>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
