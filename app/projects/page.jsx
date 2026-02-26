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
        "A full-stack e-commerce platform with role-based authentication, product management, and order tracking",
      stack: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      live: "https://pet-ecom-nine.vercel.app/",
    },
    {
      image: "/projects/movion.png",
      title: "Movie Ticket Booking App",
      description:
        "A movie ticket booking platform where users can browse movies, select showtimes, choose seats, and complete bookings with an interactive seat selection experience",
      stack: ["Next.js", "Tailwind", "TypeScript", "JSON Server"],
      live: "https://movieon-nine.vercel.app/",
    },
  ];

  return (
   <section
  id="projects"
  className="relative py-16 xs:py-20 sm:py-24 md:py-28 px-4 xs:px-5 sm:px-6 bg-linear-to-b from-slate-50 to-white"
>
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-20">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6">
        Featured Projects
      </h2>

      <div className="mx-auto mb-4 xs:mb-5 sm:mb-6 h-0.5 w-16 xs:w-20 sm:w-24 bg-gray-900 rounded-full" />

      <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
        These projects show how I think about frontend development, UI
        decisions, and real-world problem solving.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid gap-6 xs:gap-7 sm:gap-8 md:gap-10 md:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="group rounded-xl xs:rounded-2xl bg-white/80 backdrop-blur
             border border-gray-200 shadow-sm
             transition-all duration-300
             hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg sm:hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative w-full h-48 xs:h-52 sm:h-56 md:h-60 overflow-hidden rounded-t-xl xs:rounded-t-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </div>

          {/* Content */}
          <div className="p-4 xs:p-5 sm:p-6">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900">
              {project.title}
            </h3>

            <p className="text-gray-600 mt-2 xs:mt-3 text-xs xs:text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-3 xs:mt-4 flex flex-wrap gap-1.5 xs:gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-md bg-gray-100 text-gray-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Actions */}
            <div className="mt-4 xs:mt-5 sm:mt-6 flex gap-2 xs:gap-3">
              <Link
                href={project.live}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2
               rounded-lg bg-gray-900 text-white py-2 xs:py-2.5
               text-xs xs:text-sm font-medium
               hover:bg-gray-800 transition"
              >
                <span className="hidden xs:inline">Live Demo</span>
                <span className="xs:hidden">Demo</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Card */}
      <div className="md:col-span-2">
        <div
          className="relative overflow-hidden rounded-xl xs:rounded-2xl
                  bg-linear-to-br from-gray-900 to-black
                  p-6 xs:p-8 sm:p-10 md:p-12 text-center text-white"
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4 sm:mb-5">
            Have a project in mind?
          </h3>

          <p className="text-gray-300 mb-6 xs:mb-7 sm:mb-8 text-sm xs:text-base sm:text-lg max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mx-auto leading-relaxed">
            I{"'"}m always open to discussing new opportunities and meaningful
            projects. Let{"'"}s build something impactful together.
          </p>

          <div
            className="inline-flex flex-col xs:flex-row items-center gap-2 xs:gap-3 rounded-lg xs:rounded-xl
              bg-white px-4 xs:px-6 sm:px-8 py-3 xs:py-4
              text-gray-900 font-semibold text-sm xs:text-base
              hover:bg-gray-100 transition w-full xs:w-auto"
          >
            <p className="border-b xs:border-b-0 xs:border-r pb-2 xs:pb-0 xs:pr-3 xs:border-gray-200 leading-none whitespace-nowrap">
              Get In Touch
            </p>
            <p className="text-xs xs:text-sm text-gray-600 cursor-grabbing break-all xs:break-normal text-center xs:text-left">
              afeefmaliyekkal14@gmail.com
            </p>
          </div>

          {/* Decorative shape */}
          <div
            className="absolute -top-16 xs:-top-20 sm:-top-24 -right-16 xs:-right-20 sm:-right-24 
                    w-32 xs:w-40 sm:w-48 md:w-64 h-32 xs:h-40 sm:h-48 md:h-64
                    bg-white/10 rounded-full blur-2xl sm:blur-3xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
