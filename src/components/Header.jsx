import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navSections, desSections } from "../utils/data";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTheme } from "../context/ThemeContext";
import PurchaseButton from "./PurchaseButton";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { theme } = useTheme();
  const [activeDesSection, setActiveDesSection] = useState("desktop-about");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (navSections.some(section => section.id === entry.target.id)) {
            setActiveSection(entry.target.id);
            setIsHeaderVisible(entry.target.id !== "about");
          }
          if (desSections.some(section => section.id === entry.target.id)) {
            setActiveDesSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    [...navSections, ...desSections].forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveDesSection(sectionId);
    }
  };

  return (
    <div>
      <nav className="lg:hidden flex justify-between items-center mb-16">
        <AnimatePresence mode="wait">
          {isHeaderVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md p-4`}
              style={{ backgroundColor: `${theme.background}33` }}
            >
              <motion.h1
                className={`text-xl font-semibold text-center`}
                style={{ color: theme.primaryText }}
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {capitalizeFirstLetter(activeSection)}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-[28px] font-medium leading-[44px] font-grotesk tracking-[-0.09em]">LA</div>
      </nav>

      <div className="hidden lg:flex flex-col gap-32">
        <div
          className={`text-[36px] font-medium leading-[44px] font-grotesk tracking-[-0.09em]`}
          style={{ color: theme.primaryText }}
        >
          LA
        </div>
        <nav className="space-y-4">
          {desSections.map((section, index) => (
            <div
              key={section.id}
              className={`cursor-pointer flex items-center group
                  ${
                    activeDesSection === section.id
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
              style={{ color: theme.primaryText }}
              onClick={() => scrollToSection(section.id)}
            >
              <span className="text-sm">0{index + 1}</span>
              <span className="mx-2 pb-2 inline-block transition-all duration-300">
                <span
                  className={`inline-block h-[1.5px] bg-current transition-all duration-300 ${
                    activeDesSection === section.id ? "w-14" : "w-8"
                  }`}
                />
              </span>
              <span className="font-medium">{section.label}</span>
            </div>
          ))}
        </nav>

          <PurchaseButton/>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Header;
