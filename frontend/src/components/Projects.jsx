import React, { useState } from "react";
import { ChevronLeftIcon} from '@heroicons/react/24/solid'

const projects = [
  {
    name: "Social Networking Platform",
    description:
    "A platform for users to create profiles, share posts, and interact with others. Features include user authentication, post liking, and following functionality.",
    images: ["/images/social-project1.png", "/images/social-project2.png", "/images/social-project3.png"],
    techStack: ["React JS", "Node JS", "Express JS", "MongoDB","Tailwind CSS"],
    liveDemo: "https://social-media-networking-application.vercel.app/",
    github: "https://github.com/surajyadav1975/Social-media-networking-application",
    category: "MERN"
  },
  {
    name: "E-commerce Website",
    description:
      "An online shopping platform with product listing, cart, and admin features. Built using MERN stack for a seamless user experience.",
    images: ["/images/scatch1.png", "/images/scatch2.png"],
    techStack: ["React JS", "Node JS", "Express JS", "MongoDB","Tailwind CSS"],
    liveDemo: "https://backend-project-fxgs.onrender.com/",
    github: "https://github.com/surajyadav1975/Clothing-Brand",
    category: "MERN"
  },
  {
    name: "GraphPath Visualizer",
    description:
      "This project visualizes the working of graph traversal algorithms like BFS and Dijkstra, demonstrating the shortest path finding in a grid. The animation shows how the algorithms explore nodes, highlighting the path from the starting node to the destination. It allows users to interact with the grid by selecting custom start and end points",
    images: [ "/images/graph3.png","/images/graph4.png","/images/graph1.png","/images/graph2.png"],
    techStack: ["React JS", "JavaScript", "DSA", "BootStrap"],
    liveDemo: "https://dsa-projects-mu.vercel.app/",
    github: "https://github.com/surajyadav1975/dsa-projects",
    category: "DSA"
  },
  {
    name: "Sundown Studio",
    description:
      "Sundown is a frontend-only web application built using React, showcasing a variety of frontend skills. It incorporates smooth animations and eye-catching effects, demonstrating a polished user interface with modern design techniques. ",
    images: ["/images/sundown1.png","/images/sundown2.png", "/images/sundown3.png", "/images/sundown4.png"],
    techStack: ["React JS", "GSAP"],
    liveDemo: "https://web-dev-projects-olive.vercel.app/",
    github: "https://github.com/surajyadav1975/HTML-CSS-Projects",
    category: "Frontend"
  },
  {
      name: "Sorting Visualizer",
    description:
      "SortingVisualizer allows users to see animated visualizations of various sorting algorithms, including Quick Sort, Merge Sort, and Bubble Sort. It features options to adjust the speed and the number of array elements for dynamic demonstrations.",
    images: ["/images/sorting1.png", "/images/sorting2.png"],
    techStack: ["React JS", "JavaScript", "DSA", "BootStrap"],
    liveDemo: "https://dsa-projects-iwk6.vercel.app/",
    github: "https://github.com/surajyadav1975/dsa-projects",
    category: "DSA"
  },
  {
      name: "StudySync",
      description:
      "StudySync is a React-based frontend web app designed to enhance the learning experience. It showcases skills in React with a focus on user-friendly design and engaging UI elements.",
    images: ["/images/studysync.png","/images/studysync2.png", "/images/studysync3.png"],
    techStack: ["React JS", "BootStrap"],
    liveDemo: "https://html-css-projects-2.vercel.app/",
    github: "https://github.com/surajyadav1975/HTML-CSS-Projects",
    category: "Frontend"
},
{
  name: "Myntra Clone",
  description:
    "MyntraClone is a React-based frontend replica of the Myntra e-commerce site, featuring product listings, an add-to-cart functionality, and a dedicated cart page. It demonstrates frontend skills with interactive UI elements and responsive design.",
  images: ["/images/myntra1.png", "/images/myntra2.png"],
  techStack: ["React JS", "JavaScript", "Bootstrap","HTML","CSS"],
  liveDemo: "https://myntra-seven-woad.vercel.app",
  github: "https://github.com/surajyadav1975/react-repo",
  category: "Frontend"
},
];

function Project() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
    const filteredprojects = selectedCategory === 'All' 
      ? projects 
      : projects.filter((project) => (project.category === selectedCategory));
  // Track the current slide index for each project
  const [currentSlides, setCurrentSlides] = useState(
    filteredprojects.map(() => 0) // Initialize with 0 for all projects
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
    <div className="min-h-screen text-white border-t border-gray-600 pt-12 mb-16">
        <div className='-z-10 color4 w-96 h-96 opacity-70 opacity-30 blur-3xl shadow-2xl shadow-sky-500 scale-150 left-96 bg-sky-500 absolute'></div>
        <div className='-z-10 color5 w-96 h-96 opacity-70 opacity-30 blur-3xl shadow-2xl shadow-blue-500 scale-125 left-96 bg-blue-500 absolute'></div>
        <div className='flex justify-between'>
        <h2 className="text-xl font-semibold mb-2 ml-3">My Skills</h2>

        <div className="mb-4">
          <select 
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)} 
            className="bg-black"
            style={{
              paddingRight: '8px',
              paddingTop:'1px',
              paddingBottom:'1px',
              backgroundSize: '16px', 
            }}
          >
            <option value="All">All</option>
            <option value="MERN">MERN</option>
            <option value="Frontend">Frontend</option>
            <option value="DSA">DSA</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredprojects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-600 overflow-hidden flex flex-col border-2 border-zinc-400"
          >
            <div className="relative w-full h-80 overflow-hidden">
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
