import { useEffect, useRef } from "react";
import gsap from "gsap";

function Loader({ setLoading }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.5,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    )
      .fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      )
      .to(progressRef.current, {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.3,
        onComplete: () => {
          setLoading(false);
        },
      });

    return () => tl.kill();
  }, [setLoading]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white"
    >
      <div className="w-[85%] max-w-md text-center">
        <div
          ref={logoRef}
          className="mb-6 text-5xl font-black tracking-widest sm:text-7xl"
        >
          MO<span className="text-indigo-500">.</span>
        </div>

        <p
          ref={textRef}
          className="mb-5 text-xs uppercase tracking-[0.35em] text-slate-400 sm:text-sm"
        >
          Muhammad Okasha — Portfolio
        </p>

        <div className="h-[2px] w-full overflow-hidden bg-slate-800">
          <div
            ref={progressRef}
            className="h-full w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;