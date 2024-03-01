import Image from "next/image";
import React from "react";
import ecommerce from "../assets/ecommerce.png";
import nfters from "../assets/web11.png";
import shapeVoice from "../assets/web33.png";
import banking from "../assets/banking.png";
import news from "../assets/news.png";
const Projects = () => {
    const projectsDetails = [
        {
            image: news,
            title: "News Website",
            github: "#",
            live: "https://www.americanlensnews.com/",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },

        {
            image: ecommerce,
            title: "E-Commerce",
            live: "https://ecommerce-fe6-final.netlify.app/",
            github: "https://github.com/BlendEmini/ecommerce-shop",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: nfters,
            title: "NFTERS",
            live: "#",
            github: "https://github.com/BlendEmini/nfters",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: shapeVoice,
            title: "Shape Voice",
            github: "#",
            live: "#",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: banking,
            title: "Banking App",
            live: "https://banking-app-taupe.vercel.app/",
            github: "https://github.com/BlendEmini/banking-app",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
    ];

    return (
        <div className="services-bg pb-10 w-screen flex items-center gap-5 lg:pt-[75px] justify-center flex-col">
            <div className="justify-center flex flex-col  items-center">
                <h5 className="text-gray-400 text-lg">PORTFOLIO</h5>
                <h4 className="text-white text-2xl">
                    Featured <span className="text-teal-400">projects</span>
                </h4>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5 max-w-[1300px]">
                {projectsDetails.map((box, index) => (
                    <div key={index}>
                        <div className="border-2 services-box-bg border-teal-400 rounded-md">
                            <div>
                                <Image className="max-w-96" src={box.image} />
                            </div>
                        </div>
                        <div className=" box-border items-center flex justify-between px-5 py-2">
                            <h5 className="text-white text-xl ">{box.title}</h5>
                            <div className="flex gap-1 text-white">
                                <a
                                    className="box-border p-3 border border-teal-500  rounded-md
                                  "
                                    href={box.github}
                                >
                                    Github
                                </a>
                                <a
                                    className="box-border text-white p-3 border bg-teal-500 border-white  rounded-md
                                    "
                                    href={box.live}
                                >
                                    Live Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
