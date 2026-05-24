import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const OurWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const workData = [
    {
      title: "AI Lead Generation System",
      description:
        "A smart landing page and lead capture flow built for service businesses.",
      image: assets.work_mobile_app,
      stack: "React, Tailwind CSS, AI Workflow",
      timeline: "2 weeks",
      result: "Improved lead capture and customer enquiry flow.",
    },
    {
      title: "Business Automation Dashboard",
      description:
        "A clean dashboard for tracking campaigns, customers and performance.",
      image: assets.work_dashboard_management,
      stack: "React, Vite, Analytics UI",
      timeline: "3 weeks",
      result: "Simplified business operations with real-time visibility.",
    },
    {
      title: "Fitness Brand Growth Platform",
      description:
        "A responsive digital experience built for a fitness coaching brand.",
      image: assets.work_fitness_app,
      stack: "React, Tailwind CSS, Responsive UI",
      timeline: "10 days",
      result: "Premium brand presence with better mobile experience.",
    },
  ];

  return (
    <section
      id="our-work"
      className="w-full overflow-x-hidden px-4 sm:px-8 lg:px-16 xl:px-24 py-20 text-gray-700 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <Title
          title="Project Showcase"
          desc="Explore how Agency.ai turns business ideas into polished websites, dashboards and automation-led digital products."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={work.image}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={work.title}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {work.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 dark:text-white/65 leading-relaxed">
                  {work.description}
                </p>

                <button className="mt-5 text-sm font-semibold text-blue-700 dark:text-blue-400">
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setSelectedWork(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 25 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-gray-950 text-gray-800 dark:text-white shadow-2xl"
            >
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-56 sm:h-72 object-cover rounded-t-3xl"
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {selectedWork.title}
                  </h2>

                  <button
                    onClick={() => setSelectedWork(null)}
                    className="shrink-0 w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-white/65 leading-relaxed">
                  {selectedWork.description}
                </p>

                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-gray-100 dark:bg-white/10 p-4">
                    <p className="text-xs text-gray-500 dark:text-white/50">
                      Stack
                    </p>
                    <h4 className="mt-1 text-sm font-bold">
                      {selectedWork.stack}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-gray-100 dark:bg-white/10 p-4">
                    <p className="text-xs text-gray-500 dark:text-white/50">
                      Timeline
                    </p>
                    <h4 className="mt-1 text-sm font-bold">
                      {selectedWork.timeline}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-gray-100 dark:bg-white/10 p-4">
                    <p className="text-xs text-gray-500 dark:text-white/50">
                      Result
                    </p>
                    <h4 className="mt-1 text-sm font-bold">
                      {selectedWork.result}
                    </h4>
                  </div>
                </div>

                <a
                  href="#contact-us"
                  onClick={() => setSelectedWork(null)}
                  className="mt-7 inline-flex w-full sm:w-auto justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition"
                >
                  Build Something Similar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurWork; 