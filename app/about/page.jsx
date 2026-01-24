"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-sm p-8 md:p-14">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Introduction
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-16 bg-gray-900 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid gap-14 md:grid-cols-2 items-start">

          {/* Left: Description */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-base">
              I’m a frontend developer who cares deeply about how products
              actually feel to use. I enjoy breaking down complex ideas and
              transforming them into clean, responsive interfaces using
              modern tools like <span className="font-medium text-gray-900">React</span> and{" "}
              <span className="font-medium text-gray-900">Next.js</span>.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              My focus is on writing maintainable code, making thoughtful UI
              decisions, and building experiences that remain simple even as
              the logic grows. When motion adds real value, I enhance interfaces
              with tools like <span className="font-medium text-gray-900">GSAP</span> and{" "}
              <span className="font-medium text-gray-900">Three.js</span>.
            </p>
          </div>

          {/* Right: What I do */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold mb-6 text-gray-900 text-lg">
              What I do
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Build responsive interfaces with React and Next.js that work
                seamlessly across devices
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Design reusable component systems that scale as projects grow
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                Pay close attention to performance, accessibility, and clean UI
                behavior
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
