import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  return (
    <section>
      <div id="about" className="mb-16 lg:hidden">
        <h1 className={`text-[48px] leading-[50px] font-[700] mb-8`}>
          I'm a Product Manager.
        </h1>

        <div className={`space-y-6 text-sm`}>
          <p className="leading-6">
            Having spent over four years as a MERN Stack Developer, I
            transitioned into{" "}
            <span style={{ color: theme.accent }}>Product Management</span>,
            where I now specialize in managing the design and development of
            digital solutions and experiences.
          </p>
          <p className="leading-6">
            Currently, I work at Building Bloques Creative Studio, a digital and
            visual studio where I lead the development team as a Product
            Manager. We focus on crafting tailored solutions for a diverse range
            of brands and businesses, creating exceptional experiences through
            the digital products we design and build.
          </p>
          <p className="leading-6">
            When I’m not coding or exploring new designs, I am at the gym
            hitting new PRs and on Instagram encouraging women in to becoming
            the fittest versions of themselves.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <div className="rounded-full h-16 w-16 flex items-center justify-center">
            <img
              src="/image/profile-photo.jpeg"
              alt="Avatar"
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>
          <div className="flex space-x-3">
            {/* Use react-dom */}
            <a
              href="https://legacy.reactjs.org/docs/react-dom.html"
              className="flex items-center gap-1 text-sm"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="https://legacy.reactjs.org/docs/react-dom.html"
              className="flex items-center gap-1 text-sm"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://legacy.reactjs.org/docs/react-dom.html"
              className="flex items-center gap-1 text-sm"
            >
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
        <div className="" style={{ color: theme.primaryText }}>
          <h1 className={`text-[70px] font-[700] leading-[70px] w-1/2`}>
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
