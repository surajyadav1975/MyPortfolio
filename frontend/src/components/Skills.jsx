import React, { useState } from 'react';

function Skills() {
  // Define the categories and skills
  const skills = [
    {
      name: "React JS",
      image: "/images/pngegg (3).png",
      category: "Frontend"
    },
    {
      name: "Node JS",
      image: "/images/nodejs.png",
      category: "Backend"
    },
    {
      name: "JavaScript",
      image: "/images/pngegg (2).png",
      category: "Frontend"
    },
    {
      name: "MongoDB",
      image: "/images/mongo.png",
      category: "Backend"
    },
    {
      name: "Express JS",
      image: "/images/express.png",
      category: "Backend"
    },
    {
      name: "Tailwind CSS",
      image: "/images/tail.png",
      category: "Frontend"
    },
    {
      name: "Bootstrap",
      image: "/images/bootstrap.png",
      category: "Frontend"
    },
    {
      name: "MySQL",
      image: "/images/mysql.png",
      category: "Backend"
    },
    {
      name: "Git & GitHub",
      image: "/images/pngegg (5).png",
      category: "Tools"
    },
    {
      name: "Postman",
      image: "/images/post.png",
      category: "Tools"
    },
    {
      name: "HTML",
      image: "/images/pngegg.png",
      category: "Frontend"
    },
    {
      name: "CSS",
      image: "/images/CSS-Logo.png",
      category: "Frontend"
    },
    {
      name: "C++",
      image: "/images/cpp.png",
      category: "Tools"
    },
    {
      name: "Python",
      image: "/images/python.png",
      category: "Tools"
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="text-white p-6 pt-12 border-t mb-8 border-gray-600">
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
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Tools">Tools</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  border border-gray-600 rounded-lg p-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="flex flex-col p-2 justify-center gap-1 items-center borer border-gray-600 rounded-lg">
            <img 
                src={skill.image} 
                alt={skill.name}
                className="w-12 h-12 object-contain transform transition-transform duration-300 ease-in-out"
              />
              <p className="text-sm font-semibold text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
