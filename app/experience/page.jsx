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
          {/* Item 1 - Current */}
          <div className="relative">
            <span className="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full bg-gray-900" />

            <div className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition">
              <p className="text-sm text-gray-400 flex justify-end">
                May 2026 — Present
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Junior Frontend Developer – Bedrock Foundry
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Developing cross-platform desktop and Android applications using
                Svelte 5 and Tauri 2, with a focus on responsive interfaces,
                reusable components, and interactive user experiences.
              </p>

              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Built and maintained Android and desktop applications using
                  Svelte 5 and Tauri 2
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Developed a digital reading platform with interactive
                  page-flip navigation and touch-friendly user interactions
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Created reusable UI components and responsive layouts
                  optimized for multiple screen sizes
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Designed product wireframes and user flows using Excalidraw
                  for upcoming business applications
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <span className="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full bg-gray-900" />

            <div className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition">
              <p className="text-sm text-gray-400 flex justify-end">
                Apr 2025 — Apr 2026
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frontend Developer Intern – Bridgeon Skillversity
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Built responsive web applications using React.js and Next.js,
                focusing on reusable components, API integration, and modern
                frontend development practices.
              </p>

              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Developed responsive web applications using React.js and
                  Next.js
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Translated UI/UX wireframes into pixel-perfect interfaces
                  using Tailwind CSS and modern JavaScript
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Integrated REST APIs and managed asynchronous data flows for
                  dynamic user experiences
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Collaborated in Agile teams on feature development, debugging,
                  and sprint delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
