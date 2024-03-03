"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { useRef } from "react";

export default function Home() {
    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="">
            <Hero scrollToBottom={scrollToBottom} />
            <Services />
            <Projects />
            <AboutMe />
            <Contact bottomRef={bottomRef} />
        </div>
    );
}
