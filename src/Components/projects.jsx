
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import trestepImage from "../assets/Trestep.png";

gsap.registerPlugin(ScrollTrigger);

function Projects({ darkMode }) {
  const sectionRef = useRef(null);

  // Website Projects
  const websiteProjects = [
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
      image: trestepImage,
      url: "https://trestep-shoes-store-pqta.vercel.app/",
      buttonText: "Visit Website",
    },
  ];

  // Application Projects
  const appProjects = [
    // Add your applications here.
    // Example:
    // {
    //   number: "01",
    //   title: "Book Store App",
    //   category: "Flutter Application",
    //   description: "A Flutter application...",
    //   tech: ["Flutter", "Dart", "Firebase"],
    //   image: appImage,
    //   url: "YOUR_APP_LINK",
    //   buttonText: "View Application",
    // },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Reusable Project Card
  const renderProjects = (projects, type) => {
    if (projects.length === 0) {
      return (
        <div
          className={`col-span-full rounded-3xl border border-dashed p-12 text-center ${
            darkMode
              ? "border-white/10 bg-white/[0.02]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl text-indigo-500">
            <i
              className={`fa-solid ${
                type === "website"
                  ? "fa-globe"
                  : "fa-mobile-screen-button"
              }`}
            />
          </div>

          <h3 className="text-xl font-bold">
            {type === "website"
              ? "Websites Coming Soon"
              : "Applications Coming Soon"}
          </h3>

          <p
            className={`mt-3 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            New projects will be added here soon.
          </p>
        </div>
      );
    }

    return projects.map((project) => (
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
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

          {/* Project Number */}
          <span className="absolute left-5 top-5 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
            {project.number}
          </span>

          {/* Visit Project */}
          <span className="absolute bottom-5 right-5 translate-y-3 rounded-lg bg-indigo-500 px-4 py-2 text-xs font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {project.buttonText} ↗
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
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              {project.category}
            </span>
          </div>

          {/* Description */}
          <p
            className={`mt-4 leading-7 ${
              darkMode ? "text-slate-400" : "text-slate-600"
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
    ));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-6 py-28 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Portfolio
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            Selected
            <span className="gradient-text"> work.</span>
          </h2>

          <p
            className={`mt-5 max-w-2xl leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Explore my websites and applications, built with modern
            technologies and a focus on functionality and user experience.
          </p>
        </div>

        {/* Website Projects */}
        <div className="mb-20">
          <div className="mb-9 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-500">
              <i className="fa-solid fa-globe" />
            </div>

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Websites
              </h3>

              <p
                className={`mt-1 text-sm ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Web development projects
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {renderProjects(websiteProjects, "website")}
          </div>
        </div>

        {/* Application Projects */}
        <div>
          <div className="mb-9 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-500">
              <i className="fa-solid fa-mobile-screen-button" />
            </div>

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Applications
              </h3>

              <p
                className={`mt-1 text-sm ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Mobile and desktop application projects
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {renderProjects(appProjects, "app")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
