import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Now from "../components/Now";
import Contact from "../components/Contact";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";
import PurchaseButton from "../components/PurchaseButton";

const Home = () => {
  const { theme } = useTheme();
  const scrollContainer = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollContainer.current, {
      damping: 0.1, // Smoothness of the scrolling
      thumbMinSize: 20,
    });
    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-300 font-grotesk tracking-wide"
      style={{ color: theme.primaryText, backgroundColor: theme.background }}
    >
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={scrollContainer}
          className="min-h-screen p-4 max-w-2xl mx-auto"
        >
          <Header />
          <div className="grid gap-32">
            <About />
            <Experience />
            <Projects />
            <Stack />
            <Now />
            <Footer />
          </div>
          <PurchaseButton/>
          <ThemeToggleButton />
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen overflow-hidden">
        <div
          className={`w-[20%] p-6 `}
          style={{
            backgroundColor:
              theme.background === "#242424" ? "#2E2E2E" : `${theme.card}`,
          }}
        >
          <Header />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={scrollContainer}
          className="w-[50%] overflow-y-auto p-6 scroll-smooth container"
          style={{
            backgroundColor:
              theme.background === "#242424" ? "#242424" : theme.background,
            color: theme.primaryText,
          }}
        >
          <section id="desktop-about">
            <About />
          </section>
          <section id="desktop-experience">
            <Experience />
          </section>
          <section id="desktop-project">
            <Projects />
          </section>
          <section id="desktop-stack">
            <Stack />
          </section>
          <section id="desktop-now">
            <Now />
          </section>
          <Contact />
          <Footer />
        </motion.div>

        <div className="w-[30%] bg-gray-100 flex items-center justify-center relative">
          <div className="h-full w-full absolute inset-0">
            <img
              src="./image/profile-photo.jpeg"
              alt="Lilian Okeke"
              className="object-cover h-full w-full absolute top-0 left-0 opacity-80"
            />
            <div
              className="absolute inset-0 mix-blend-color"
              style={{
                backgroundColor:
                  theme.secondaryText === "rgba(209, 209, 214, 1)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(183, 212, 245, 0.4)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(183, 212, 245, 0.01)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(154, 109, 223, 0.5)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(211, 153, 186, 0.6)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(255, 177, 177, 0.3)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(233, 79, 14, 0.15)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(119, 78, 52, 0.25)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(46, 62, 64, 0.5)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(18, 25, 26, 0.3)"
                    ? `${theme.background}`
                    : theme.secondaryText === "rgba(82, 82, 91, 0.5)"
                    ? `${theme.background}`
                    : "bg-gray-500",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
