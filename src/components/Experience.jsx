import React from "react";
import { useTheme } from "../context/ThemeContext";
import { experiences } from "./data";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div
        id="experience"
        className="mb-16 lg:my-12 lg:mb-0 lg:min-h-screen"
        style={{ color: theme.primaryText }}
      >
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-right lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/2 lg:mb-24`}
        >
          <span>4 years </span>
          <span className="opacity-80">of experience</span>{" "}
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-10 lg:flex lg:mb-6 lg:p-4"
          >
            <p className={`text-[12px] leading-3 mb-1.5 lg:w-1/4`}>{exp.period}</p>
            <h3 className={`font-medium text-[18px] leading-[21px] mb-3 lg:hidden`}>
              {exp.company}
            </h3>
            <div className="hidden lg:flex flex-col w-3/4">
              <h3 className="font-semibold text-[20px] leading-6">
                {exp.company}
              </h3>
              <p className="text-sm">{exp.role}</p>
              <p className="text-xs">{exp.description}</p>
            </div>
            <p
              className="my-2 leading-4 text-[12px] lg:hidden"
              style={{ color: theme.secondaryText }}
            >
              {exp.role}
            </p>
            <p
              className="lg:hidden text-[12px] leading-6"
              style={{ color: theme.secondaryText }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
