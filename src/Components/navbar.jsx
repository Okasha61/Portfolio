import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Navbar({ darkMode, setDarkMode }) {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6"
    >
      <nav
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 shadow-2xl transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-white/[0.04]"
            : "border-slate-200 bg-white/80"
        }`}
      >
        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-black tracking-tight"
        >
          MO<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop */}

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-indigo-500 ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          {/* Theme */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-slate-100"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border md:hidden ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-slate-100"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            className={`absolute left-0 right-0 top-[75px] mx-1 rounded-2xl border p-4 md:hidden ${
              darkMode
                ? "border-white/10 bg-[#0b0b0b]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`rounded-xl px-4 py-3 transition-colors hover:bg-indigo-500 hover:text-white ${
                    darkMode
                      ? "text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;