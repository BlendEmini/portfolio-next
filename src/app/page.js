"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { useRef, useState } from "react";
import Resume from "./components/Resume";

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden ">
      <Resume showResume={showResume} setShowResume={setShowResume} />
      <Hero
        setShowResume={setShowResume}
        showResume={showResume}
        scrollToBottom={scrollToBottom}
      />
      <Services />
      <Projects />
      <AboutMe showResume={showResume} setShowResume={setShowResume} />
      <Contact bottomRef={bottomRef} />
    </div>
  );
}
