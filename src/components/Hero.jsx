import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24 text-gray-700 dark:text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-3 py-2 mb-6"
        >
          <img
            className="w-16 sm:w-20"
            src={assets.group_profile}
            alt=""
          />
          <p className="text-[11px] sm:text-sm font-medium">
            Trusted by 10k+ people
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-semibold leading-tight max-w-5xl text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
        >
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-500 dark:text-white/70 leading-relaxed"
        >
          Creating meaningful connections and transforming bold ideas into
          immersive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-12 w-full flex justify-center"
        >
          <img
            src={assets.hero_img}
            alt=""
            className="w-full max-w-6xl object-contain"
          />

          <img
            src={assets.bgImage1}
            alt=""
            className="absolute hidden sm:block -top-40 -right-40 lg:-top-72 lg:-right-52 -z-10 opacity-80 dark:hidden"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;