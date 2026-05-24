import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-x-hidden px-4 sm:px-8 lg:px-16 xl:px-24 pt-16 pb-10 sm:pt-24 sm:pb-16 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-full px-3 py-2 mb-6 shadow-sm"
        >
          <img className="w-14 sm:w-18 md:w-20" src={assets.group_profile} alt="" />
          <p className="text-[11px] sm:text-sm text-gray-600 dark:text-white/75">
            Trusted by founders, creators and growing brands
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-5xl font-semibold leading-[1.08] tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
        >
          Build smarter digital systems with{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Agency.ai
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-500 dark:text-white/70 leading-relaxed"
        >
          We design websites, automation flows and AI-powered customer journeys
          that help businesses look premium, move faster and convert better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#contact-us"
            className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all text-center"
          >
            Start a Project
          </a>

          <a
            href="#ai-tools"
            className="w-full sm:w-auto border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-all text-center"
          >
            Try AI Planner
          </a>
        </motion.div>

        <motion.div
          id="ai-tools"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            ["AI Strategy", "Get a clear plan for your brand, website or product."],
            ["Automation", "Reduce manual work with smart workflows."],
            ["Growth Design", "Turn visitors into leads with better UX."]
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 text-left shadow-sm"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-white/65 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="relative mt-12 w-full flex justify-center"
        >
          <img
            src={assets.hero_img}
            alt="Agency.ai dashboard preview"
            className="w-full max-w-5xl object-contain rounded-2xl"
          />

          <img
            src={assets.bgImage1}
            alt=""
            className="absolute hidden sm:block -top-32 -right-32 lg:-top-60 lg:-right-40 -z-10 opacity-70 dark:hidden"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;