import React from "react";
import assets from "../assets/assets";
import Title from "../components/Title";
import { motion } from "framer-motion";

const Service = () => {
  const serviceData = [
    {
      title: "AI Automation",
      description:
        "Automate repetitive workflows, customer support and internal business operations using AI systems.",
      icon: assets.ads_icon,
    },

    {
      title: "Website Development",
      description:
        "Modern responsive websites designed for speed, premium branding and high conversion.",
      icon: assets.marketing_icon,
    },

    {
      title: "Content Strategy",
      description:
        "AI-assisted content systems that help your business scale visibility and engagement.",
      icon: assets.content_icon,
    },

    {
      title: "Social Media Growth",
      description:
        "Build a powerful online presence with strategic campaigns and AI-powered audience insights.",
      icon: assets.social_icon,
    },
  ];

  return (
    <section
      id="service"
      className="relative w-full overflow-x-hidden px-4 sm:px-8 lg:px-16 xl:px-24 py-20 text-gray-700 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        <img
          src={assets.bgImage2}
          alt=""
          className="absolute hidden lg:block -top-40 -left-44 -z-10 opacity-70 dark:hidden"
        />

        <Title
          title="AI Services Built For Modern Brands"
          desc="From websites to intelligent automation, we create digital systems that help businesses grow faster and work smarter."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt=""
                  className="w-7"
                />
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-white/65">
                {service.description}
              </p>

              <button className="mt-6 text-sm font-semibold text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-all">
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Planner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-[#5044E5] to-[#4d8cea] p-8 sm:p-10 text-white overflow-hidden relative"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[3px] text-white/70">
              Agency.ai Planner
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Plan your next AI-powered project in minutes.
            </h2>

            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
              Get a personalized recommendation for your business including
              website type, automation systems and growth strategy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <select className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none backdrop-blur-md">
                <option>Choose Business Type</option>
                <option>E-commerce</option>
                <option>Agency</option>
                <option>Startup</option>
                <option>Restaurant</option>
              </select>

              <select className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none backdrop-blur-md">
                <option>Select Goal</option>
                <option>Lead Generation</option>
                <option>Automation</option>
                <option>Branding</option>
                <option>Website Redesign</option>
              </select>

              <button className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 text-sm font-semibold transition-all">
                Generate Plan
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Service;