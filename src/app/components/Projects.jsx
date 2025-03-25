import Image from "next/image";
import React from "react";
import ecommerce from "../assets/ecommerce.png";
import nfters from "../assets/web11.png";
import shapeVoice from "../assets/web33.png";
import banking from "../assets/banking.png";
import news from "../assets/news.png";

const ProjectCard = ({ image, title, description, github, live, tags }) => {
  return (
    <div className="border-2 services-box-bg border-teal-400 rounded-md overflow-hidden transition-all duration-300 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/20">
      <div className="relative h-48 overflow-hidden">
        <Image
          alt={title}
          src={image}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h5 className="text-white text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-teal-900/50 text-teal-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-white">
          <a
            className="box-border p-2 border border-teal-500 rounded-md hover:bg-teal-900/30 transition-colors text-sm flex-1 text-center"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="box-border p-2 border bg-teal-600 border-teal-600 rounded-md hover:bg-teal-700 transition-colors text-sm flex-1 text-center"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsDetails = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart functionality, user authentication, and payment processing.",
      image: ecommerce,
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-demo.com",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "NFT Marketplace",
      description:
        "Platform for buying and selling NFTs with wallet integration and bidding system.",
      image: nfters,
      github: "https://github.com/yourusername/nft-marketplace",
      live: "https://your-nft-demo.com",
      tags: ["Next.js", "Solidity", "Web3.js", "Ethereum"],
    },
    {
      title: "Banking App",
      description:
        "Modern banking interface with transaction history, transfers, and account management.",
      image: banking,
      github: "https://github.com/yourusername/banking-app",
      live: "https://your-banking-demo.com",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
    },
    {
      title: "News Aggregator",
      description:
        "Real-time news aggregator pulling from multiple sources with personalized feeds.",
      image: news,
      github: "https://github.com/yourusername/news-aggregator",
      live: "https://your-news-demo.com",
      tags: ["Next.js", "News API", "TypeScript", "SWR"],
    },
  ];

  return (
    <div className="services-bg pb-10 w-screen flex items-center gap-5 lg:pt-[75px] justify-center flex-col">
      <div className="justify-center flex flex-col items-center mb-8">
        <h5 className="text-gray-400 text-lg">PORTFOLIO</h5>
        <h4 className="text-white text-2xl">
          Featured <span className="text-teal-400">projects</span>
        </h4>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8 max-w-[1400px] px-4">
        {projectsDetails.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
