import React from "react";
import { FaJava, FaReact, FaNodeJs, FaAws, FaDocker, FaWindows } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiClerk, SiPostgresql, SiMysql, SiGooglecloud, SiPrisma, SiNextdotjs, SiLinux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500" size={40} /> },
    { name: "JavaScript", icon: <i className="devicon-javascript-plain text-yellow-400 text-4xl"></i> },
    { name: "React.js", icon: <FaReact className="text-blue-500" size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: "Express.js", icon: <i className="devicon-express-original text-gray-700 text-4xl"></i> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" size={40} /> },
    { name: "Clerk", icon: <SiClerk className="text-pink-500" size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" size={40} /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-600" size={40} /> },
    { name: "Amazon EC2", icon: <FaAws className="text-yellow-500" size={40} /> },
    { name: "Amazon S3", icon: <FaAws className="text-yellow-500" size={40} /> },
    { name: "Google Cloud Platform", icon: <SiGooglecloud className="text-red-500" size={40} /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" size={40} /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-gray-700" size={40} /> },
    { name: "REST APIs", icon: <i className="devicon-api-plain text-blue-400 text-4xl"></i> },
    { name: "Git", icon: <i className="devicon-git-plain text-orange-600 text-4xl"></i> },
    { name: "GitHub", icon: <i className="devicon-github-original text-black text-4xl"></i> },
    { name: "Windows", icon: <FaWindows className="text-blue-500" size={40} /> },
    { name: "Unix/Linux", icon: <SiLinux className="text-gray-700" size={40} /> },
  ];

  return (
    <section className="bg-gray-100 py-16" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center p-6 text-center hover:scale-105"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
