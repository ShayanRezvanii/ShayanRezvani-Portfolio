import { useEffect, useState } from "react";
import MoonIcon from "../assets/Icons/Moon.svg?react";
import SunIcon from "../assets/Icons/sun.svg?react";

function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // هنگام لود اولیه، از localStorage یا سیستم عامل بخونه
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="flex justify-end items-center px-4 w-full min-h-[104px]">
      <button
        onClick={toggleTheme}
        className="rounded-full cursor-pointer flex justify-center items-center h-14 w-14 border border-gray-300 shadow bg-white dark:bg-gray-800"
      >
        {theme === "dark" ? (
          <SunIcon className="text-yellow-400" />
        ) : (
          <MoonIcon className="text-gray-700" />
        )}
      </button>
    </div>
  );
}

export default Header;
