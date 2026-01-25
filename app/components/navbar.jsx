"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%" },
        {
          y: "0%",
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-end px-6">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-gray-900 text-2xl font-light"
        >
          {/* ☰ */}
          <Menu/>
        </button>
      </header>

      {/* Fullscreen Menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-white flex flex-col"
        >
          {/* Close */}
          <div className="h-16 flex items-center justify-end px-6">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-2xl"
            >
              {/* ✕ */}
              <X/>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl sm:text-4xl font-semibold text-gray-900 hover:opacity-60 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
