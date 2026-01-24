"use client";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            My Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Experience
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-gray-900 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-200 pl-8 space-y-14">

          {/* Item 1 */}
          <div className="relative">
            <span className="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full bg-gray-900" />

            <div className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition">
              <p className="text-sm text-gray-400 flex justify-end">
                2025 — Present
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frontend Developer 
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Building real-world frontend applications while focusing on
                clean UI, maintainable code, and modern development practices.
              </p>

              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Built responsive web applications using React and Next.js
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Implemented reusable component systems with Tailwind CSS
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Integrated animations and interactions using GSAP
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Built 2 full-scale frontend applications
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <span className="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full bg-gray-900" />

            <div className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition">
              <p className="text-sm text-gray-400 flex justify-end">
                Learning Phase
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frontend & UI Development
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Strengthened fundamentals and modern frontend concepts through
                continuous learning and hands-on experimentation.
              </p>

              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  JavaScript, TypeScript, and modern ES practices
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  UI/UX fundamentals, layout systems, and accessibility
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Version control with Git and GitHub workflows
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
