import React from "react";

const ViewResumeBtn = ({ showResume, setShowResume }) => {
  return (
    <button
      onClick={() => setShowResume(!showResume)}
      className="relative whitespace-nowrap mr-3 group flex items-center justify-center gap-2 px-4 py-3 bg-teal-400 hover:bg-teal-500 text-gray-900 font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* Button text with transition */}
      <span className="relative z-10 transition-all duration-300 group-hover:tracking-wide">
        View Resume
      </span>

      {/* Animated document icon */}
      <svg
        className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-md bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:animate-pulse"></span>
    </button>
  );
};

export default ViewResumeBtn;
