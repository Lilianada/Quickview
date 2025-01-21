import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MdKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <section className="hidden lg:flex flex-col" >
      <div id="desktop-contact" className="mt-12">
        <div className="">
          <h2
            className={`text-[70px] font-[900] leading-[70px] w-1/3 mb-12`}
            
          >
            Contact
          </h2>
        </div>
        <div className="space-y-5 text-sm">
          <span className="flex items-center gap-2">
            <p className="shrink-0">Email</p>
            <span className="flex-grow">
              <span
                className="block h-[1px] w-full opacity-30"
                style={{ backgroundColor: theme.primaryText }}
              />
            </span>
            <span className="flex items-center gap-1.5" style={{ color: theme.accent }}>
              <a href="mailto:Lilianokeke.ca@gmail.com" className="shrink-0">
                Lilianokeke.ca@gmail.com
              </a>
              <MdKeyboardArrowRight />
            </span>
          </span>

          <span className="flex items-center gap-2">
            <p className="shrink-0">Twitter</p>
            <span className="flex-grow">
              <span
                className="block h-[1px] w-full opacity-30"
                style={{ backgroundColor: theme.primaryText }}
              />
            </span>
            <span className="flex items-center gap-1.5" style={{ color: theme.accent }}>
              <a href="http:" className="shrink-0">
                @Lilianokeke
              </a>
              <MdKeyboardArrowRight />
            </span>
          </span>

          <span className="flex items-center gap-2">
            <p className="shrink-0">LinkedIn</p>
            <span className="flex-grow">
              <span
                className="block h-[1px] w-full opacity-30"
                style={{ backgroundColor: theme.primaryText }}
              />
            </span>
            <span className="flex items-center gap-1.5" style={{ color: theme.accent }}>
              <a href="http:" className="shrink-0">
                @Lilianokeke
              </a>
              <MdKeyboardArrowRight />
            </span>
          </span>

          <span className="flex items-center gap-2">
            <p className="shrink-0">Github</p>
            <span className="flex-grow">
              <span
                className="block h-[1px] w-full opacity-30"
                style={{ backgroundColor: theme.primaryText }}
              />
            </span>
            <span className="flex items-center gap-1.5" style={{ color: theme.accent }}>
              <a href="http:" className="shrink-0">
                @Lilianokeke
              </a>
              <MdKeyboardArrowRight />
            </span>
          </span>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
