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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black min-h-screen overflow-x-hidden">

      <Toaster />

      <Navbar theme={theme} setTheme={setTheme} />

      <main className="space-y-20 sm:space-y-28">
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