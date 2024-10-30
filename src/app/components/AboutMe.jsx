import Image from "next/image";
import React from "react";
import avatar from "../assets/avatar.png";

const AboutMe = ({ showResume, setShowResume }) => {
  return (
    <div className="about-me  w-screen  box-border p-5 flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-400 text-lg">MY BIO</p>
        <h5 className="text-white text-2xl">
          About <span className="text-teal-400">Me</span>.
        </h5>
      </div>
      <div className="flex items-center box-border p-5 justify-center gap-10 lg:gap-20 flex-wrap ">
        <div className="w-auto lg:max-w-[500px] lg:max-h-[500px] border border-teal-200 bg-teal-700  rounded-full">
          <Image
            alt="img"
            className="w-auto h-auto lg:max-w-[500px] lg:max-h-[500px] rounded-full"
            src={avatar}
          />
        </div>
        <div className="w-[320px] lg:w-[440px] text-white flex flex-col gap-5 ">
          <h5>
            As an undergraduate in Computer Science, I've delved deep into the
            realms of technology, honing my skills across multiple domains. With
            certifications validating my proficiency, I've navigated through
            frontend and backend development, mastering languages like HTML,
            CSS,Javascript,React,Next.js,TailwindCss Java, and Node.js.
          </h5>
          <h5>
            My journey in the tech industry has been a blend of learning and
            application. Through hands-on experiences, I've cultivated a robust
            understanding of software development, leveraging frameworks like
            Spring Boot and Express to build scalable solutions. This practical
            expertise has been further enriched by theoretical knowledge gained
            in academia.
          </h5>
          <h5>
            Adding to my credentials is a commendable reference letter from a
            prominent company, attesting to my dedication and competence. With a
            commitment to continuous growth and innovation, I aspire to
            contribute meaningfully to the ever-evolving landscape of
            technology, driving progress and creating impactful solutions.
          </h5>
          <button
            onClick={() => {
              setShowResume(true);
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls smoothly to the top
            }}
            className="text-black max-w-[170px] bg-teal-400 box-border p-3 flex items-center gap-3"
          >
            <span className="font-medium">View Resume</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                d="M48 13a4 4 0 0 0-4-4H33V7a4 4 0 0 0-4-4H19a4 4 0 0 0-4 4v2H4a4 4 0 0 0-4 4c0 4.57-.49 7.57 2 10.64V41a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4V23.64c2.43-3 2-5.54 2-10.64zM17 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H17zm25 36H6a2 2 0 0 1-2-2V25.48C6.88 27.41 8.36 27 20 27v1a1 1 0 0 0 0 2c0 2-.13 2.45.45 2.83C23.7 35 23.59 35 24 35s.27 0 3.55-2.17c.57-.37.45-.73.45-2.83a1 1 0 0 0 0-2v-1c11.21 0 13 .49 16-1.52V41a2 2 0 0 1-2 2zM20 22v-2h8v2zm6 2v4h-4v-4zm-4 6h4v1.46l-2 1.34-2-1.34zm24-12a7 7 0 0 1-7 7H28v-1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1H9a7 7 0 0 1-7-7v-5a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2z"
                data-name="Brief Case"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex gap-9 flex-wrap box-border p-5">
        <div className="flex flex-col gap-4 max-w-[500px]">
          <h5 className="text-white text-2xl">
            Technical <span className="text-teal-400">skills</span>{" "}
          </h5>
          <p className="text-white">
            My technical prowess spans a spectrum of languages and frameworks,
            from frontend staples like HTML, CSS,JavaScript,React,Next.js and
            TailwindCss to robust backend technologies including Java, Spring
            Boot, Node.js, and Express. With a solid foundation in Computer
            Science and hands-on experience in software development, I am adept
            at crafting efficient and scalable solutions tailored to meet
            diverse user needs.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap max-w-[400px]">
          <h4 className="box-border rounded-full p-5 text-white about-skills border border-teal-400">
            HTML5
          </h4>
          <h4 className="box-border rounded-md p-5 text-white about-skills border border-teal-400">
            JAVASCRIPT
          </h4>
          <h4 className="box-border rounded-full p-5 text-white about-skills border border-teal-400">
            CSS3
          </h4>
          <h4 className="box-border rounded-lg p-5 text-white about-skills border border-teal-400">
            TAILWINDCSS
          </h4>
          <h4 className="box-border rounded-full p-5 text-white about-skills border border-teal-400">
            REACT
          </h4>
          <h4 className="box-border rounded-2xl p-5 text-white about-skills border border-teal-400">
            VUE.js
          </h4>
          <h4 className="box-border rounded-full p-5 text-white about-skills border border-teal-400">
            NODE.JS
          </h4>
          <h4 className="box-border rounded-lg p-5 text-white about-skills border border-teal-400">
            EXPRESS.JS
          </h4>
          <h4 className="box-border rounded-full p-5 text-white about-skills border border-teal-400">
            JAVA
          </h4>
          <h4 className="box-border rounded-lg p-5 text-white about-skills border border-teal-400">
            SPRING BOOT
          </h4>
          <h4 className="box-border rounded-full p-5 text-white about-skills border border-teal-400">
            MONGO DB
          </h4>
          <h4 className="box-border rounded-bl-2xl p-5 text-white about-skills border border-teal-400">
            SQL
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
