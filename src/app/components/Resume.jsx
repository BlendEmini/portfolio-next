import Image from "next/image";
import { useState } from "react";
import ResumeImg1 from "../assets/1.png";
import ResumeImg2 from "../assets/2.png";
import Remove from "../assets/remove.png";
const Resume = ({ showResume, setShowResume }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          showResume ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowResume(false)}
      />

      <div
        className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-all duration-300 ${
          showResume ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setShowResume(false)}
          >
            <Image className="w-6  " src={Remove} alt="Close" />
          </button>
          <div className="p-6">
            <Image src={ResumeImg1} alt="Resume Page 1" />
            <Image src={ResumeImg2} alt="Resume Page 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
