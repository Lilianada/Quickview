import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Stack from "./Stack";
import Now from "./Now";
import Contact from "./Contact";

const Portfolio = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme.background === "#242424" ? `bg-[#242424]` : `bg-[#ffffff]`
      } min-h-screen transition-colors duration-300 font-grotesk
    `}
    >
      <div className="lg:hidden">
        <div
          className={`
          min-h-screen p-4 max-w-2xl mx-auto ${
            theme.background === "#242424" ? `bg-[#242424]` : "bg-[#ffffff]"
          }
        `}
          style={{ color: theme.secondaryText }}
        >
          <Header />
          <About />
          <Experience />
          <Projects />
          <Stack />
          <Now /> 
          <ThemeToggleButton />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen overflow-hidden">
        <div
          className={`w-[20%] p-8 `}
          style={{
            backgroundColor:
              theme.background === "#242424"
                ? "#2E2E2E"
                : `${theme.background}`,
          }}
        >
          <Header />
        </div>
        <div
          className={`bg-${
            theme.background === "#242424" ? `[#242424]` : "[#ffffff]"
          }
            w-[50%] overflow-y-auto p-8 scroll-smooth container`}
          style={{
            color: theme.secondaryText,
          }}
        >
          <About />
          <Experience />
          <Projects />
          <Stack />
          <Now /> 
          <Contact />
        </div>

        <div className="w-[30%] bg-gray-100 flex items-center justify-center relative">
          <div className="h-full w-full absolute inset-0">
            <img
              src="./image/profile-photo.jpeg"
              alt=""
              className="object-cover h-full w-full absolute top-0 left-0 opacity-80"
            />
            <div
              className={`absolute inset-0 mix-blend-color 
        ${
          theme.secondaryText === "[#D1D1D6]"
            ? "bg-[#D1D1D6]"
            : theme.secondaryText === "[#52525B]"
            ? "bg-[#52525B]/40"
            : theme.secondaryText === "[#7C3AED]"
            ? "bg-[#7C3AED]/40"
            : theme.secondaryText === "[#06AED4]"
            ? "bg-[#06AED4]/40"
            : theme.secondaryText === "[#D946EF]"
            ? "bg-[#D946EF]/40"
            : theme.secondaryText === "[#10B981]"
            ? "bg-[#10B981]/40"
            : theme.secondaryText === "[#3B82F6]"
            ? "bg-[#3B82F6]/40"
            : theme.secondaryText === "[#F97316]"
            ? "bg-[#F97316]/40"
            : "bg-gray-500"
        }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
