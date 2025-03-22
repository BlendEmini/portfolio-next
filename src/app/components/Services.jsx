import Image from "next/image";
import React from "react";
import devIcon from "../assets/dev.svg";
import devWhite from "../assets/devWhite.svg";
import seo from "../assets/seo.svg";
import helpDesk from "../assets/helpDesk.png";
import quality from "../assets/quality.png";
import email from "../assets/email.png";
const Services = () => {
  return (
    <div>
      <div className="services-bg p-7 flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-400 text-xl">Services</p>
          <h5 className="text-white text-3xl">
            What <span className="text-teal-400">I Do</span>.
          </h5>
        </div>
        <div className=" justify-center items-center flex flex-wrap gap-7">
          <div className="w-80 h-72 flex flex-col gap-4 bg-teal-400 box-border p-5">
            <Image width={52} src={devIcon} />
            <h4 className="text-slate-900 font-bold text-2xl">
              Frontend Development
            </h4>
            <p className="text-slate-900 font-medium">
              I leverage a diverse skill set spanning HTML, CSS, JavaScript,
              React, Next.js, and Tailwind CSS to craft elegant digital
              solutions tailored to user needs.
            </p>
          </div>
          <div className="w-80 h-72 flex flex-col gap-4 services-box-bg border border-teal-400 box-border p-5">
            <Image width={52} src={devWhite} />
            <h4 className="text-white font-bold text-2xl">
              Backend Development
            </h4>
            <p className="text-white  font-medium">
              I craft robust digital solutions using Java, Spring Boot, Node.js,
              Express, MongoDB, PostgreSQL, and Supabase, ensuring seamless
              scalability and efficiency.
            </p>
          </div>
          <div className="w-80 h-72 flex flex-col gap-4 services-box-bg border border-teal-400 box-border p-5">
            <Image alt="img" width={52} src={seo} />
            <h4 className="text-white font-bold text-2xl">SEO</h4>
            <p className="text-white  font-medium">
              I offer website optimization, enhancing performance, SEO, and UX.
              From code to content, I ensure online success.
            </p>
          </div>
        </div>
      </div>
      <div className="services-bg p-7 flex flex-col gap-4">
        <div className=" justify-center items-center flex flex-wrap gap-7">
          <div className="w-80 h-72 flex flex-col gap-4 border services-box-bg border-teal-400 box-border p-5">
            <Image width={52} src={quality} />
            <h4 className="text-white font-bold text-2xl">Quality Engineer</h4>
            <p className="text-white font-medium">
              I specialize in automated testing, ensuring software reliability
              and performance with Jest, Cypress, and integration testing
              techniques.
            </p>
          </div>
          <div className="w-80 h-72 flex flex-col gap-4 services-box-bg border border-teal-400 box-border p-5">
            <Image className="fill-white " width={52} src={helpDesk} />
            <h4 className="text-white font-bold text-2xl">Help Desk Support</h4>
            <p className="text-white  font-medium">
              I provide technical support, troubleshooting, and issue
              resolution, ensuring seamless user experiences and system
              efficiency.
            </p>
          </div>
          <div className="w-80 h-72 flex flex-col gap-4 services-box-bg border border-teal-400 box-border p-5">
            <Image alt="img" width={52} src={email} />
            <h4 className="text-white font-bold text-2xl">Email Developer</h4>
            <p className="text-white  font-medium">
              I design and develop responsive, engaging email templates
              optimized for deliverability and compatibility across various
              email clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
