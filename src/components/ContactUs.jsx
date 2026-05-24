import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "d73b7897-9dfd-4560-b628-50d6b526f41d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="w-full overflow-x-hidden px-4 sm:px-8 lg:px-16 xl:px-24 py-20 text-gray-700 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <Title
          title="Start Your Project"
          desc="Tell us what you want to build. Agency.ai will help you shape the right digital solution."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-700 text-white p-8 sm:p-10"
          >
            <p className="text-sm uppercase tracking-[3px] text-white/70">
              Agency.ai Contact
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
              Build smarter websites, automations and digital systems.
            </h2>

            <p className="mt-5 text-white/80 text-sm sm:text-base leading-relaxed">
              Share your idea, business type or project goal. We will help you
              convert it into a clear digital plan.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-bold">Fast Response</h3>
                <p className="mt-1 text-sm text-white/75">
                  Clear project direction without confusing technical noise.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-bold">AI First Approach</h3>
                <p className="mt-1 text-sm text-white/75">
                  Websites, automations and workflows built around speed.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 sm:p-7 shadow-sm"
          >
            <div>
              <p className="mb-2 text-sm font-semibold">Your name</p>
              <div className="flex items-center gap-3 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-4">
                <img src={assets.person_icon} alt="" className="w-5" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full py-3 text-sm bg-transparent text-black dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Email address</p>
              <div className="flex items-center gap-3 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-4">
                <img src={assets.email_icon} alt="" className="w-5" />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 text-sm bg-transparent text-black dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-semibold">Project type</p>
              <select
                name="project_type"
                className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-black/30 px-4 py-3 text-sm text-black dark:text-white"
                required
              >
                <option value="">Select project type</option>
                <option>AI Automation</option>
                <option>Website Development</option>
                <option>Landing Page</option>
                <option>Dashboard UI</option>
                <option>Brand Growth System</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-semibold">Message</p>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your idea..."
                className="w-full resize-none rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-black/30 p-4 text-sm text-black dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="sm:col-span-2 flex items-center justify-center gap-2 rounded-full bg-blue-700 hover:bg-blue-600 disabled:opacity-60 text-white text-sm font-semibold px-8 py-3 transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <img src={assets.arrow_icon} alt="" className="w-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;