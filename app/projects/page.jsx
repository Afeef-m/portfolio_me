"use client"

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
        }
      );
    });
  }, []);

  
  const projects = [
    {
      image: "/projects/pet-store.png",
      title: "Pet E-Commerce App",
      description:
        "An e-commerce platform with admin and user roles, product management, and order tracking.",
      stack: "React • Bootstrap • JSON Server",
      gitHub: "https://github.com/Afeef-m/pet-ecom",
      live: "https://pet-ecom-nine.vercel.app/",
    },
    {
      image: "/projects/movion.png",
      title: "Movie Ticket Booking App",
      description:
        "A movie ticket booking application that allows users to browse movies, select showtimes, choose seats, and complete bookings with a smooth user experience.",
      stack: "React • Next.js • Tailwind • TypeScript • JSON Server",
      gitHub: "https://github.com/Afeef-m/movieon",
      live: "https://movieon-psi.vercel.app/",
    },
  ];

  return (
     <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.split(" • ").map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href={project.gitHub}
                  target="_blank"
                  className="flex-1 text-center rounded-lg border border-gray-300 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  GitHub
                </Link>

                <Link
                  href={project.live}
                  target="_blank"
                  className="flex-1 text-center rounded-lg bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
