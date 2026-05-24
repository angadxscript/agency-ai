import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-black/85 backdrop-blur-xl shadow-md"
            : "bg-white dark:bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">

          <a href="#home" className="shrink-0">
            <img
              src={theme === "dark" ? assets.logo_dark : assets.logo}
              alt="Agency.ai"
              className="w-28 sm:w-36 md:w-40"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-white">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>

            <a href="#service" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#our-work" className="hover:text-blue-600 transition">
              Projects
            </a>

            <a href="#contact-us" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">

            <ThemeToggleBtn theme={theme} setTheme={setTheme} />

            <a
              href="#contact-us"
              className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              Start Project
              <img src={assets.arrow_icon} alt="" className="w-3.5" />
            </a>

            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden"
            >
              <img
                src={
                  theme === "dark"
                    ? assets.menu_icon_dark
                    : assets.menu_icon
                }
                alt=""
                className="w-7"
              />
            </button>

          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-[999] bg-black/50 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-2xl px-6 py-6 overflow-y-auto"
            >

              <div className="flex items-center justify-between mb-10">

                <img
                  src={theme === "dark" ? assets.logo_dark : assets.logo}
                  alt=""
                  className="w-28"
                />

                <button onClick={() => setSidebarOpen(false)}>
                  <img
                    src={assets.close_icon}
                    alt=""
                    className="w-4"
                  />
                </button>

              </div>

              <div className="flex flex-col gap-7 text-base font-medium">

                <a
                  href="#home"
                  onClick={() => setSidebarOpen(false)}
                >
                  Home
                </a>

                <a
                  href="#service"
                  onClick={() => setSidebarOpen(false)}
                >
                  Services
                </a>

                <a
                  href="#our-work"
                  onClick={() => setSidebarOpen(false)}
                >
                  Projects
                </a>

                <a
                  href="#contact-us"
                  onClick={() => setSidebarOpen(false)}
                >
                  Contact
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;