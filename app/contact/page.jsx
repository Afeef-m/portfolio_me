"use client";

import { useRef } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const email = "afeefmaliyekkal14@gmail.com";

const socials = [
  {
    name: "LinkedIn",
    username: "Connect professionally",
    href: "https://www.linkedin.com/in/afeef-m/",
    icon: Linkedin,
    hover: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    username: "Explore my code",
    href: "https://github.com/Afeef-m",
    icon: Github,
    hover: "hover:text-gray-950",
  },
  {
    name: "Instagram",
    username: "Follow my updates",
    href: "https://www.instagram.com/afeef._.m/",
    icon: Instagram,
    hover: "hover:text-[#E4405F]",
  },
  {
    name: "WhatsApp",
    username: "Send me a message",
    href: "https://wa.me/918330052135",
    icon: MessageCircle,
    hover: "hover:text-[#25D366]",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".contact-animate",
          {
            opacity: 0,
            y: 25,
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".contact-content",
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
      id="contact"
      className="bg-gray-50 px-5 py-24 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="contact-content mb-14 text-center sm:mb-16">
          <p className="contact-animate mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Get In Touch
          </p>

          <h2 className="contact-animate text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            {"Let's Connect"}
            <span className="text-gray-400">.</span>
          </h2>

          <div className="contact-animate mx-auto mt-5 h-1 w-14 rounded-full bg-gray-900" />

          <p className="contact-animate mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            {
              " Have an opportunity, an interesting idea, or just want to connect? I'd love to hear from you."
            }
          </p>
        </div>

        {/* Main Card */}
        <div className="contact-content contact-animate overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="p-7 text-center sm:p-12 md:p-16">
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>

              <span className="text-xs font-medium text-green-700">
                Open to collaborations & interesting projects
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              Have a project in mind?
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              {
                "I'm interested in frontend development roles, collaborations, and building meaningful digital products. Let's discuss how we can work together. "
              }
            </p>

            {/* Email CTA */}
            <div className="mt-9 flex flex-col items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-lg sm:w-auto"
              >
                <Mail size={18} />
                Send Me an Email
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={`mailto:${email}`}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                {email}
              </a>
            </div>

            {/* Divider */}
            <div className="mx-auto my-10 flex max-w-sm items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Or connect with me
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Social Links */}
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name}: ${social.username}`}
                    className={`group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm ${social.hover}`}
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="text-center">
                      <p className="text-xs font-semibold text-gray-800">
                        {social.name}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-400">
                        {social.username}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row sm:px-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
              Open to collaborations &amp; interesting projects
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
              Designed & Developed by Afeef
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
