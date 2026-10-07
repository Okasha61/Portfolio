import { useEffect, useRef } from "react";
import gsap from "gsap";
import okashapng from "../assets/okasha.png";

function Home({ darkMode }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
    )
      .fromTo(
        descRef.current,
        {
          x: -70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5",
      )
      .fromTo(
        buttonsRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.4",
      )
      .fromTo(
        imageRef.current,
        {
          scale: 0.7,
          opacity: 0,
          x: 100,
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8",
      );

    gsap.to(imageRef.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => tl.kill();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-20"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-[-100px] top-[15%] h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Text */}

        <div ref={titleRef}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl lg:text-8xl">
            Muhammad
            <br />
            <span className="gradient-text">Okasha.</span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
            (AI)MERN Stack Developer
            <span className="text-indigo-500"> & </span>
            WordPress Developer
            <span className="text-indigo-500"> & </span>
            Flutter App Developer
          </h2>

          <p
            ref={descRef}
            className={`mt-6 max-w-xl text-base leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I build modern, high-performance web applications with AI-powered
            MERN Stack development, along with professional WordPress websites
            and Flutter applications designed for seamless user experiences.
          </p>

          {/* Buttons */}

          <div ref={buttonsRef} className="mt-9 flex flex-wrap gap-4">
            {/* View Projects */}

            <a
              href="#projects"
              className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              View Projects
            </a>

            {/* Contact Me */}

            <a
              href="#contact"
              className={`rounded-xl border px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-white/15 hover:border-indigo-500"
                  : "border-slate-300 hover:border-indigo-500"
              }`}
            >
              Contact Me
            </a>

            {/* Download CV */}

            <a
              href="/cv.pdf"
              download="Muhammad-Okasha-CV.pdf"
              className="rounded-xl border border-indigo-500/40 px-6 py-3.5 font-semibold text-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}

        <div
          ref={imageRef}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-8 rounded-full bg-indigo-600/20 blur-[80px]" />

          <div
            className={`relative overflow-hidden rounded-[2rem] border p-3 ${
              darkMode
                ? "border-white/10 bg-white/[0.03]"
                : "border-slate-200 bg-white"
            }`}
          >
            <img
              src={okashapng}
              alt="Muhammad Okasha"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;