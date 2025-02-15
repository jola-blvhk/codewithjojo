"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSunFilled } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  const switchClasses = `flex items-center justify-center text-dark rounded-full transform ${
    isActive ? " text-purple-100 " : "text-white "
  } `;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div></div>;
  return (
    <div
      className={`relative grid content-center justify-center ${isActive ? "bg-p border border-gray-100" : "bg-purple-200"} w-12 h-12  rounded-full p-1 cursor-pointer `}
      onClick={toggleTheme}
    >
      <button className={switchClasses}>
        {isActive ? <FaMoon size={22} /> : <TbSunFilled size={30} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
