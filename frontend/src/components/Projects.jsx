import React, { useState } from "react";
import { ChevronLeftIcon} from '@heroicons/react/24/solid'

const projects = [
  {
    name: "E-commerce Website",
    description:
      "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
    images: ["/images/scatch1.png", "/images/scatch2.png"],
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://live-demo-ecommerce.com",
    github: "https://github.com/username/project2",
  },
  {
    name: "Social Networking Platform",
    description:
      "A platform for users to create profiles, share posts, and interact with others. Features include user authentication, post liking, and following functionality.",
    images: ["/images/social-project1.png", "/images/social-project2.png", "/images/social-project3.png"],
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://live-demo-link.com",
    github: "https://github.com/username/project1",
  },
  {
    name: "E-commerce Website",
    description:
      "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
    images: [ "/images/graph3.png","/images/graph4.png","/images/graph1.png","/images/graph2.png"],
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://live-demo-ecommerce.com",
    github: "https://github.com/username/project2",
  },
  {
    name: "E-commerce Website",
    description:
      "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
    images: ["/images/sundown1.png","/images/sundown2.png", "/images/sundown3.png", "/images/sundown4.png"],
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://live-demo-ecommerce.com",
    github: "https://github.com/username/project2",
  },
  {
      name: "E-commerce Website",
    description:
      "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
    images: ["/images/sorting1.png", "/images/sorting2.png"],
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://live-demo-ecommerce.com",
    github: "https://github.com/username/project2",
  },
  {
      name: "E-commerce Website",
      description:
      "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
    images: ["/images/studysync.png","/images/studysync2.png", "/images/studysync3.png"],
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://live-demo-ecommerce.com",
    github: "https://github.com/username/project2",
},
{
  name: "E-commerce Website",
  description:
    "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
  images: ["/images/myntra1.png", "/images/myntra2.png"],
  techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
  liveDemo: "https://live-demo-ecommerce.com",
  github: "https://github.com/username/project2",
},
];

function Project() {
  // Track the current slide index for each project
  const [currentSlides, setCurrentSlides] = useState(
    projects.map(() => 0) // Initialize with 0 for all projects
  );

  const handleNext = (index) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, i) =>
        i === index ? (slide + 1) % projects[index].images.length : slide
      )
    );
  };

  const handlePrev = (index) => {
    setCurrentSlides((prevSlides) =>
      prevSlides.map((slide, i) =>
        i === index
          ? (slide - 1 + projects[index].images.length) %
            projects[index].images.length
          : slide
      )
    );
  };

  return (
    <div className="min-h-screen text-white p-8 border-t border-gray-600 pt-12 mt-12">
        <div className='-z-10 color4 w-96 h-96 opacity-70 opacity-30 blur-3xl shadow-2xl shadow-sky-500 scale-150 left-96 bg-sky-500 absolute'></div>
        <div className='-z-10 color5 w-96 h-96 opacity-70 opacity-30 blur-3xl shadow-2xl shadow-blue-500 scale-125 left-96 bg-blue-500 absolute'></div>
      <h1 className="text-xl font-semibold mb-2 ml-3">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-600 overflow-hidden flex flex-col border-2 border-zinc-400"
          >
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={project.images[currentSlides[index]]}
                alt={`Slide ${currentSlides[index]}`}
                className="w-full h-full object-fill"
              />
              <button
                onClick={() => handlePrev(index)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-20 px-1 text-center text-black  py-1 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={() => handleNext(index)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-20 px-1 text-center text-black  py-1 rounded-full"
              >
                ▶
              </button>
            </div>

            <div className="p-4 flex flex-col min-h-5 h-full">
            {/* Project Title */}
            <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
            
            {/* Project Description */}
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            
            {/* Tech Stack */}
            <div className="">
                {project.techStack.map((tech, idx) => (
                <button
                    key={idx}
                    className="bg-gray-500 rounded-md px-3 py-1 m-1 text-xs text-black"
                >
                    {tech}
                </button>
                ))}
            </div>
            
            {/* Spacer to push buttons to the bottom */}
            <div className="mt-auto flex justify-between items-center">
                <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition"
                >
                Live Demo
                </a>
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                GitHub
                </a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
