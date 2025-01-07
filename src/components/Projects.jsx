import React from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "./data";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div id="project" className="lg:hidden">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-left`}
        >
          <span className="opacity-70">My </span>
          <span style={{ color: theme.primaryText }}>Projects</span>{" "}
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className={` mb-6 rounded-lg w-full p-5 gap-4`}
            style={{ color: theme.secondaryText }}
          >
            <div className={`w-16 p-3 rounded-full`}>
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover rounded-full"
              />
            </div>
            <div className="">
              <span className="text-xs rounded opacity-70">{project.tags}</span>
              <h3 className="font-bold text-2xl">{project.name}</h3>
              <p className="text-sm mt-4 opacity-70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="desktop-project" className=" hidden lg:flex flex-col">
        <div className="flex justify-end">
          <h2 className={` text-[70px] font-[900] leading-[70px] w-2/5 mb-24`}>
            <span className="opacity-70">My </span>
            <span style={{ color: theme.primaryText }}>Projects</span>{" "}
          </h2>
        </div>
        {projects.map((project, index) => (
          <div
            className={` mb-6 rounded-lg w-full p-5 gap-4`}
            style={{ color: theme.secondaryText }}
          >
            <div className={`w-16 p-3 rounded-full`}>
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover rounded-full"
              />
            </div>
            <div className="">
              <span className="text-xs rounded opacity-70">{project.tags}</span>
              <h3 className="font-bold text-2xl">{project.name}</h3>
              <p className="text-sm mt-4 opacity-70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
