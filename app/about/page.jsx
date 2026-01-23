"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-gray-600 max-w-3xl leading-relaxed">
        I’m a frontend developer focused on building clean, responsive,
        and user-friendly web applications. I enjoy turning complex
        requirements into intuitive interfaces using modern frontend
        technologies.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-2">
            What I do
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Build responsive UI with React & Next.js</li>
            <li>• Create reusable, scalable components</li>
            <li>• Focus on performance and accessibility</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Currently focused on
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Advanced React patterns</li>
            <li>• Clean UI/UX design systems</li>
            <li>• Animation with GSAP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
