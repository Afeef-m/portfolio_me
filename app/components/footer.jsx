"use client";
import { Github, Instagram, Linkedin } from "lucide-react";
import CradleSwing from "./cradleSwing";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 mt-12 xs:mt-16 sm:mt-20 overflow-hidden">
      {/* Decorative cradle swings */}
      <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute left-6 top-0 opacity-25">
          <CradleSwing direction="right" />
        </div>
        <div className="absolute right-6 top-0 opacity-25">
          <CradleSwing direction="left" />
        </div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 py-8 xs:py-10 sm:py-12">
        <div className="flex flex-col xs:flex-row items-center justify-between gap-6 xs:gap-4 sm:gap-6">
          {/* Left */}
          <div className="text-center xs:text-left">
            <p className="text-sm xs:text-base font-semibold text-gray-900">
              Afeef M
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Frontend Developer · React · Next.js
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-3 text-gray-500">
            <p className="text-sm text-gray-600">Let’s connect</p>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/afeef-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 hover:text-[#0A66C2] transition" />
              </a>
              <a
                href="https://wa.me/+918330052135?text=Hello%20I'm%20interested%20in%20your%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200
                           hover:scale-110 active:scale-95"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.instagram.com/afeef._.m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-[#E4405F] transition" />
              </a>
              <a
                href="https://github.com/Afeef-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 hover:text-gray-900 transition" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="text-center xs:text-right">
            <p className="text-xs text-gray-500 cursor-pointer">
              afeefmaliyekkal14@gmail.com
            </p>
            <p className="mt-6 text-xs text-gray-400">
              © {new Date().getFullYear()} Afeef M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
