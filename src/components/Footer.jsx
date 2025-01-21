import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className="mt-16">
      <span className="">
        <span
          className="block h-[1px] w-full opacity-30"
          style={{ backgroundColor: theme.primaryText }}
        />
      </span>

      <p className="mt-2 text-sm opacity-50">© {new Date().getFullYear()} - Lilian Okeke.</p>
    </div>
  );
}
