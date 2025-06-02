import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

import sparklinggrape from "../assets/SG.png";
import movenzia from "../assets/MZ.png";
import decorify from "../assets/DF.png";
import inplace from "../assets/inplace.png";
import arborea from "../assets/arborea.png";

const Projects = () => {
  const projects = [
    {
      title: "Arborea",
      description:
        "Working as a Frontend Developer on a custom WordPress theme built from the ground up. I'm responsible for approximately 75% of the project's current implementation, using HTML, CSS, JavaScript, and PHP. The theme is fully responsive and tailored to meet specific design and functionality requirements. The project is ongoing and continues to evolve with new features and optimizations.",
      image: arborea,
      tags: ["Html", "Css", "Javascript", "Php"],
      link: "http://arborea.nohup.host/",
    },
    {
      title: "Inplace",
      description:
        "Currently working as a Quality Engineer, primarily focused on writing automated tests with Cypress, with occasional contributions to Angular-based frontend development.",
      image: inplace,
      tags: ["Angular", "Cypress", "TypeScript", "Testing"],
      link: "https://inplace.it/",
    },
    {
      title: "Decorify",
      description:
        "E-commerce platform I'm building in my free time featuring elegant UI with dark/light mode, backoffice, payment integration, and more (currently in development).",
      image: decorify,
      tags: ["Vue", "TypeScript", "Tailwind", "Node.js", "Express"],
      link: "https://decorify.netlify.app/",
    },
    {
      title: "SparklingGrape",
      description:
        "Developed frontend components and interfaces as a Frontend Developer. Created reusable UI components and implemented responsive designs.",
      image: sparklinggrape,
      tags: ["Vue", "TypeScript", "Tailwind"],
      link: "https://sparklingrape.com/",
    },
    {
      title: "Moveznia",
      description:
        "Worked as Frontend Developer on the backoffice system, with occasional backend assistance. Implemented complex business logic interfaces and admin panels.",
      image: movenzia,
      tags: ["Vue", "TypeScript", "CSS"],
      link: "https://www.movenzia.com/",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="py-24 px-4 about-me">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Selected <span className="text-teal-400">Work</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl">
            Professional projects and personal development
          </p>
        </div>

        <div className="space-y-32">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div
                  className={`order-1 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>
                </div>

                <div
                  className={`order-2 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-teal-400 text-lg font-mono">
                      0{currentPage * projectsPerPage + index + 1}
                    </span>
                    <div className="h-px w-16 bg-teal-400"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-teal-400 group-hover:text-white transition-colors"
                  >
                    View Project{" "}
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-16 gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`p-2 rounded-full ${
              currentPage === 0
                ? "text-gray-500 cursor-not-allowed"
                : "text-teal-400 hover:bg-gray-800"
            }`}
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === i
                    ? "bg-teal-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`p-2 rounded-full ${
              currentPage === totalPages - 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-teal-400 hover:bg-gray-800"
            }`}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
