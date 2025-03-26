"use client";
import React, { useState } from "react";
import Image from "next/image";
import jagaadAcademy from "../assets/jagaadAcademy.jpeg";
import { motion } from "framer-motion";

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
            "Comprehensive computer science education covering fundamental and advanced concepts.",
          achievements: [
            "Completed coursework in data structures and algorithms",
            "Studied database systems and web technologies",
            "Currently completing degree program",
          ],
        },
        {
          institution: "Frontend Internship",
          period: "2023",
          degree: "Practical Frontend Experience",
          description:
            "Hands-on experience working on production frontend code.",
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
            "Intensive training in modern JavaScript frameworks and best practices.",
          achievements: [
            "Mastered React.js and modern JavaScript (ES6+)",
            "Learned state management and component architecture",
            "Completed multiple real-world projects",
          ],
          image: jagaadAcademy,
        },
      ],
    },
    {
      id: 2,
      title: "Java Training",
      items: [
        {
          institution: "Java Advanced Course",
          period: "2023-2024",
          degree: "Core Java Certification",
          description:
            "Comprehensive Java programming course covering OOP and advanced features.",
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
            "Specialized training in Spring Boot for enterprise applications.",
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
          degree: "Frontend Development",
          description:
            "Training covering modern JavaScript, responsive design and CSS frameworks.",
          achievements: [
            "50+ hour JavaScript Mastery course",
            "5+ projects using HTML5/CSS3/Tailwind",
            "Responsive websites with CSS Grid/Flexbox",
          ],
        },
        {
          institution: "Udemy",
          period: "2024",
          degree: "Backend Development",
          description:
            "Node.js training focusing on server-side development and APIs.",
          achievements: [
            "Built RESTful APIs with Express",
            "MongoDB database design",
            "Authentication with JWT",
          ],
        },
      ],
    },
  ];

  return (
    <div className="services-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Education <span className="text-teal-400">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic and professional learning path
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-4 mb-6 hide-scrollbar">
          <div className="flex space-x-2 mx-auto">
            {educationData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? "bg-teal-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {educationData[activeTab].items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 h-full w-0.5 bg-teal-500 top-6 -translate-x-1/2" />
              <div className="absolute left-4 w-3 h-3 rounded-full bg-teal-400 top-1 -translate-x-1/2" />

              <div className={`pl-12 ${item.image ? "md:flex gap-8" : ""}`}>
                {item.image && (
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <Image
                      src={item.image}
                      alt={item.institution}
                      className="rounded-lg object-cover h-full max-h-64 w-full"
                      placeholder="blur"
                    />
                  </div>
                )}

                <div className={`${item.image ? "md:w-2/3" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-teal-300">
                      {item.institution}
                    </h3>
                    <span className="text-gray-400 text-sm mt-1 sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.degree}
                  </h4>
                  <p className="text-gray-300 mb-4">{item.description}</p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-teal-400 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Education;
