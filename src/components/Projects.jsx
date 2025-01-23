import React from "react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../utils/data";
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {
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
            className={` mb-6 rounded-lg w-full gap-6`}
            style={{ color: theme.primaryText }}
          >
            <div className="">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="text-sm lg:text-base mt-2 opacity-70">
                {project.description}
              </p>
              <div className="mt-2 grid items-center col-span-2 grid-cols-[auto_1fr] gap-4 ">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: theme.accent }}
                  className="text-xs uppercase tracking-widest flex items-center cursor-pointer"
                >
                  Preview <MdOutlineArrowOutward />
                </a>
                <span
                  style={{ backgroundColor: theme.primaryText }}
                  className="inline-block h-[1px] w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
