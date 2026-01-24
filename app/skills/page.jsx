"use client";

import Image from "next/image";

const skills = [
  { name: "HTML", src: "/skills/html.svg" },
  { name: "CSS", src: "/skills/css.svg" },
  { name: "JavaScript", src: "/skills/javascript.svg" },
  { name: "TypeScript", src: "/skills/typescript.svg" },
  { name: "React", src: "/skills/react.svg" },
  { name: "Redux", src: "/skills/redux.svg" },
  { name: "Next.js", src: "/skills/nextjs.svg" },
  { name: "GSAP", src: "/skills/gsap.svg" },
  { name: "Three.js", src: "/skills/threejs.svg" },
  { name: "Tailwind CSS", src: "/skills/tailwind.svg" },
  { name: "Bootstrap", src: "/skills/bootstrap.svg" },
  { name: "Vite", src: "/skills/vite.svg" },
  { name: "GitHub", src: "/skills/github.svg" },
  { name: "Figma", src: "/skills/figma.svg" },
  { name: "Vercel", src: "/skills/vercel.svg" },
//   { name: "Render", src: "/skills/render.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white ">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Skills
          </h2>
          <div className=" mx-auto h-0.5 w-16 bg-gray-900 rounded-full" />
          <p className="text-lg text-gray-300 ">
            I enjoy crafting aesthetic, scalable user experiences using modern
            frontend architecture and tools.
          </p>
        </div>

        <div className="relative border-l border-gray-200 pl-8 space-y-14">


        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative w-14 h-14 ">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-white transition">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        </div>

      </div>
    </section>
  );
}
