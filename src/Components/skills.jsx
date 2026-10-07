import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGreensock,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiFlutter,
  SiDart,
  SiFirebase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

function Skills({ darkMode }) {
  const sectionRef = useRef(null);

  const skills = [
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: SiCss,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "GSAP",
      icon: SiGreensock,
      color: "#88CE02",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "#7952B3",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: darkMode ? "#FFFFFF" : "#111827",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "WordPress",
      icon: SiWordpress,
      color: "#21759B",
    },
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "#02569B",
    },
    {
      name: "Dart",
      icon: SiDart,
      color: "#0175C2",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const icons = section.querySelectorAll(".skill-icon");

    const animation = gsap.fromTo(
      icons,
      {
        y: 25,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="px-6 py-24 sm:px-10 lg:px-20"
    >
      <div  className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Skills
          </p>

          <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">
            My technical
            <span className="gradient-text"> toolkit.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 sm:grid-cols-4 sm:gap-x-12 sm:gap-y-20 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-24">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="skill-icon group relative flex items-center justify-center"
              style={{
                "--icon-color": color,
              }}
            >

              {/* Original Technology Icon */}
              <Icon
                style={{ color }}
                className="
                  cursor-pointer
                  text-5xl
                  transition-all
                  duration-300
                  ease-out
                  group-hover:scale-125
                  sm:text-6xl
                "
              />

              {/* Technology Name */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  text-base
                  font-semibold
                  opacity-0
                  transition-all
                  duration-300
                  ease-out
                  group-hover:-bottom-9
                  group-hover:opacity-100
                "
                style={{ color }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;