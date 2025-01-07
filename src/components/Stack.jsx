import React from "react";
import { useTheme } from "../context/ThemeContext";
import { stacks } from "./data";

const Stack = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div id="stack" className="lg:hidden">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}
        >
          <span className="opacity-70">My </span>
          <span style={{ color: theme.primaryText }}>Stack</span>{" "}
        </h2>
        {stacks.map((stack, index) => (
          <div
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
              <span className="text-xs rounded opacity-70">{stack.tags}</span>
              <p className="text-sm mt-4 opacity-70">{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="stack" className="hidden lg:flex flex-col">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-right`}
        >
          <span className="opacity-70">My </span>
          <span style={{ color: theme.primaryText }}>Stack</span>{" "}
        </h2>
        {stacks.map((stack, index) => (
          <div
            key={index}
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
