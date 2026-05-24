import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-black/5 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-12 xl:px-16 py-4">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-28 sm:w-36 md:w-40 h-auto"
            alt="Agency.ai logo"
          />
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-700 dark:text-white">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="#service" className="hover:text-blue-700 transition">
            Service
          </a>
          <a href="#our-work" className="hover:text-blue-700 transition">
            Our Work
          </a>
          <a href="#contact-us" className="hover:text-blue-700 transition">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <a
            href="#contact-us"
            className="hidden sm:flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm transition-all"
          >
            Connect
            <img src={assets.arrow_icon} className="w-3.5" alt="" />
          </a>

          <button
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden"
            aria-label="Open menu"
          >
            <img
              src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
              alt=""
              className="w-7"
            />
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-screen w-[78%] max-w-xs bg-blue-800 text-white px-6 py-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute right-5 top-5"
              aria-label="Close menu"
            >
              <img src={assets.close_icon} alt="" className="w-4" />
            </button>

            <div className="mt-16 flex flex-col gap-6 text-base">
              <a onClick={() => setSidebarOpen(false)} href="#home">
                Home
              </a>
              <a onClick={() => setSidebarOpen(false)} href="#service">
                Service
              </a>
              <a onClick={() => setSidebarOpen(false)} href="#our-work">
                Our Work
              </a>
              <a onClick={() => setSidebarOpen(false)} href="#contact-us">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;