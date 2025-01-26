import React from "react";
import { useTheme } from "../context/ThemeContext";
import { stacks } from "../utils/data";

const Stack = () => {
  const { theme } = useTheme();
  return (
    <section className="lg:mb-32">
      <div id="stacks" className="lg:min-h-screen">
        <div className="lg:hidden grid items-center col-span-2 grid-cols-[1fr_auto] gap-4 mb-12">
          <span className="inline-block h-[1.5px] bg-current opacity-50 transition-all duration-300 w-full" />
          <h2
            className={`text-[20px] leading-[36px] font-semibold text-right lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 ml-auto`}
          >
            <span className="opacity-70">My </span>
            <span style={{ color: theme.primaryText }}>Stacks</span>{" "}
          </h2>
        </div>
        <h2
            className={`hidden lg:block text-[20px] leading-[36px] font-semibold text-right lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 ml-auto mb-12`}
          >
            <span className="opacity-70">My </span>
            <span style={{ color: theme.primaryText }}>Stacks</span>{" "}
          </h2>
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex mb-6 rounded-lg w-full p-5 gap-4 transition-all duration-500 hover:scale-90"
            style={{
              color: theme.primaryText,
              backgroundColor: theme.card,
            }}
          >
            <div className="bg-white p-2 rounded-full h-12 w-12 flex items-center justify-center">
              <img
                src={stack.image}
                alt={stack.name}
                className="h-8 w-8 object-cover rounded-full"
              />
            </div>
            <div className="w-4/5">
              <h3 className="font-bold text-lg">{stack.name}</h3>
              <p className="text-sm lg:text-base opacity-50">{stack.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
