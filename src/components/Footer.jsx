import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className="mt-16 mb-4">
      <span className="">
        <span
          className="block h-[1px] w-full opacity-30"
          style={{ backgroundColor: theme.primaryText }}
        />
      </span>

      <div className="mt-2">
        <p className="text-sm opacity-50">
          © {new Date().getFullYear()} - Building Bloques Creative Studio.
        </p>
       
      </div>
    </div>
  );
}
