import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About({ darkMode }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".about-item");

    gsap.fromTo(
      elements,
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-28 sm:px-10 lg:px-20"
    >
      <div  className="mx-auto max-w-7xl">
        <div className="about-item mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            About Me
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            Building digital
            <span className="gradient-text"> experiences.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div
            className={`about-item rounded-3xl border p-8 ${
              darkMode
                ? "border-white/10 bg-white/[0.03]"
                : "border-slate-200 bg-white"
            }`}
          >
            <h3 className="mb-5 text-2xl font-bold">Who I Am</h3>

            <p
              className={`leading-8 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I'm a passionate developer focused on building modern and scalable
              digital solutions. I work with AI-powered MERN Stack technologies
              to create web applications, while also developing professional
              WordPress websites and cross-platform Flutter applications. I
              enjoy turning ideas into clean, functional, and user-friendly
              digital experiences.
            </p>
          </div>

          <div
            className={`about-item rounded-3xl border p-8 ${
              darkMode
                ? "border-white/10 bg-white/[0.03]"
                : "border-slate-200 bg-white"
            }`}
          >
            <h3 className="mb-5 text-2xl font-bold">My Approach</h3>

            <p
              className={`leading-8 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              My approach is centered around clean code, responsive design,
              reusable components, performance, and user experience. I focus on
              building reliable and scalable solutions while using modern
              technologies, smooth animations, and thoughtful interfaces to
              create digital products that are both professional and easy to
              use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
