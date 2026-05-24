import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trustedby from "./components/Trustedby";
import Service from "./components/Service";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900 dark:bg-black dark:text-white">
      <Toaster position="top-center" />

      <Navbar theme={theme} setTheme={setTheme} />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <Trustedby />
        <Service />
        <OurWork />
        <Team />
        <ContactUs />
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default App;