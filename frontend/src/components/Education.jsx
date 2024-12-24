import React from 'react'
import { useState } from 'react';

function Education() {

    const studiesData = [
      {
        date: "2022 - 2026",
        institution: "Delhi Technological University (DTU)",
        degree: "B.Tech in Computer Science and Engineering",
        logo: "/images/dtu.png", 
        marks: "SGPA : 8.45"
      },
      {
        date: "2021 - 2022",
        institution: "S.B.V (Jai Prakash Narayan) East Vinod Nagar Delhi",
        degree: "Class XII",
        logo: "/images/school12.png", 
        marks: "Percentage : 90%"
      },
      {
        date: "2020 - 2021",
        institution: "S.B.V (Jai Prakash Narayan) East Vinod Nagar Delhi",
        degree: "Class X",
        logo: "/images/school12.png", 
        marks: "Percentage : 81%"
      },
    ];
    
    const [activeTab, setActiveTab] = useState("Studies");
    
      return (
        <div className="text-white border-t border-gray-600 pt-12">

          <div className="flex justify-around">
            <button
              onClick={() => setActiveTab("Studies")}
              className={`text-sm w-full h-7 rounded-lg ${
                activeTab === "Studies"
                  ? " bg-white text-black"
                  : "text-gray-400"
              }`}
            >
              Studies
            </button>
            <button
              onClick={() => setActiveTab("Work")}
              className={`text-sm w-full h-7 rounded-lg ${
                activeTab === "Work"
                  ? "bg-white text-black"
                  : "text-gray-400"
              }`}
            >
              Work
            </button>
          </div>
    
          {activeTab === "Studies" && (
            <div className="mt-3 space-y-4 border border-gray-600 rounded-lg">
              {studiesData.map((study, index) => (
                <div key={index} className="flex items-center space-x-8 p-4">
                
                  <img
                    src={study.logo}
                    alt={`${study.institution} logo`}
                    className="w-16 h-16 rounded-full object-cover border border-gray-600"
                  />
               
                  <div>
                    <p className="text-xs text-gray-400">{study.date}</p>
                    <h3 className="text-medium font-bold">{study.institution}</h3>
                    <p className="text-xs text-gray-400">{study.degree}</p>
                    <p className="text-xs text-gray-400">{study.marks}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
    
          {activeTab === "Work" && (
            <div className="mt-3 space-y-4 border-2 border-zinc-400 rounded-lg w-full h-64 flex justify-center items-center">
              <p className="text-gray-400 animate-bounce">No work experience yet!</p>
            </div>
          )}
        </div>
      );
    
}

export default Education