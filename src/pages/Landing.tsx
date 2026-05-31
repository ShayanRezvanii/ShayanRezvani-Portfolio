import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import WorkProcess from "../sections/WorkProcess";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Contact from "../sections/Contact";

export default function Landing() {
  const location = useLocation();

  // When arriving with a hash (e.g. navigating back from a project page), scroll to it.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <WorkProcess />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
