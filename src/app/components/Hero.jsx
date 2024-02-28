import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="hero-bg">
            <Navbar />
            <div className="flex flex-col box-border p-4 justify-center gap-3 min-h-80 items-center">
                <h2 className="text-white md:text-3xl font-poppins">
                    Hi, I am <span className="text-teal-400">Blend Emini</span>
                </h2>
                <h3 className="text-white md:text-2xl font-poppins min-w-64 max-w-3xl text-center">
                    A seasoned{" "}
                    <span className="text-teal-400"> Full Stack Developer</span>{" "}
                    with a passion for crafting elegant solutions and bringing
                    ideas to life.
                </h3>
                <div className="flex gap-3 pt-5 flex-wrap">
                    <FaGithub className="fill-white text-5xl" />
                    <FaLinkedin className="fill-white text-5xl" />

                    <FaTwitter className="fill-white text-5xl" />

                    <FaEnvelope className="fill-white text-5xl" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
