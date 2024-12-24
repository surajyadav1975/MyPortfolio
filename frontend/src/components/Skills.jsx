import React from 'react'

function Skills() {
  const skills = [
    {
      name: "CSS",
      image: "/images/CSS-Logo.png"
    },
    {
      name: "JavaScript",
      image: "/images/pngegg (2).png"
    },
    {
      name: "HTML",
      image: "/images/pngegg.png"
    },
    {
      name: "React JS",
      image: "/images/pngegg (3).png"
    },
    {
        name: "Tailwind CSS",
        image: "/images/tail.png"
      },
      {
        name: "Bootstrap",
        image: "/images/bootstrap.png"
      },
      {
        name: "Express JS",
        image: "/images/express.png"
      },
      {
        name: "Node JS",
        image: "/images/nodejs.png"
      },
      {
        name: "MySQL",
        image: "/images/mysql.png"
      },
      {
        name: "MongoDB",
        image: "/images/mongo.png"
      },
      {
        name: "C++",
        image: "/images/cpp.png"
      },
      {
        name: "Python",
        image: "/images/python.png"
      },
      {
        name: "Git & GitHub",
        image: "/images/pngegg (5).png"
      },
      {
        name: "Postman",
        image: "/images/post.png"
      },
    
  ];

  return (
    <div className="text-white p-6 pt-12 border-t mt-12 border-gray-600">

      <h2 className="text-xl font-semibold mb-2 ml-3">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 border border-gray-600 rounded-lg p-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col p-2 justify-center gap-2 items-center border border-gray-600 rounded-lg">
            <img 
              src={skill.image} 
              alt={skill.name}
              className="w-20 h-8 object-contain shadow-lg"
            />
            <p className="text-xs text-gray-500 font-normal">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
