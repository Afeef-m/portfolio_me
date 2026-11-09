
"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import CradleSwing from "./cradleSwing";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-12 xs:mt-16 sm:mt-20 overflow-hidden border-t border-gray-200">
      {/* Decorative cradle swings */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden md:block">
        <div className="absolute left-6 top-0 opacity-25">
          <CradleSwing direction="right" />
        </div>
        <div className="absolute right-6 top-0 opacity-25">
          <CradleSwing direction="left" />
        </div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 xs:px-5 sm:px-6 py-8 xs:py-10 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-7 xs:flex-row xs:gap-4 sm:gap-6">

          {/* Left */}
          <div className="text-center xs:text-left">
            <p className="text-sm xs:text-base font-semibold text-gray-900">
              Afeef M
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Frontend Developer · React.js · Next.js · Svelte 5
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-gray-600">Let&apos;s connect</p>

            <div className="flex items-center gap-5 text-gray-500">
              <a
                href="https://linkedin.com/in/afeef-m"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-200 hover:-translate-y-1 hover:text-[#0A66C2]"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="https://wa.me/918330052135"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-all duration-200 hover:-translate-y-1"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={19}
                  height={19}
                />
              </a>

              <a
                href="https://www.instagram.com/afeef._.m/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-200 hover:-translate-y-1 hover:text-[#E4405F]"
              >
                <Instagram size={19} />
              </a>

              <a
                href="https://github.com/Afeef-m"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-200 hover:-translate-y-1 hover:text-gray-900"
              >
                <Github size={19} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="text-center xs:text-right">
            <a
              href="mailto:afeefmaliyekkal14@gmail.com"
              className="inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-gray-900"
            >
              <Mail size={13} />
              afeefmaliyekkal14@gmail.com
            </a>

            <p className="mt-4 text-xs text-gray-400">
              © {new Date().getFullYear()} Afeef M. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
