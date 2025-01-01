import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";
import { experiences, projects, stacks } from "./data";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";

const Portfolio = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme.background === "#242424" ? `bg-[#242424]` : `bg-[#ffffff]`
      } min-h-screen transition-colors duration-300 font-monaSans
    `}
    >
      <div className="lg:hidden">
        <div
          className={`
          min-h-screen p-4 max-w-2xl mx-auto ${
            theme.background === "#242424" ? `bg-[#242424]` : "bg-[#ffffff]"
          }
        `}
          style={{ color: theme.secondaryText }}
        >
          <Header />
          <section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1
              className={`text-[36px] leading-[50px] font-[900] mb-4`}
              style={{ color: theme.primaryText }}
            >
              I'm a Self-taught developer.
            </h1>

            <div
              className={`space-y-4 text-sm`}
              style={{ color: theme.secondaryText }}
            >
              <p>
                Specializing in frontend development using{" "}
                <span style={{ color: theme.accent }}> React.js</span> and{" "}
                <span style={{ color: theme.accent }}> Next.js</span>. I also
                have experience using backend technologies like{" "}
                <span style={{ color: theme.accent }}>Node.js, Express.js</span>
                , and <span style={{ color: theme.accent }}>MongoDB</span>.
                Alongside my development skills, I have a keen eye for design
                which allows me to build visually appealing interfaces.
              </p>
              <p>
                I currently work at Supreme Marketing Limited, a software
                development and marketing company where I lead the development
                team to building tailor made solutions for businesses and
                organizations.
              </p>
              <p>
                I currently work at Supreme Marketing Limited, a software
                development and marketing company where I lead the development
                team to building tailor made solutions for businesses and
                organizations.
              </p>
            </div>

            <div
              className="flex items-center gap-4 mt-6"
              style={{ color: theme.primaryText }}
            >
              <img
                src="/image/profile-photo.jpeg"
                alt="Avatar"
                className="rounded-full w-12 h-12"
              />
              <div className="flex space-x-3">
                <a href="#" className="flex items-center gap-1 text-sm">
                  <FaGithub size={20} />
                  GitHub
                </a>
                <a href="#" className="flex items-center gap-1 text-sm">
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-1 text-sm">
                  <FaLinkedin size={20} />
                  Twitter
                </a>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="mb-16"
            style={{ color: theme.primaryText }}
          >
            <h2
              className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}
            >
              <span>4 years </span>
              <span className="opacity-80">of experience</span>{" "}
            </h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
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
              </motion.div>
            ))}
          </section>

          <section id="project">
            <h2
              className={`text-[20px] leading-[36px] font-semibold mb-12 text-left`}
            >
              <span className="opacity-70">My </span>
              <span style={{ color: theme.primaryText }}>Projects</span>{" "}
            </h2>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
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
                  <span className="text-xs rounded opacity-70">
                    {project.tags}
                  </span>
                  <h3 className="font-bold text-2xl">{project.name}</h3>
                  <p className="text-sm mt-4 opacity-70">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>

          <section id="stack">
            <h2
              className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}
            >
              <span className="opacity-70">My </span>
              <span style={{ color: theme.primaryText }}>Stack</span>{" "}
            </h2>
            {stacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`flex mb-6 rounded-lg w-full p-5 gap-4`}
                style={{
                  color: theme.secondaryText,
                  backgroundColor: theme.card,
                }}
              >
                <div className=" w-1/5 rounded-full">
                  <img
                    src={stack.image}
                    alt={stack.name}
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-lg">{stack.name}</h3>
                  <span className="text-xs rounded opacity-70">
                    {stack.tags}
                  </span>
                  <p className="text-sm mt-4 opacity-70">{stack.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section id="now">
            <h2
              className={`text-[20px] leading-[36px] font-semibold mb-12 text-left`}
              style={{ color: theme.primaryText }}
            >
              Now
            </h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <p className=" text-[12px] leading-6">
                {" "}
                Last updated: November 21st
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={` font-medium text-[18px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Keep up with me:
              </h3>
              <p className=" text-[12px] leading-6">
                Becoming the best version of myself. This “Now” page reflects my
                current priorities and goals, and I will update it regularly as
                my focus and activities change over time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={` font-medium text-[18px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                What I am doing:
              </h3>
              <p className=" text-[12px] leading-6">
                As of November 2024, here are a few things I’m focused on:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Eating Whole Food:
              </h3>
              <p className=" text-[12px] leading-6">
                Becoming the best version of myself. This “Now” page reflects my
                current priorities and goals, and I will update it regularly as
                my focus and activities change over time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Decorating my new home:
              </h3>
              <p className=" text-[12px] leading-6">
                Adding pieces of decor and household items to make my new house
                a home.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Morning walks before I start working:
              </h3>
              <p className=" text-[12px] leading-6">
                Prioritizing physical health and mental clarity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Working on Building bloques and upcoming ventures:
              </h3>
              <p className=" text-[12px] leading-6">
                Dedicating my leisure-time to grow my projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Sleeping More
              </h3>
              <p className=" text-[12px] leading-6">
                Changing my wake up time from 5am to 6am has allowed me to sleep
                more which in turn makes me more active during the day and with
                less cravings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Being consistent in working on my projects
              </h3>
              <p className=" text-[12px] leading-6">
                Early planning for a minimal task management app.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className="mb-10"
            >
              <p className=" text-[12px] leading-6">
                I plan to update this page regularly, reflecting on my progress
                and adjusting my focus as needed. Stay tuned for the next
                update! This is a now page, if you do not have one, consider
                adding one to your site
              </p>
            </motion.div>
          </section>

          <ThemeToggleButton />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen overflow-hidden">
        <div
          className={`w-[20%] p-8 `}
          style={{ 
            backgroundColor: theme.background === "#242424" ? "#2E2E2E" : `${theme.background}`,
          }}
        >
          <Header />
        </div>
        <div
          className={`bg-${
            theme.background === "#242424" ? `[#242424]` : "[#ffffff]"
          }
            w-[50%] overflow-y-auto p-8 scroll-smooth container`}
          style={{ 
            color: theme.secondaryText
          }}
        >
          <section id="desktop-about" className="mb-12 min-h-screen">
            <div className="mb-8">
              <h1
                className={`text-[70px] font-[900] leading-[70px] w-1/2`}
                style={{ color: theme.primaryText }}
              >
                I'm a Self-taught developer.
              </h1>
              <div className={`text-sm flex justify-end my-8`}>
                <p className="w-1/2">
                  Specializing in frontend development using{" "}
                  <span style={{ color: theme.accent }}> React.js</span> and{" "}
                  <span style={{ color: theme.accent }}> Next.js</span>. I also
                  have experience using backend technologies like{" "}
                  <span style={{ color: theme.accent }}>
                    Node.js, Express.js
                  </span>
                  , and <span style={{ color: theme.accent }}>MongoDB</span>.
                  Alongside my development skills, I have a keen eye for design
                  which allows me to build visually appealing interfaces.
                </p>
              </div>
              <div className={`text-sm flex my-8`}>
                <p className="w-1/2 text-left">
                  I currently work at Supreme Marketing Limited, a software
                  development and marketing company where I lead the development
                  team to building tailor made solutions for businesses and
                  organizations.
                </p>
              </div>
              <div className={`text-sm flex justify-end my-8 text-left`}>
                <p className="w-1/2">
                  I currently work at Supreme Marketing Limited, a software
                  development and marketing company where I lead the development
                  team to building tailor made solutions for businesses and
                  organizations.
                </p>
              </div>
            </div>
          </section>

          <section id="desktop-experience" className="my-12 min-h-screen">
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
          </section>

          <section id="desktop-project">
            <div className="flex justify-end">
              <h2
                className={` text-[70px] font-[900] leading-[70px] w-2/5 mb-24`}
              >
                <span className="opacity-70">My </span>
                <span style={{ color: theme.primaryText }}>Projects</span>{" "}
              </h2>
            </div>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
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
                  <span className="text-xs rounded opacity-70">
                    {project.tags}
                  </span>
                  <h3 className="font-bold text-2xl">{project.name}</h3>
                  <p className="text-sm mt-4 opacity-70">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>

          <section id="desktop-stack" className="my-12 min-h-screen">
            <div className="">
              <h2
                className={`text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}
              >
                <span className="opacity-70">My </span>
                <span style={{ color: theme.primaryText }}>Stack</span>{" "}
              </h2>
            </div>
            {stacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`flex mb-6 rounded-lg w-full p-5 gap-4`}
                style={{ color: theme.secondaryText, background: theme.card }}
              >
                <div className=" w-1/5 rounded-full">
                  <img
                    src={stack.image}
                    alt={stack.name}
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-lg">{stack.name}</h3>
                  <span className="text-xs rounded opacity-70">
                    {stack.tags}
                  </span>
                  <p className="text-sm mt-4 opacity-70">{stack.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section id="desktop-now" className="min-h-screen">
            <div className="">
              <h2
                className={`text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}
                style={{ color: theme.primaryText }}
              >
                Now
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3
                className={`font-medium text-[18px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                What I am doing
              </h3>
              <p className=" text-[12px] leading-6">
                As of November 2024, here are a few things I’m focused on:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10`}
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Eating Whole Food
              </h3>
              <p className=" text-[12px] leading-6">
                Becoming the best version of myself. This “Now” page reflects my
                current priorities and goals, and I will update it regularly as
                my focus and activities change over time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Decorating my new home
              </h3>
              <p className=" text-[12px] leading-6">
                Adding pieces of decor and household items to make my new house
                a home.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Morning walks before I start working
              </h3>
              <p className=" text-[12px] leading-6">
                Prioritizing physical health and mental clarity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Working on Building bloques and upcoming ventures:
              </h3>
              <p className=" text-[12px] leading-6">
                Dedicating my leisure-time to grow my projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Sleeping More
              </h3>
              <p className=" text-[12px] leading-6">
                Changing my wake up time from 5am to 6am has allowed me to sleep
                more which in turn makes me more active during the day and with
                less cravings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3
                className={`font-medium text-[12px] leading-[21px] mb-3`}
                style={{ color: theme.primaryText }}
              >
                Being consistent in working on my projects
              </h3>
              <p className=" text-[12px] leading-6">
                Early planning for a minimal task management app.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <p className=" text-[12px] leading-6">
                I plan to update this page regularly, reflecting on my progress
                and adjusting my focus as needed. Stay tuned for the next
                update! This is a now page, if you do not have one, consider
                adding one to your site
              </p>
            </motion.div>
          </section>

          <section id="desktop-contact" className="my-12">
            <div className="">
              <h2
                className={`text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}
                style={{ color: theme.primaryText }}
              >
                Contact
              </h2>
            </div>
            <motion.div className="space-y-3">
              <span className="flex items-center gap-2">
                <p className="text-sm shrink-0">Email</p>
                <span className="flex-grow">
                  <span
                    className="block h-[1.5px] w-full opacity-70"
                    style={{ backgroundColor: theme.primaryText }}
                  />
                </span>
                <p className="text-sm shrink-0">Lilianokeke.ca@gmail.com</p>
              </span>

              <span className="flex items-center gap-2">
                <p className="text-sm shrink-0">Email</p>
                <span className="flex-grow">
                  <span
                    className="block h-[1.5px] w-full opacity-70"
                    style={{ backgroundColor: theme.primaryText }}
                  />
                </span>
                <p className="text-sm shrink-0">Lilianokeke.ca@gmail.com</p>
              </span>

              <span className="flex items-center gap-2">
                <p className="text-sm shrink-0 opacity-70">Email</p>
                <span className="flex-grow">
                  <span
                    className="block h-[1.5px] w-full"
                    style={{ backgroundColor: theme.primaryText }}
                  />
                </span>
                <p className="text-sm shrink-0">Lilianokeke.ca@gmail.com</p>
              </span>
            </motion.div>
          </section>
        </div>

        <div className="w-[30%] bg-gray-100 flex items-center justify-center relative">
          <div className="h-full w-full absolute inset-0">
            <img
              src="./image/profile-photo.jpeg"
              alt=""
              className="object-cover h-full w-full absolute top-0 left-0 opacity-80"
            />
            <div
              className={`absolute inset-0 mix-blend-color 
        ${
          theme.secondaryText === "[#D1D1D6]"
            ? "bg-[#D1D1D6]"
            : theme.secondaryText === "[#52525B]"
            ? "bg-[#52525B]/40"
            : theme.secondaryText === "[#7C3AED]"
            ? "bg-[#7C3AED]/40"
            : theme.secondaryText === "[#06AED4]"
            ? "bg-[#06AED4]/40"
            : theme.secondaryText === "[#D946EF]"
            ? "bg-[#D946EF]/40"
            : theme.secondaryText === "[#10B981]"
            ? "bg-[#10B981]/40"
            : theme.secondaryText === "[#3B82F6]"
            ? "bg-[#3B82F6]/40"
            : theme.secondaryText === "[#F97316]"
            ? "bg-[#F97316]/40"
            : "bg-gray-500"
        }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
