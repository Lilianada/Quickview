import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div id="about" className="mb-16 lg:hidden">
        <h1
          className={`text-[36px] leading-[50px] font-[700] mb-4`}
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
            <span style={{ color: theme.accent }}> Next.js</span>. I also have
            experience using backend technologies like{" "}
            <span style={{ color: theme.accent }}>Node.js, Express.js</span>,
            and <span style={{ color: theme.accent }}>MongoDB</span>. Alongside
            my development skills, I have a keen eye for design which allows me
            to build visually appealing interfaces.
          </p>
          <p>
            I currently work at Supreme Marketing Limited, a software
            development and marketing company where I lead the development team
            to building tailor made solutions for businesses and organizations.
          </p>
          <p>
            I currently work at Supreme Marketing Limited, a software
            development and marketing company where I lead the development team
            to building tailor made solutions for businesses and organizations.
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
            {/* Use react-dom */}
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
      </div>
      <div
        id="desktop-about"
        className="mb-12 min-h-screen hidden lg:flex flex-row"
      >
        <div className="mb-8">
          <h1
            className={`text-[70px] font-[700] leading-[70px] w-1/2`}
            style={{ color: theme.primaryText }}
          >
            I'm a Product Manager.
          </h1>
          <div className={`text-base text-justify flex justify-end my-8`}>
            <p className="w-1/2">
              Having spent over four years as a MERN Stack Developer, I
              transitioned into{" "}
              <span style={{ color: theme.accent }}>Product Management</span>,
              where I now specialize in managing the design and development of
              digital solutions and experiences.
            </p>
          </div>

          <div className={`text-base flex my-8`}>
            <p className="w-1/2 text-justify">
              Currently, I work at Building Bloques Creative Studio, a digital
              and visual studio where I lead the development team as a Product
              Manager. We focus on crafting tailored solutions for a diverse
              range of brands and businesses, creating exceptional experiences
              through the digital products we design and build.
            </p>
          </div>
          <div className={`text-base flex justify-end my-8 text-left`}>
            <p className="w-1/2">
              When I’m not coding or exploring new designs, I am at the gym
              hitting new PRs and on Instagram encouraging women in to becoming
              the fittest versions of themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
