import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education({ darkMode }) {
  const sectionRef = useRef(null);

  const education = [
    {
      year: "2024 — Present",
      degree: "Diploma in ACCP (AI)",
      institute: "Aptech Learning",
      description:
        "Currently developing skills in AI, MERN Stack development,Wordpress development web technologies, Flutter App development and modern software development practices.",
    },
    {
      year: "2022 — 2024",
      degree: "Intermediate — Pre-Engineering",
      institute: "Army Public College",
      description:
        "Completed intermediate education with a focus on mathematics, physics, chemistry, and computer-related fundamentals.",
    },
      {
      year: "2020 - 2022",
      degree: "Matriculation (Science)",
      institute: "BAQAI CADET COLLEGE",
      description:
         "Completed Matriculation with Science subjects from a recognized board. Focused on Physics, Chemistry, Mathematics, and Computer Science which laid the foundation for technical education."    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".education-item");

    const animation = gsap.fromTo(
      items,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
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
      id="education"
      ref={sectionRef}
      className="px-6 py-28 sm:px-10 lg:px-20"
    >
      <div  className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="education-item mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Education
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            My academic
            <span className="gradient-text"> journey.</span>
          </h2>
        </div>

        {/* Education */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-indigo-500/30" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="education-item relative pl-12"
              >

                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-1 h-7 w-7 rounded-full border-4 border-indigo-500 ${
                    darkMode ? "bg-[#050505]" : "bg-slate-50"
                  }`}
                />

                {/* Year */}
                <span className="text-sm font-bold text-indigo-500">
                  {item.year}
                </span>

                {/* Degree */}
                <h3 className="mt-2 text-2xl font-bold">
                  {item.degree}
                </h3>

                {/* Institute */}
                <p
                  className={`mt-1 text-lg font-semibold ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {item.institute}
                </p>

                {/* Description */}
                <p
                  className={`mt-4 max-w-2xl leading-7 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;