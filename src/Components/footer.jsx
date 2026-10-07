function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t px-6 py-8 ${
        darkMode
          ? "border-white/10"
          : "border-slate-200"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">

        {/* Copyright */}

        <p
          className={`text-sm ${
            darkMode
              ? "text-slate-500"
              : "text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} Muhammad Okasha.
          All rights reserved.
        </p>

        {/* Social Icons + Back to Top */}

        <div className="flex items-center gap-3">

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/muhammadokasha1861"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white ${
              darkMode
                ? "border-white/10 bg-white/[0.03] text-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/Okasha61"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white ${
              darkMode
                ? "border-white/10 bg-white/[0.03] text-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            <i className="fa-brands fa-github"></i>
          </a>

          {/* Back to Top */}

          <a
            href="#home"
            aria-label="Back to top"
            className={`flex h-10 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white ${
              darkMode
                ? "border-white/10 bg-white/[0.03] text-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            Back to Top ↑
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;