import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects({ darkMode }) {
  const sectionRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "Trestep",
      category: "E-Commerce Website",
      description:
        "A full-stack footwear e-commerce platform with authentication, product browsing, cart, wishlist, orders and admin management.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      image: "/src/assets/Trestep.png",
      url: "https://trestep-shoes-store-pqta.vercel.app/",
    },
 ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-6 py-28 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Projects
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            Selected
            <span className="gradient-text"> work.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card group block overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-3 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:border-indigo-500/50"
                  : "border-slate-200 bg-white hover:border-indigo-500/50"
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative h-64 w-full overflow-hidden ${
                  darkMode ? "bg-black/40" : "bg-slate-100"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain  transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                {/* Project Number */}
                <span className="absolute left-5 top-5 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
                  {project.number}
                </span>

                {/* Visit Website */}
                <span className="absolute bottom-5 right-5 translate-y-3 rounded-lg bg-indigo-500 px-4 py-2 text-xs font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Visit Website ↗
                </span>
              </div>

              {/* Project Content */}
              <div className="p-7">
                {/* Title + Category */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold transition-colors group-hover:text-indigo-500">
                    {project.title}
                  </h3>

                  <span
                    className={`shrink-0 text-xs ${
                      darkMode
                        ? "text-slate-500"
                        : "text-slate-400"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mt-4 leading-7 ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                        darkMode
                          ? "bg-white/5 text-slate-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;