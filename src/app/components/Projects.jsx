import Image from "next/image";
import React from "react";
import ecommerce from "../assets/ecommerce.png";
const Projects = () => {
    const projectsDetails = [
        {
            image: ecommerce,
            title: "E-Commerce",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: ecommerce,
            title: "E-Commerce",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: ecommerce,
            title: "E-Commerce",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: ecommerce,
            title: "E-Commerce",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: ecommerce,
            title: "E-Commerce",
            description:
                "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
            image: ecommerce,
            title: "E-Commerce",
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
                        <div className="border services-box-bg border-teal-400 rounded-md">
                            <div className="w-80 h-72 lg:w-96 lg:h-80 box-border p-5">
                                <Image src={box.image} />
                            </div>
                        </div>
                        <div className="w-80 box-border px-5 pb-1">
                            <h5 className="text-white text-xl ">{box.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
