import React from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../utils/data";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div id="projects" className="mb-32 lg:min-h-screen">
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
          className={`hidden lg:blocktext-[20px] leading-[36px] font-semibold mb-12 text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-2/5`}
        >
          <span className="opacity-70">My </span>
          <span style={{ color: theme.primaryText }}>Projects</span>{" "}
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className={` mb-6 rounded-lg w-full gap-4`}
            style={{ color: theme.primaryText }}
          >
            <div className="rounded-full h-16 w-16 lg:h-20 lg:w-20 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="h-10 w-10 lg:h-14 lg:w-14 object-cover rounded-full"
              />
            </div>
            <div className="">
              <span className="text-xs rounded opacity-50 uppercase tracking-widest">{project.tags}</span>
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="text-sm lg:text-base mt-3 opacity-70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
