import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Loader from "./Components/loader";
import Home from "./Components/home";
import About from "./Components/about";
import Education from "./Components/education";
import Experience from "./Components/experience";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}

      {!loading && (
        <div
          className={`min-h-screen transition-colors duration-500 ${
            darkMode
              ? "bg-[#050505] text-white"
              : "bg-slate-50 text-slate-900"
          }`}
        >
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <main>
            <Home darkMode={darkMode} />

            <About darkMode={darkMode} />

            <Education darkMode={darkMode} />

            <Experience darkMode={darkMode} />

            <Skills darkMode={darkMode} />

            <Projects darkMode={darkMode} />

            <Contact darkMode={darkMode} />
          </main>

          <Footer darkMode={darkMode} />
        </div>
      )}
    </>
  );
}

export default App;