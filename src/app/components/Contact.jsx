"use client";
import Image from "next/image";
import React from "react";
import splash1 from "../assets/splash.png";
const Contact = () => {
    return (
        <div className="flex gap-10 box-border p-5 flex-col  items-center splash services-bg w-screen relative">
            <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 text-sm">GET IN TOUCH</p>
                <h4 className="text-white text-3xl">
                    Contact <span className="text-teal-400">Me</span>
                </h4>
                <h5 className="w-[300px] md:w-[500px] text-xl lg:w-[900px] text-white text-center">
                    I am currently open for any kind of work in Frontend
                    Development or Fullstack Development, whether it is
                    full-time, freelance, contract, or part-time.
                </h5>
            </div>
            <div className="about-skills justify-center items-center flex flex-wrap gap-20 box-border p-4 md:p-5 lg:p-12 rounded-xl">
                <div>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/blendxemini/byte-sized-chats-meet-the-developer-blend-emini?hide_event_type_details=1&hide_gdpr_banner=1"
                        style={{ minWidth: "320px" }}
                    ></div>
                    <script
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                        async
                    ></script>
                </div>
                <div className="flex flex-col gap-7">
                    <div>
                        <h5 className="text-white text-2xl">
                            Have an awesome project idea?
                        </h5>
                        <h5 className="text-teal-400 text-3xl">
                            Let's Discuss.
                        </h5>
                    </div>
                    <form className="flex flex-col gap-3">
                        <div>
                            <h6 className="text-white">Full Name</h6>
                            <input
                                placeholder="Enter Name"
                                type="text"
                                className="bg-transparent border border-gray-400 rounded-xl w-[300px] md:w-[500px] box-border p-2 "
                            />
                        </div>
                        <div>
                            <h6 className="text-white">Email Address</h6>
                            <input
                                placeholder="Enter Email"
                                type="email"
                                className="bg-transparent border border-gray-400 rounded-xl w-[300px] md:w-[500px] box-border p-2  "
                            />
                        </div>
                        <div className="">
                            <h6 className="text-white">Message</h6>
                            <textarea
                                placeholder="Enter Message"
                                className="bg-transparent border w-[300px] md:w-[500px] border-gray-400 rounded-xl box-border p-2 "
                            />
                        </div>
                        <button className="bg-teal-400 text-slate-800 box-border p-3 w-[150px]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
