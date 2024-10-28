import Image from "next/image";
import { useState } from "react";
import ResumeImg1 from "../assets/1.png";
import ResumeImg2 from "../assets/2.png";
import Remove from "../assets/remove.png";
const Resume = ({ showResume, setShowResume }) => {
  return (
    <div className={showResume ? "flex justify-center w-full" : "hidden"}>
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          showResume ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <div className={"box-border p-4 max-w-3xl absolute mt-6 z-50"}>
        <button
          className="absolute top-6 right-6"
          onClick={() => setShowResume(false)}
        >
          <Image className="size-8" src={Remove} />
        </button>
        <Image src={ResumeImg1} alt="Resume Image 1" />
        <Image src={ResumeImg2} alt="Resume Image 2" />
      </div>
    </div>
  );
};

export default Resume;
