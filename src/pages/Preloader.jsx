import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Preloader() {
  const { theme } = useTheme();
  const [percent, setPercent] = useState(0);
  const [rotatingText, setRotatingText] = useState("Hi, I'm Lily.");
  const rotatingMessages = [
    "Hi, I'm Lily.",
    "Welcome to my portfolio.",
    "Hire me.",
  ];

  useEffect(() => {
    const simulateProgress = () => {
      const interval = setInterval(() => {
        setPercent((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(interval); // Stop once the progress reaches 100
            return prev;
          }
        });
      }, 30); 

      const textInterval = setInterval(() => {
        setRotatingText(
          (prev) =>
            rotatingMessages[
              (rotatingMessages.indexOf(prev) + 1) % rotatingMessages.length
            ]
        );
      }, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(textInterval);
      };
    };

    simulateProgress(); // Start the progress simulation immediately

    return () => simulateProgress();
  }, []);

  return (
    <div
      className="h-screen transition-colors duration-300 font-grotesk grid place-items-center"
      style={{ color: theme.primaryText, backgroundColor: theme.background }}
    >
      <div className="w-4/5 lg:w-2/5">
        <div className="text-center text-2xl animate-spin-slow">
          ✿
        </div>

        {/* Percent counter with moving accent background */}
        <div
          className="mt-4 w-full h-12 rounded-sm grid place-items-center relative text-center"
          style={{
            backgroundColor: theme.card,
          }}
        >
          {/* Progress bar fill */}
          <div
            className="opacity-70 absolute top-0 left-0 h-full transition-all duration-300 flex items-center justify-center text-sm font-medium text-center text-white rounded-sm"
            style={{
              width: `${percent}%`,
              backgroundColor: theme.accent,
            }}
          ></div>

          {/* Display percentage */}
          <p className="text-center font-medium absolute">{percent}%</p>
        </div>

        {/* Rotating message */}
        <p className="text-sm text-right mt-4 font-medium">{rotatingText}</p>
      </div>
    </div>
  );
}
