import React from "react";
import { experiences } from "../utils/data";

const Experience = () => {
  return (
    <section className="lg:mb-32 relative">
      <div id="experience" className="lg:hidden grid items-center col-span-2 grid-cols-[1fr_auto] gap-4 mb-12">
        <span className="inline-block h-[1.5px] bg-current opacity-50 transition-all duration-300 w-full" />
        <h2
          className="text-[20px] leading-[36px] font-semibold text-right">
          <span>6 Years </span>
          <span className="opacity-70">of Experience</span>
        </h2>
      </div>
      <h2 className={`hidden lg:block mb-12 text-right text-[70px] font-[900] leading-[70px] w-3/4 ml-auto`}>
        <span>6 Years </span>
        <span className="opacity-70">of Experience</span>
      </h2>

      <div className="relative pl-4 min-h-screen">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative pl-4 last:pb-0 mb-4"
          >
            <div className="absolute left-[-20px] top-0 bottom-0 flex flex-col items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-current rounded-full"></div>
              <div className="w-[1px] h-full bg-current opacity-30" ></div>
            </div>

            <div className="">
              <h3 className="font-semibold text-lg leading-6">{exp.company}</h3>
              <p className="text-xs mt-1 opacity-50">{exp.period}</p>
              <p className="mt-3 text-xs tracking-widest uppercase">
                {exp.role}
              </p>
              <p className="text-sm mt-1 leading-6 opacity-80">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* desktop */}
      {/* <div className="hidden">
        {experiences.map((exp, index) => (
          <div key={index} className="flex mb-6 p-4">
            <p className={`text-xs leading-4 w-1/4 mt-[6px]`}>
              {exp.period}
            </p>
            <div className="w-3/4">
              <h3 className="font-semibold text-[20px] leading-6">
                {exp.company}
              </h3>
              <p className="text-sm opacity-50 tracking-widest uppercase mb-2">
                {exp.role}
              </p>
              <p className=" opacity-80">{exp.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Experience;
