"use client";
import Link from "next/link";
import "./home.css";
import { Github, Linkedin } from "lucide-react";
import Globe from "../components/globe";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex justify-center items-center text-center px-4 sm:px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-20 sm:opacity-40 pointer-events-none">
        <Globe />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Afeef M
        </h1>

        <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
          Frontend Developer
        </h2>

        <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed">
          Frontend developer focused on building responsive and user-friendly
          interfaces with React, Next.js, and Tailwind CSS.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium text-sm sm:text-base"
          >
            View Projects
          </Link>

          <Link
            href="https://www.linkedin.com/in/afeef-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black transition-all duration-300 font-medium text-sm sm:text-base flex items-center gap-2"
          >
            <Linkedin />
            LinkedIn
          </Link>

          <Link
            href="https://github.com/Afeef-m"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium text-sm sm:text-base flex items-center gap-2"
          >
            <Github />
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
