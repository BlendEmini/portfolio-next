import Image from "next/image";
import ViewResumeBtn from "./ViewResumeBtn";
import avatar from "../assets/avatar3.png";

const AboutMe = ({ showResume, setShowResume }) => {
  const skills = [
    "HTML5",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "CSS3",
    "TAILWINDCSS",
    "REACT",
    "VUE.js",
    "NEXT.JS",
    "NODE.JS",
    "EXPRESS.JS",
    "JAVA",
    "SPRING BOOT",
    "MONGO DB",
    "SQL",
    "GRAPHQL",
    "REST API",
    "CYPRESS",
    "JEST",
    "POSTMAN",
    "DOCKER",
    "GIT & GITHUB",
    "JIRA",
  ];

  const borderRadiusClasses = [
    "rounded-full",
    "rounded-md",
    "rounded-full",
    "rounded-full",
    "rounded-lg",
    "rounded-full",
    "rounded-2xl",
    "rounded-full",
    "rounded-full",
    "rounded-lg",
    "rounded-full",
    "rounded-lg",
    "rounded-full",
    "rounded-bl-2xl",
    "rounded-full",
    "rounded-lg",
    "rounded-b-lg",
    "rounded-lg",
    "rounded-r-lg",
    "rounded-l-xl rounded-tr-xl",
    "rounded-lg",
    "rounded-l-2xl",
  ];

  return (
    <div className="w-screen about-me box-border p-5 flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-400 text-lg">MY BIO</p>
        <h5 className="text-white text-2xl">
          About <span className="text-teal-400">Me</span>.
        </h5>
      </div>

      <div className="flex items-center box-border p-5 justify-center gap-10 lg:gap-20 flex-wrap">
        <div className="w-auto lg:max-w-[500px] lg:max-h-[500px] border border-teal-200 bg-teal-700 rounded-full">
          <Image
            alt="Profile picture"
            className="w-auto h-auto lg:max-w-[450px] lg:max-h-[450px] rounded-full"
            src={avatar}
          />
        </div>

        <div className="w-[320px] lg:w-[440px] text-white flex flex-col gap-5">
          <p>
            Computer Science undergraduate with expertise in full-stack
            development. Certified in key technologies including React, Next.js,
            Vue.js, and Node.js. Skilled in building responsive, scalable
            applications with modern frameworks.
          </p>
          <p>
            Hands-on experience developing real-world solutions using Spring
            Boot and Express. Combines practical knowledge with strong
            theoretical foundations from academic studies.
          </p>
          <p>
            Recognized with a reference letter for technical excellence and
            dedication. Committed to continuous learning and innovation in
            technology.
          </p>
          <ViewResumeBtn
            showResume={showResume}
            setShowResume={setShowResume}
          />
        </div>
      </div>

      <div className="flex items-center gap-9 flex-wrap box-border p-5">
        <div className="flex flex-col gap-4 max-w-[500px]">
          <h5 className="text-white text-3xl">
            Technical <span className="text-teal-400">skills</span>
          </h5>
          <p className="text-white">
            Full-stack developer proficient in frontend (HTML, CSS, JavaScript
            frameworks) and backend (Java, Node.js) technologies. Specializes in
            creating efficient, scalable solutions with clean architecture and
            modern tooling.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap max-w-[500px]">
          {skills.map((skill, index) => (
            <h4
              key={skill}
              className={`box-border p-3 text-white about-skills border border-teal-400 text-sm ${borderRadiusClasses[index]}`}
            >
              {skill}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
