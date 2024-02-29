import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Services />
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    );
}