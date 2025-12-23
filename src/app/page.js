"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { useRef, useState } from "react";
import Resume from "./components/Resume";
import Education from "./components/Education";
import PortfolioNoticeModal from "./components/PortfolioNoticeModal";

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden ">
      <PortfolioNoticeModal />
      <Resume showResume={showResume} setShowResume={setShowResume} />
      <Hero
        setShowResume={setShowResume}
        showResume={showResume}
        scrollToBottom={scrollToBottom}
      />
      <Education />
      <Services />
      <Projects />
      <AboutMe showResume={showResume} setShowResume={setShowResume} />
      <Contact bottomRef={bottomRef} />
    </div>
  );
}
