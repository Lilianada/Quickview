import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMenu } from "react-icons/md";


const themeConfig = {
  default: {
    background: 'bg-[#242424]',
    primaryText: 'text-[#FFFFFF]',
    secondaryText: 'text-[#D1D1D6]',
    accent: 'text-[#F5BF6A]',
    card: 'bg-[#2E2E2E]'
  },
  light: {
    background: 'bg-[#FCFCFC]',
    primaryText: 'text-[#3F3F46]',
    secondaryText: 'text-[#70707B]',
    accent: 'text-[#E79411]',
    card: 'bg-[#F4F4F5]'
  },
  violet: {
    background: 'bg-[#ECE9FE]',
    primaryText: 'text-[#6927DA]',
    secondaryText: 'text-[#875BF7]',
    accent: 'text-[#491C96]',
    card: 'bg-[#ECE9FE]'
  },
  cyan: {
    background: 'bg-[#CFF9FE]',
    primaryText: 'text-[#0E7090]',
    secondaryText: 'text-[#06AED4]',
    accent: 'text-[#164C63]',
    card: 'bg-[#CFF9FE]'
  },
  fushia: {
    background: 'bg-[#FBE8FF]',
    primaryText: 'text-[#9F1AB1]',
    secondaryText: 'text-[#D444F1]',
    accent: 'text-[#6F1877]',
    card: 'bg-[#FBE8FF]'
  },
  pink: {
    background: 'bg-[#FCE7F6]',
    primaryText: 'text-[#C11574]',
    secondaryText: 'text-[#EE46BC]',
    accent: 'text-[#851651]',
    card: 'bg-[#FCE7F6]'
  },
  green: {
    background: 'bg-[#D3F8DF]',
    primaryText: 'text-[#087443]',
    secondaryText: 'text-[#16B364]',
    accent: 'text-[#084C2E]',
    card: 'bg-[#D3F8DF]'
  },
  darkBlue: {
    background: 'bg-[#D1E0FF]',
    primaryText: 'text-[#004EEB]',
    secondaryText: 'text-[#2970FF]',
    accent: 'text-[#00359E]',
    card: 'bg-[#D1E0FF]'
  },
  darkOrange: {
    background: 'bg-[#FFE6D5]',
    primaryText: 'text-[#BC1B06]',
    secondaryText: 'text-[#FF4405]',
    accent: 'text-[#771A0D]',
    card: 'bg-[#FFE6D5]'
  },
  yellow: {
    background: 'bg-[#FEF7C3]',
    primaryText: 'text-[#A15C07]',
    secondaryText: 'text-[#EAAA08]',
    accent: 'text-[#713B12]',
    card: 'bg-[#FEF7C3]'
  }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [currentTheme, setCurrentTheme] = useState('default');

  const themes = Object.keys(themeConfig);

  const navSections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'project', label: 'Project' },
    { id: 'stack', label: 'Stack' },
    { id: 'now', label: 'Now' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      period: 'Jan 2023 - Present',
      company: 'Coloring Cultures',
      role: 'Frontend Developer',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand\'s website.'
    },
    {
      period: 'Jan 2023 - Present',
      company: 'Coloring Cultures',
      role: 'Frontend Developer',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand\'s website.'
    },
    {
      period: 'Jan 2023 - Present',
      company: 'Coloring Cultures',
      role: 'Frontend Developer',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand\'s website.'
    },
    {
      period: 'Jan 2023 - Present',
      company: 'Coloring Cultures',
      role: 'Frontend Developer',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand\'s website.'
    }
  ];

  const projects = [
    {
      name: 'Colouring Cultures',
      tags: 'E-Commerce',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand’s website.',
      image: '/image/profile-photo.jpeg'
    },
    {
      name: 'Colouring Cultures',
      tags: 'E-Commerce',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand’s website.',
      image: '/image/profile-photo.jpeg'
    },
    {
      name: 'Colouring Cultures',
      tags: 'E-Commerce',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand’s website.',
      image: '/image/profile-photo.jpeg'
    },
    {
      name: 'Colouring Cultures',
      tags: 'E-Commerce',
      description: 'A web design studio providing templates and bespoke solutions for your business or personal brand’s website.',
      image: '/image/profile-photo.jpeg'
    },
  ];

  const stacks = [
    {
      name: 'Next Js',
      tags: 'Javascript Framework',
      description: 'Next.js is an open-source web development framework created by the private company Vercel providing React',
      image: '/image/profile-photo.jpeg'
    },
    {
      name: 'Next Js',
      tags: 'Javascript Framework',
      description: 'Next.js is an open-source web development framework created by the private company Vercel providing React',
      image: '/image/profile-photo.jpeg'
    },
    {
      name: 'Next Js',
      tags: 'Javascript Framework',
      description: 'Next.js is an open-source web development framework created by the private company Vercel providing React',
      image: '/image/profile-photo.jpeg'
    },
    {
      name: 'Next Js',
      tags: 'Javascript Framework',
      description: 'Next.js is an open-source web development framework created by the private company Vercel providing React',
      image: '/image/profile-photo.jpeg'
    },
  ];

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  const theme = themeConfig[currentTheme];
  return (
    <div className={`
      ${theme.secondaryText} 
      min-h-screen transition-colors duration-300
    `}>
      <div className="lg:hidden">
        <div className={`
          min-h-screen p-4 max-w-2xl mx-auto ${theme.background === 'bg-[#242424]' ? `bg-[#242424]` : 'bg-[#ffffff]'}
          ${theme.secondaryText}
        `}>
          <nav className="flex justify-between items-center mb-16">
            <div className="text-[36px] leading-[44px] font-nerko">LA</div>
            <div
              className="space-y-1 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MdMenu size={28} />
            </div>
          </nav>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className={`text-[36px] ${theme.primaryText} leading-[50px] font-[900] mb-4`}>I'm a Self-taught developer.</h1>

            <div className={`space-y-4 ${theme.secondaryText} text-sm`}>
              <p>
                Specializing in frontend development using <span className={`${theme.accent}`}> React.js</span> and <span className={`${theme.accent}`}> Next.js</span>. I also have experience using backend technologies like <span className={`${theme.accent}`}>Node.js, Express.js</span>, and <span className={`${theme.accent}`}>MongoDB</span>. Alongside my development skills, I have a keen eye for design which allows me to build visually appealing interfaces.
              </p>
              <p>
                I currently work at Supreme Marketing Limited, a software development and marketing company where I lead the development team to building tailor made solutions for businesses and organizations.
              </p>
              <p>
                I currently work at Supreme Marketing Limited, a software development and marketing company where I lead the development team to building tailor made solutions for businesses and organizations.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <img
                src="/image/profile-photo.jpeg"
                alt="Avatar"
                className="rounded-full w-12 h-12"
              />
              <div className="flex space-x-3">
                <a
                  href="#"
                  className='flex items-center gap-1 text-sm'
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
                <a
                  href="#"
                  className='flex items-center gap-1 text-sm'
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  className='flex items-center gap-1 text-sm'
                >
                  <FaLinkedin size={20} />
                  Twitter
                </a>
              </div>
            </div>
          </motion.section>

          <section className="mb-16">
            <h2 className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}><span className={`${theme.primaryText}`}>4 years </span><span className='opacity-50'>of experience</span> </h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className='mb-10'
              >
                <p className={`${theme.primaryText} text-[12px] leading-3 mb-1.5`}>{exp.period}</p>
                <h3 className={`${theme.primaryText} font-medium text-[18px] leading-[21px] mb-3`}>{exp.company}</h3>
                <p className='my-2 leading-4 text-[12px]'>{exp.role}</p>
                <p className=' text-[12px] leading-6'>{exp.description}</p>
              </motion.div>
            ))}
          </section>

          <section>
            <h2 className={`text-[20px] leading-[36px] font-semibold mb-12 text-left`}><span className='opacity-50'>My </span><span className={`${theme.primaryText}`}>Projects</span> </h2>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`flex mb-6 rounded-lg w-full p-5 gap-4 ${theme.secondaryText} ${theme.card}`}
              >
                <div className=' w-1/5 rounded-full'>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <span
                    className='text-xs rounded opacity-70'
                  >
                    {project.tags}
                  </span>
                  <p className='text-sm mt-4 opacity-70'>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section>
            <h2 className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}><span className='opacity-50'>My </span><span className={`${theme.primaryText}`}>Stack</span> </h2>
            {stacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`flex mb-6 rounded-lg w-full p-5 gap-4 ${theme.secondaryText} ${theme.card}`}
              >
                <div className=' w-1/5 rounded-full'>
                  <img
                    src={stack.image}
                    alt={stack.name}
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-lg">{stack.name}</h3>
                  <span
                    className='text-xs rounded opacity-70'
                  >
                    {stack.tags}
                  </span>
                  <p className='text-sm mt-4 opacity-70'>{stack.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section>
            <h2 className={`text-[20px] leading-[36px] font-semibold mb-12 text-left`}>Now</h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[18px] leading-[21px] mb-3`}>What I am doing</h3>
              <p className=' text-[12px] leading-6'>As of November 2024, here are a few things I’m focused on:</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Eating Whole Food</h3>
              <p className=' text-[12px] leading-6'>Becoming the best version of myself. This “Now” page reflects my current priorities and goals, and I will update it regularly as my focus and activities change over time.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Decorating my new home</h3>
              <p className=' text-[12px] leading-6'>Adding pieces of decor and household items to make my new house a home.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Morning walks before I start working</h3>
              <p className=' text-[12px] leading-6'>Prioritizing physical health and mental clarity.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Working on Building bloques and upcoming ventures:</h3>
              <p className=' text-[12px] leading-6'>Dedicating my leisure-time to grow my projects.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Sleeping More</h3>
              <p className=' text-[12px] leading-6'>Changing my wake up time from 5am to 6am has allowed me to sleep more which in turn makes me more active during the day and with less cravings.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Being consistent in working on my projects</h3>
              <p className=' text-[12px] leading-6'>Early planning for a minimal task management app.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className='mb-10'
            >
              <p className=' text-[12px] leading-6'>I plan to update this page regularly, reflecting on my progress and adjusting my focus as needed. Stay tuned for the next update! This is a now page, if you do not have one, consider adding one to your site</p>
            </motion.div>
          </section>

          <div
            className={`fixed bottom-4 right-4 ${theme.accent} p-2 rounded-full cursor-pointer`}
            onClick={cycleTheme}
          >
            Change Theme
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen overflow-hidden">
        <div className={`w-[20%] p-8 flex flex-col justify-between ${theme.background}`}>
          <div className={`${theme.primaryText} text-[48px] leading-[44px] font-nerko `}>LA</div>
          <nav className="space-y-4">
            {navSections.map((section, index) => (
              <div
                key={section.id}
                className={`${theme.primaryText} cursor-pointer flex items-center group
                    ${activeSection === section.id
                    ? 'opacity-100'
                    : 'opacity-30 hover:opacity-60'}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="text-sm">0{index + 1} <hr className={`inline-block w-8 h-[3px] mx-2`} /></span>
                <span className="font-medium">{section.label}</span>
              </div>
            ))}
          </nav>

          <div
            className={`flex items-center cursor-pointer ${theme.accent}`}
            onClick={cycleTheme}
          >
            <span className="ml-2">Change Theme</span>
          </div>
        </div>

        <div className={`${theme.background === 'bg-[#242424]' ? `bg-[#242424]` : 'bg-[#ffffff]'}
          ${theme.secondaryText} w-[60%] overflow-y-auto p-8`}>
          <section className="mb-12">
            <div className="mb-8">
              <h1 className={`${theme.primaryText} text-[70px] font-[900] leading-[70px] w-1/2`}>I'm a Self-taught developer.</h1>
              <div className={`text-sm flex justify-end my-8 ${theme.secondaryText}`}>
                <p className='w-1/2'>
                  Specializing in frontend development using <span className={`${theme.accent}`}> React.js</span> and <span className={`${theme.accent}`}> Next.js</span>. I also have experience using backend technologies like <span className={`${theme.accent}`}>Node.js, Express.js</span>, and <span className={`${theme.accent}`}>MongoDB</span>. Alongside my development skills, I have a keen eye for design which allows me to build visually appealing interfaces.
                </p>
              </div>
              <div className={`text-sm flex my-8 ${theme.secondaryText}`}>
                <p className='w-1/2 text-left'>
                  I currently work at Supreme Marketing Limited, a software development and marketing company where I lead the development team to building tailor made solutions for businesses and organizations.
                </p>
              </div>
              <div className={`text-sm flex justify-end my-8 text-left ${theme.secondaryText}`}>
                <p className='w-1/2'>
                  I currently work at Supreme Marketing Limited, a software development and marketing company where I lead the development team to building tailor made solutions for businesses and organizations.
                </p>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className={`${theme.primaryText} text-[70px] font-[900] leading-[70px] w-1/2 mb-24`}><span className={`${theme.primaryText}`}>4 years </span><span className='opacity-50'>of experience</span> </h2>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex mb-6 p-4`}
              >
                <p className='w-1/4'>{exp.period}</p>
                <div className="w-3/4">
                  <h3 className="font-semibold text-[20px] leading-6">{exp.company}</h3>
                  <p className='text-sm'>{exp.role}</p>
                  <p className='text-xs'>{exp.description}</p>
                </div>
              </div>
            ))}
          </section>

          <section>
            <div className='flex justify-end'>
              <h2 className={`${theme.primaryText} text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}><span className='opacity-50'>My </span><span className={`${theme.primaryText}`}>Projects</span> </h2>
            </div>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`flex mb-6 rounded-lg w-full p-5 gap-4 ${theme.secondaryText} ${theme.card}`}
              >
                <div className=' w-1/5 rounded-full'>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <span
                    className='text-xs rounded opacity-70'
                  >
                    {project.tags}
                  </span>
                  <p className='text-sm mt-4 opacity-70'>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section className="my-12">
            <div className=''>
              <h2 className={`${theme.primaryText} text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}><span className='opacity-50'>My </span><span className={`${theme.primaryText}`}>Stack</span> </h2>
            </div>
            {stacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`flex mb-6 rounded-lg w-full p-5 gap-4 ${theme.secondaryText} ${theme.card}`}
              >
                <div className=' w-1/5 rounded-full'>
                  <img
                    src={stack.image}
                    alt={stack.name}
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-lg">{stack.name}</h3>
                  <span
                    className='text-xs rounded opacity-70'
                  >
                    {stack.tags}
                  </span>
                  <p className='text-sm mt-4 opacity-70'>{stack.description}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section>
            <div className=''>
              <h2 className={`${theme.primaryText} text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}><span className='opacity-50'>Now </span> </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3 className={`${theme.primaryText} font-medium text-[18px] leading-[21px] mb-3`}>What I am doing</h3>
              <p className=' text-[12px] leading-6'>As of November 2024, here are a few things I’m focused on:</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10`}
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Eating Whole Food</h3>
              <p className=' text-[12px] leading-6'>Becoming the best version of myself. This “Now” page reflects my current priorities and goals, and I will update it regularly as my focus and activities change over time.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Decorating my new home</h3>
              <p className=' text-[12px] leading-6'>Adding pieces of decor and household items to make my new house a home.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Morning walks before I start working</h3>
              <p className=' text-[12px] leading-6'>Prioritizing physical health and mental clarity.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Working on Building bloques and upcoming ventures:</h3>
              <p className=' text-[12px] leading-6'>Dedicating my leisure-time to grow my projects.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Sleeping More</h3>
              <p className=' text-[12px] leading-6'>Changing my wake up time from 5am to 6am has allowed me to sleep more which in turn makes me more active during the day and with less cravings.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <h3 className={`${theme.primaryText} font-medium text-[12px] leading-[21px] mb-3`}>Being consistent in working on my projects</h3>
              <p className=' text-[12px] leading-6'>Early planning for a minimal task management app.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 * 0.2 }}
              className={`mb-10 `}
            >
              <p className=' text-[12px] leading-6'>I plan to update this page regularly, reflecting on my progress and adjusting my focus as needed. Stay tuned for the next update! This is a now page, if you do not have one, consider adding one to your site</p>
            </motion.div>
          </section>

          <section className="my-12">
            <div className=''>
              <h2 className={`${theme.primaryText} text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}><span className='opacity-50'>Contact </span></h2>
            </div>
            <motion.div className='flex items-center justify-between'>
              <span>
                <p className='text-xs'>Email</p>
                <p className='text-sm'>Lilianokeke.ca@gmail.com</p>
              </span>
              <span>
                <p className='text-xs'>Email</p>
                <p className='text-sm'>Lilianokeke.ca@gmail.com</p>
              </span>
              <span>
                <p className='text-xs'>Email</p>
                <p className='text-sm'>Lilianokeke.ca@gmail.com</p>
              </span>
            </motion.div>
          </section>
        </div>

        <div className="w-[20%] bg-gray-100 flex items-center justify-center relative">
          <div className="h-full w-full absolute inset-0">
            <img
              src="./image/profile-photo.jpeg"
              alt=""
              className="object-cover h-full w-full absolute top-0 left-0 opacity-80"
            />
            <div
              className={`absolute inset-0 mix-blend-color 
        ${theme.secondaryText === 'text-[#D1D1D6]' ? 'bg-[#D1D1D6]' :
                  theme.secondaryText === 'text-[#70707B]' ? 'bg-[#70707B]/40' :
                    theme.secondaryText === 'text-[#875BF7]' ? 'bg-[#875BF7]/40' :
                      theme.secondaryText === 'text-[#06AED4]' ? 'bg-[#06AED4]/40' :
                        theme.secondaryText === 'text-[#D444F1]' ? 'bg-[#D444F1]/40' :
                          theme.secondaryText === 'text-[#EE46BC]' ? 'bg-[#EE46BC]/40' :
                          theme.secondaryText === 'text-[#16B364]' ? 'bg-[#16B364]/40' :
                          theme.secondaryText === 'text-[#2970FF]' ? 'bg-[#2970FF]/40' :
                          theme.secondaryText === 'text-[#FF4405]' ? 'bg-[#864530]/40' :
                          theme.secondaryText === 'text-[#EAAA08]' ? 'bg-[#EAAA08]/40' :
                            'bg-gray-500'}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;