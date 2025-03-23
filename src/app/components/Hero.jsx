"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";
import Image from "next/image";
import heroBg from "../assets/background.png";

const Hero = ({ scrollToBottom, showResume, setShowResume }) => {
  return (
    <div className="relative">
      <Image className="absolute -z-10 w-screen h-full " src={heroBg} />
      <div className="z-10">
        <Navbar showResume={showResume} setShowResume={setShowResume} />
        <div className="flex flex-col box-border p-4 justify-center gap-3 min-h-80 items-center">
          <h2 className="text-white md:text-3xl font-poppins">
            Hi, I am <span className="text-teal-400">Blend Emini</span>
          </h2>
          <h3 className="text-white md:text-2xl font-poppins min-w-64 max-w-3xl text-center">
            A seasoned{" "}
            <span className="text-teal-400"> Full Stack Developer</span> with a
            passion for crafting elegant solutions and bringing ideas to life.
          </h3>
          <div className="flex gap-3 pt-5 flex-wrap">
            <a href="https://github.com/blendEmini">
              <FaGithub className="fill-white text-5xl transition-transform transform hover:scale-110 hover:text-teal-400 hover:shadow-lg" />
            </a>
            <a href="https://www.linkedin.com/in/blendemini">
              <FaLinkedin className="fill-white text-5xl transition-transform transform hover:scale-110 hover:text-teal-400 hover:shadow-lg" />
            </a>

            <FaEnvelope
              className="fill-white text-5xl transition-transform transform hover:scale-110 hover:text-teal-400 hover:shadow-lg cursor-pointer"
              onClick={scrollToBottom}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
