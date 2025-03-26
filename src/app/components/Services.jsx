import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import devIcon from "../assets/dev.svg";
import devWhite from "../assets/devWhite.svg";
import seo from "../assets/seo.svg";
import helpDesk from "../assets/helpDesk.png";
import quality from "../assets/quality.png";
import email from "../assets/email.png";

const Services = () => {
  const services = [
    {
      icon: devIcon,
      title: "Frontend Development",
      description:
        "I leverage HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS to craft elegant digital solutions tailored to user needs.",
      bgClass: "bg-teal-400",
      textClass: "text-slate-900",
    },
    {
      icon: devWhite,
      title: "Backend Development",
      description:
        "I craft robust solutions using Java, Spring Boot, Node.js, Express, MongoDB, PostgreSQL, and Supabase.",
      bgClass: "services-box-bg border border-teal-400",
      textClass: "text-white",
    },
    {
      icon: seo,
      title: "SEO",
      description:
        "Website optimization enhancing performance, SEO, and UX. From code to content, I ensure online success.",
      bgClass: "services-box-bg border border-teal-400",
      textClass: "text-white",
    },
    {
      icon: quality,
      title: "Quality Engineer",
      description:
        "Specialized in automated testing with Jest, Cypress, and integration testing techniques.",
      bgClass: "services-box-bg border border-teal-400",
      textClass: "text-white",
    },
    {
      icon: helpDesk,
      title: "Help Desk Support",
      description:
        "Technical support and troubleshooting for seamless user experiences and system efficiency.",
      bgClass: "services-box-bg border border-teal-400",
      textClass: "text-white",
    },
    {
      icon: email,
      title: "Email Developer",
      description:
        "Responsive, engaging email templates optimized for deliverability across all clients.",
      bgClass: "services-box-bg border border-teal-400",
      textClass: "text-white",
    },
  ];

  return (
    <div className="services-bg px-5 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-gray-400 text-lg md:text-xl mb-2">Services</p>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            What <span className="text-teal-400">I Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`rounded-lg p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${service.bgClass}`}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <h3
                  className={`font-bold text-xl md:text-2xl mb-3 ${service.textClass}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm md:text-base ${service.textClass} opacity-90 flex-grow`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
