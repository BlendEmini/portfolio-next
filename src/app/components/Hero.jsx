"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = ({ scrollToBottom }) => {
  const [displayText, setDisplayText] = useState("");
  const phrases = [
    "Full Stack Developer",
    "React Specialist",
    "Java Enthusiast",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= phrases[currentPhrase].length) {
        setDisplayText(phrases[currentPhrase].substring(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [currentPhrase]);

  return (
    <div className="relative h-[75vh] flex flex-col services-bg overflow-hidden">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-teal-400">Blend Emini</span>
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 h-10">
            {displayText}
            <span className="inline-block w-2 h-8 bg-teal-400 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-6 mt-12"
        >
          <a
            href="https://github.com/blendEmini"
            className="lg:text-5xl text-3xl text-white hover:text-teal-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/blendemini"
            className="lg:text-5xl text-3xl text-white hover:text-teal-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <button
            onClick={scrollToBottom}
            className="lg:text-5xl text-3xl text-white hover:text-teal-400 transition-colors"
          >
            <FaEnvelope />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
