import React from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "./data";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div id="project" className="lg:my-12 lg:min-h-screen">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-2/5 lg:mb-24`}
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
              <span className="text-xs rounded opacity-70">{project.tags}</span>
              <h3 className="font-bold text-2xl">{project.name}</h3>
              <p className="text-sm lg:text-base mt-4 opacity-70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
