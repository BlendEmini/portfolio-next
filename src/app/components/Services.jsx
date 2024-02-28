import Image from "next/image";
import React from "react";
import devIcon from "../assets/dev.svg";
import devWhite from "../assets/devWhite.svg";
import seo from "../assets/seo.svg";
const Services = () => {
    return (
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
                        I leverage a diverse skill set spanning HTML, CSS,
                        JavaScript, React, Next.js, and Tailwind CSS to craft
                        elegant digital solutions tailored to user needs.
                    </p>
                </div>
                <div className="w-80 h-72 flex flex-col gap-4 services-box-bg border border-teal-400 box-border p-5">
                    <Image width={52} src={devWhite} />
                    <h4 className="text-white font-bold text-2xl">
                        Backend Development
                    </h4>
                    <p className="text-white  font-medium">
                        I craft robust digital solutions using Java, Spring
                        Boot, Node.js, Express, MongoDB, PostgreSQL, and
                        Supabase, ensuring seamless scalability and efficiency.
                    </p>
                </div>
                <div className="w-80 h-72 flex flex-col gap-4 services-box-bg border border-teal-400 box-border p-5">
                    <Image width={52} src={seo} />
                    <h4 className="text-white font-bold text-2xl">SEO</h4>
                    <p className="text-white  font-medium">
                        I offer website optimization, enhancing performance,
                        SEO, and UX. From code to content, I ensure online
                        success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
