import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { ArrowUpRight, Moon, Sun } from "../components/Icons";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const goTo = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <nav className="max-w-[1180px] mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700 rounded-2xl shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <button onClick={() => goTo("home")} className="flex items-center gap-2 cursor-pointer">
          <span className="font-bold text-neutral-900 dark:text-white hidden sm:block">
            Shayan Rezvani
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 dark:border-gray-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => goTo("contact")}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold pl-4 pr-2 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            Let's Collaborate
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 dark:border-gray-600 text-neutral-700 dark:text-neutral-200 cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="w-4 h-0.5 bg-current" />
              <span className="w-4 h-0.5 bg-current" />
              <span className="w-4 h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden max-w-[1180px] mx-auto mt-2 bg-white dark:bg-gray-800 border border-neutral-100 dark:border-gray-700 rounded-2xl shadow-lg p-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
