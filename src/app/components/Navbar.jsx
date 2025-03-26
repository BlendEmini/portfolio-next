import React from "react";
import ViewResumeBtn from "./ViewResumeBtn";

const Navbar = ({ setShowResume, showResume }) => {
  return (
    <div className="flex justify-center items-center md:gap-96 box-border py-6 ">
      <h3 className="font-pacifico w-80 md:w-auto text-white text-2xl md:text-5xl box-border p-2">
        Blend Emini - Portfolio
      </h3>
      <ViewResumeBtn showResume={showResume} setShowResume={setShowResume} />
    </div>
  );
};

export default Navbar;
