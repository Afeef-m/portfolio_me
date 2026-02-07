"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Let’s Talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Contact
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-gray-900 rounded-full" />
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white border border-gray-200 p-10 sm:p-14 text-center shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Have a project or opportunity in mind?
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            I’m always open to discussing frontend roles, freelance work, or
            interesting product ideas. Feel free to reach out — I usually
            respond within a day.
          </p>

          <div className="text-sm text-gray-500">
            email me directly at:-{" "}
            <span className="font-medium text-gray-900 cursor-grabbing">
              afeefmaliyekkal14@email.com
            </span>
          </div>

          <div className="my-10 flex items-center max-w-xs mx-auto text-gray-400">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-3 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="mt-6 flex justify-center gap-6 text-gray-500">
            <a
              href="https://linkedin.com/in/afeef-m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-all duration-200
           hover:text-[#0A66C2] hover:scale-110 active:scale-95"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/8330052135?text=Hello%20I'm%20interested%20in%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
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
              className="text-gray-500 transition-all duration-200
             hover:text-[#E4405F] hover:scale-110 active:scale-95"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Afeef-m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-all duration-200
             hover:text-gray-900 hover:scale-110 active:scale-95"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
