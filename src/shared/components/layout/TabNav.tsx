import { NavLink } from "react-router-dom";
import HomeIcon from "../../../assets/Icons/Home.svg?react";
import ResumeIcon from "../../../assets/Icons/Resume.svg?react";
import WorkIcon from "../../../assets/Icons/Work.svg?react";
import ContactIcon from "../../../assets/Icons/Contact.svg?react";

type TabNavProps = {
  onClicked?: (clicked: boolean) => void; // NEW
};

const tabs = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/resume", label: "Resume", icon: ResumeIcon },
  { to: "/work", label: "Works", icon: WorkIcon },
  { to: "/contact", label: "Contact", icon: ContactIcon },
];

export default function TabNav({ onClicked }: TabNavProps) {
  const handleClick = () => {
    onClicked?.(true);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex h-25 w-full justify-end items-end">
        <div className="w-full max-w-[503px] flex gap-10 bg-[#F2F7FC] dark:bg-gray-800 px-8 py-2 border border-[#d5dde5] dark:border-gray-800 rounded-[20px] shadow">
          {tabs.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={handleClick} // NEW
              className={({ isActive }) =>
                `h-20 w-20 flex flex-col gap-1 justify-center items-center rounded-[20px] cursor-pointer transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF9C1B] to-[#EC1B09] text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-[#1A1003] dark:text-white"
                }`
              }
            >
              <Icon className="w-6 h-6" />
              <p className="text-sm">{label}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden backdrop-blur-lg z-40 fixed bottom-0 left-0 w-full bg-[#F2F7FC]/30 dark:bg-gray-800/30 border-t border-gray-300 dark:border-gray-700 flex justify-around rounded-t-2xl py-4 shadow-lg">
        {tabs.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            onClick={handleClick} // NEW
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-[#EC1B09]" : "text-gray-600 dark:text-gray-300"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}
