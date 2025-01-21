import React from "react";
import { useTheme } from "../context/ThemeContext";
import { stacks } from "../utils/data";

const Stack = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div id="stack" className="lg:my-12 lg:min-h-screen">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-right lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 ml-auto`}
        >
          <span className="opacity-70">My </span>
          <span style={{ color: theme.primaryText }}>Stack</span>{" "}
        </h2>
        {stacks.map((stack, index) => (
          <div
            key={index}
            className={`flex mb-6 rounded-lg w-full p-5 gap-4`}
            style={{
              color: theme.primaryText,
              backgroundColor: theme.card,
            }}
          >
            <div className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center">
              <img
                src={stack.image}
                alt={stack.name}
                className="h-10 w-10 object-cover rounded-full"
              />
            </div>
            <div className="w-4/5">
              <h3 className="font-bold text-lg">{stack.name}</h3>
              <span className="text-xs rounded opacity-70">{stack.tags}</span>
              <p className="text-sm mt-4 opacity-70">{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
