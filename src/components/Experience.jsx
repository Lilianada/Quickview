import React from "react";
import { experiences } from "../utils/data";

const Experience = () => {
  return (
    <section>
      <div
        id="experience"
        className="mb-16 lg:my-12 lg:mb-0 lg:min-h-screen"
      >
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-right lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-3/4 ml-auto`}
        >
          <span>4 years </span>
          <span className="opacity-70">of experience</span>{" "}
        </h2>
        
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-10 lg:flex lg:mb-6 lg:p-4"
          >
            <p className={`text-xs leading-4 lg:w-1/4 lg:mt-[6px]`}>{exp.period}</p>
            <p
              className="mt-2 leading-4 text-xs lg:hidden opacity-50 tracking-widest uppercase"
            >
              {exp.role}
            </p>
            <h3 className={`mt-1 font-semibold text-lg lg:hidden`}>
              {exp.company}
            </h3>
            {/* desktop */}
            <div className="hidden lg:flex flex-col w-3/4">
              <h3 className="font-semibold text-[20px] leading-6">
                {exp.company}
              </h3>
              <p className="text-sm opacity-50 mb-2">{exp.role}</p>
              <p className=" opacity-80">{exp.description}</p>
            </div>

            
            <p
              className="lg:hidden text-sm leading-5 opacity-80 mt-3"
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
