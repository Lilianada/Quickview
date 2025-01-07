import React from "react";
import { useTheme } from "../context/ThemeContext";
import { experiences } from "./data";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div
        id="experience"
        className="mb-16 lg:hidden"
        style={{ color: theme.primaryText }}
      >
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}
        >
          <span>4 years </span>
          <span className="opacity-80">of experience</span>{" "}
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-10"
          >
            <p className={`text-[12px] leading-3 mb-1.5`}>{exp.period}</p>
            <h3 className={`font-medium text-[18px] leading-[21px] mb-3`}>
              {exp.company}
            </h3>
            <p
              className="my-2 leading-4 text-[12px]"
              style={{ color: theme.secondaryText }}
            >
              {exp.role}
            </p>
            <p
              className=" text-[12px] leading-6"
              style={{ color: theme.secondaryText }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
      <div id="desktop-experience" className="my-12 min-h-screen hidden lg:flex flex-col">
        <h2 className={`text-[70px] font-[900] leading-[70px] w-1/2 mb-24`}>
          <span style={{ color: theme.primaryText }}>4 years </span>
          <span className="opacity-70">of experience</span>{" "}
        </h2>
        {experiences.map((exp, index) => (
          <div key={index} className={`flex mb-6 p-4`}>
            <p className="w-1/4">{exp.period}</p>
            <div className="w-3/4">
              <h3 className="font-semibold text-[20px] leading-6">
                {exp.company}
              </h3>
              <p className="text-sm">{exp.role}</p>
              <p className="text-xs">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
