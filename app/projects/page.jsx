"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const projects = [
    {
      image: "/projects/pet-store.png",
      title: "Pet E-Commerce App",
      description:
        "An e-commerce platform with admin and user roles, product management, and order tracking.",
      stack: ["React", "Bootstrap", "JSON Server"],
      gitHub: "https://github.com/Afeef-m/pet-ecom",
      live: "https://pet-ecom-nine.vercel.app/",
    },
    {
      image: "/projects/movion.png",
      title: "Movie Ticket Booking App",
      description:
        "A movie ticket booking application that allows users to browse movies, select showtimes, choose seats, and complete bookings with a smooth user experience.",
      stack: ["React", "Next.js", "Tailwind", "TypeScript", "JSON Server"],
      gitHub: "https://github.com/Afeef-m/movieon",
      live: "https://movieon-psi.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-linear-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>

          <div className="mx-auto mb-6 h-0.5 w-24 bg-gray-900 rounded-full" />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            These projects show how I think about frontend development, UI
            decisions, and real-world problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group rounded-2xl bg-white/80 backdrop-blur
             border border-gray-200 shadow-sm
             transition-all duration-300
             hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <Link
                    href={project.gitHub}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2
               rounded-lg border border-gray-300 py-2.5
               text-sm font-medium text-gray-700
               hover:bg-gray-50 transition"
                  >
                    GitHub
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2
               rounded-lg bg-gray-900 text-white py-2.5
               text-sm font-medium
               hover:bg-gray-800 transition"
                  >
                    Live Demo →
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-2">
            <div
              className="relative overflow-hidden rounded-2xl
                  bg-linear-to-br from-gray-900 to-black
                  p-12 text-center text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Have a project in mind?
              </h3>

              <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                I’m always open to discussing new opportunities and meaningful
                projects. Let’s build something impactful together.
              </p>

              <a
                href="mailto:afeefmaliyekkal14@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl
                 bg-white px-8 py-4
                 text-gray-900 font-semibold
                 hover:bg-gray-100 transition"
              >
                Get In Touch
                <span className="text-sm text-gray-600">
                  afeefmaliyekkal14@gmail.com
                </span>
              </a>

              {/* Decorative shape */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64
                    bg-white/10 rounded-full blur-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
