// Toast.js
import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-close the toast after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  // Determine the icon and background color based on the toast type
  const toastConfig = {
    success: {
      icon: "✅", // You can replace this with an SVG or icon library
      bgColor: "bg-green-500",
    },
    error: {
      icon: "❌", // You can replace this with an SVG or icon library
      bgColor: "bg-red-500",
    },
    default: {
      icon: "ℹ️",
      bgColor: "bg-blue-500",
    },
  };

  const { icon, bgColor } = toastConfig[type] || toastConfig.default;

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-6    rounded-lg shadow-lg text-white flex items-center animate-fade-in ${bgColor}`}
    >
      <span className="mr-2">{icon}</span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
