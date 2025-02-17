"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSunFilled } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import useSound from "use-sound";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isActive = theme === "light";
  const toggleSfx = "/sounds/click.mp3";

  // Use sound hook
  const [play] = useSound(toggleSfx, { volume: 2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div></div>;

  const toggleTheme = () => {
    setTheme(isActive ? "dark" : "light");
    play(); // Play toggle sound
  };

  return (
    <div
      className={`relative w-16 h-10 flex items-center bg-gray-300 dark:bg-purple-100 rounded-full p-1 cursor-pointer transition-all`}
      onClick={toggleTheme}
    >
      {/* Sun Icon (Light Mode) */}
      <FaMoon
        className="absolute left-2 text-black transition-all duration-300"
        size={18}
      />

      {/* Toggle Ball */}
      <div
        className={`w-6 h-6 bg-white dark:bg-purple-200 rounded-full shadow-md transform transition-all duration-300 
          ${isActive ? "translate-x-8" : "translate-x-0"}
        `}
      ></div>

      {/* Moon Icon (Dark Mode) */}
      <TbSunFilled
        className="absolute right-2 text-white transition-all duration-300"
        size={18}
      />
    </div>
  );
};

export default ThemeToggle;
