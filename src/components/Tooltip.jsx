import { cloneElement, useId } from "react";
import { useTheme } from "../context/ThemeContext";

export const Tooltip = ({ content, children }) => {
  const { theme } = useTheme();
  const tooltipId = useId();
  const isDark = theme === "dark";

  return (
    <span className="group/tooltip relative inline-flex">
      {cloneElement(children, { "aria-describedby": tooltipId })}
      <span
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium shadow-lg opacity-0 invisible transition-all duration-200 group-hover/tooltip:visible group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100 ${
          isDark
            ? "bg-gray-800 border-gray-700 text-white shadow-purple-900/30"
            : "bg-white border-gray-200 text-gray-900 shadow-primary-900/20"
        }`}
      >
        <span className="absolute inset-x-0 top-0 h-0.5 rounded-t-lg bg-gradient-to-r from-primary-500 to-purple-500"></span>
        {content}
        <span
          className={`absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        ></span>
      </span>
    </span>
  );
};
