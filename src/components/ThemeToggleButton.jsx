import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../components/data";

const ThemeToggleButton = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme, themeName, changeTheme } = useTheme();
  const themes = Object.keys(themeConfig);

  const handleDotClick = (newTheme) => {
    changeTheme(newTheme);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 lg:left-4 ${
        expanded ? "h-[290px]" : "h-12"
      } w-12 overflow-hidden transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        transition: expanded
          ? "height 0.3s ease 0.05s" 
          : "height 0.3s ease 0.20s",
      }}
    >
      <div
        className={`w-full h-full rounded-full backdrop-blur-md ${
          expanded ? "py-1.5" : "py-0"
        } `}
        style={{
          backgroundColor: `${theme.primaryText}20`,
        }}
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-around py-2 mt-12 transition-all duration-500 ${
            expanded
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {themes.map((themeOption, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(themeOption)}
              className="w-[7px] h-[7px] rounded-full cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: theme.primaryText,
                opacity: themeOption === themeName ? 0.5 : 0.2,
                transform: expanded ? "translateY(0)" : "translateY(20px)",
                transition: `transform 0.8s ease ${
                  index * 0.05
                }s`,
              }}
            />
          ))}
        </div>

        <div className="w-12 h-12 cursor-pointer">
          <div className="rounded-full flex items-center justify-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div
                className="absolute w-3 h-3 rounded-full border-2 transition-opacity duration-300"
                style={{
                  borderColor: theme.primaryText,
                  opacity: expanded ? 0.7 : 1,
                }}
              />

              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[1.5px] h-2 transition-all duration-300"
                  style={{
                    backgroundColor: theme.primaryText,
                    transform: `rotate(${i * 45}deg) translateY(-13px)`,
                    opacity: expanded ? 0.7 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggleButton;
