import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience({ darkMode }) {
  const sectionRef = useRef(null);

  const experiences = [
    {
      year: "March 2026 - June 2026",
      title: "WordPress Developer Intern",
      company: "KGT Global",
      text: "Developed and customized responsive WordPress websites based on project requirements. Worked extensively with Elementor Pro to create and customize website pages and sections. Built and customized websites using Divi 4 and Divi 5. Worked with WooCommerce for website and e-commerce functionality. Customized layouts, sections, headers, footers, buttons, forms, and other website elements. Implemented responsive designs to ensure websites worked properly across desktop, tablet, and mobile devices. Fixed layout, styling, responsiveness, and other website-related issues. Followed client/project requirements to create clean, user-friendly, and visually consistent websites.",
    },
  ];

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-6 py-28 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Experience
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            My professional
            <span className="gradient-text"> journey.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-indigo-500/30" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div key={index} className="timeline-item relative pl-12">
                <div className="absolute left-0 top-1 h-7 w-7 rounded-full border-4 border-indigo-500 bg-black" />

                <span className="text-sm font-bold text-indigo-500">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

                <p className="mt-1 font-medium">{item.company}</p>

                <p
                  className={`mt-4 max-w-2xl leading-7 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
