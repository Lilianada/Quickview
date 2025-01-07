import React from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <section className="hidden lg:flex flex-col">
      <div id="desktop-contact" className="my-12">
        <div className="">
          <h2
            className={`text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}
            style={{ color: theme.primaryText }}
          >
            Contact
          </h2>
        </div>
        <div className="space-y-3">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
