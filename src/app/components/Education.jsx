import React, { useState } from "react";
import Image from "next/image";
import jagaadAcademy from "../assets/jagaadAcademy.jpeg";
import { AnimatedSection } from "../utils/animations";
import { motion } from "framer-motion";

import {
  cardVariants,
  imageVariants,
  AnimatedCard,
  AnimatedImage,
} from "../utils/animations";
const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const educationData = [
    {
      id: 0,
      title: "Computer Science",
      items: [
        {
          institution: "University of Mother Teresa",
          period: "2020 - Current",
          degree: "Bachelor of Science in Computer Science",
          description:
            "Comprehensive computer science education covering fundamental and advanced concepts in programming, algorithms, and software development.",
          achievements: [
            "Currently completing degree program",
            "Completed coursework in data structures and algorithms",
            "Studied database systems and web technologies",
          ],
        },
        {
          institution: "Frontend Internship",
          period: "2023",
          degree: "Practical Frontend Experience",
          description:
            "Hands-on experience working on production frontend code in a professional environment.",
          achievements: [
            "Gained real-world development experience",
            "Worked with team collaboration tools",
            "Learned industry best practices",
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Frontend Academy",
      items: [
        {
          institution: "Jagaad Academy",
          period: "2022 - 2023",
          degree: "Frontend Development Program",
          description:
            "Intensive frontend development training focusing on modern JavaScript frameworks and best practices.",
          achievements: [
            "Mastered React.js and modern JavaScript (ES6+)",
            "Learned state management and component architecture",
            "Completed multiple real-world projects",
          ],
          image: jagaadAcademy,
          showImageSeparately: true,
        },
      ],
    },
    {
      id: 2,
      title: "Java Academy",
      items: [
        {
          institution: "Java Advanced Course",
          period: "2023-2024",
          degree: "Core Java Certification",
          description:
            "Comprehensive Java programming course covering object-oriented programming and advanced features.",
          achievements: [
            "Mastered core Java concepts",
            "Learned multithreading and collections",
            "Completed practical programming assignments",
          ],
        },
        {
          institution: "Online Spring Boot Course",
          period: "2024",
          degree: "Spring Framework Certification",
          description:
            "Specialized training in Spring Boot for building enterprise Java applications.",
          achievements: [
            "Learned Spring Boot fundamentals",
            "Built RESTful APIs with Spring",
            "Connected applications to databases",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Online Courses",
      items: [
        {
          institution: "Udemy",
          period: "2022",
          degree: "Frontend Development Specialization",
          description:
            "Comprehensive frontend development training covering modern JavaScript, responsive design, and popular CSS frameworks.",
          achievements: [
            "Completed 50+ hour JavaScript Mastery course (ES6+, Async JS, OOP)",
            "Developed 15+ projects using HTML5, CSS3, and Tailwind CSS",
            "Built responsive, mobile-first websites with CSS Grid and Flexbox",
            "Created interactive UIs with modern CSS animations and transitions",
            "Learned advanced debugging and browser developer tools",
          ],
        },
        {
          institution: "Udemy",
          period: "2024",
          degree: "Backend Development with Node.js",
          description:
            "Full-stack JavaScript training focusing on server-side development, databases, and API integration.",
          achievements: [
            "Built RESTful APIs with Node.js and Express",
            "Implemented authentication using JWT and sessions",
            "Designed database schemas with MongoDB and Mongoose",
            "Developed full CRUD applications with frontend-backend integration",
            "Learned deployment strategies for Node.js applications",
            "Practiced error handling and security best practices",
          ],
        },
      ],
    },
  ];

  return (
    <div className="services-bg ">
      <div className="text-white p-6 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-400">
          Education
        </h2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {educationData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === index
                  ? "bg-teal-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 p-6 rounded-lg">
          {activeTab === 1 ? (
            // Special layout for Jagaad Academy (Frontend Academy tab)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column - Education details */}
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className="bg-gray-700 p-5 rounded-lg border-l-4 border-teal-500"
              >
                <div className="flex justify-between items-start mb-3">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-teal-300"
                  >
                    {educationData[1].items[0].institution}
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-600 text-sm px-2 py-1 rounded"
                  >
                    {educationData[1].items[0].period}
                  </motion.span>
                </div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg font-semibold mb-2"
                >
                  {educationData[1].items[0].degree}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 mb-4"
                >
                  {educationData[1].items[0].description}
                </motion.p>
                <div className="mt-4">
                  <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="font-medium text-teal-200 mb-2"
                  >
                    Key Achievements:
                  </motion.h5>
                  <ul className="space-y-2">
                    {educationData[1].items[0].achievements.map(
                      (achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-teal-400 mr-2">✓</span>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>

              {/* Right column - Just the image */}
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageVariants}
                className="bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center p-2"
              >
                <Image
                  src={educationData[1].items[0].image}
                  alt={educationData[1].items[0].institution}
                  className="object-cover  md:max-w-[400px] rounded-lg"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          ) : (
            // Default layout for other tabs
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData[activeTab].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardVariants}
                  className="bg-gray-700 p-5 rounded-lg border-l-4 border-teal-500"
                >
                  <div className="flex justify-between items-start mb-3">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold text-teal-300"
                    >
                      {item.institution}
                    </motion.h3>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-gray-600 text-sm px-2 py-1 rounded"
                    >
                      {item.period}
                    </motion.span>
                  </div>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg font-semibold mb-2"
                  >
                    {item.degree}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 mb-4"
                  >
                    {item.description}
                  </motion.p>
                  <div className="mt-4">
                    <motion.h5
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="font-medium text-teal-200 mb-2"
                    >
                      Key Achievements:
                    </motion.h5>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-teal-400 mr-2">✓</span>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
