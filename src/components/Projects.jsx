import React from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../utils/data";
import { GoArrowUpRight } from "react-icons/go";

const Project = () => {
  const { theme } = useTheme();
  return (
    <section className="lg:mb-32">
      <div id="projects" className=" lg:min-h-screen">
        <div className="lg:hidden grid items-center col-span-2 grid-cols-[auto_1fr] gap-4 mb-12">
          <h2
            className={`text-[20px] leading-[36px] font-semibold text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-2/5`}
          >
            <span className="opacity-70">My </span>
            <span style={{ color: theme.primaryText }}>Projects</span>{" "}
          </h2>
          <span className="inline-block h-[1.5px] bg-current opacity-50 transition-all duration-300 w-full" />
        </div>
        <h2
          className={`hidden lg:block text-[20px] leading-[36px] font-semibold mb-12 text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-2/5`}
        >
          <span className="opacity-70">My </span>
          <span style={{ color: theme.primaryText }}>Projects</span>{" "}
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex items-start mb-6 rounded-lg w-full lg:p-5 gap-3`}
            style={{
              color: theme.primaryText,
            }}
          >
            <div className="w-4/5">
              <h3 className="font-bold text-lg leading-4">{project.name}</h3>
              <span className="text-xs rounded opacity-50 uppercase tracking-widest">
                {project.tags}
              </span>
              <p className="text-sm lg:text-base mt-2 lg:mt-3 opacity-70">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              className="bg-transparent border p-2 rounded-full h-10 w-10 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:h-12 hover:w-12"
              style={{
                color: theme.accent,
                borderColor: theme.accent,
              }}
            >
              <GoArrowUpRight size="20" className="transition-all duration-500" />
              </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
