import React from "react";

const projects = [
  {
    title: "Swiggy Clone",
    description: "A food ordering platform with live restaurant data and cart management.",
    liveLink: "https://order-food-ayv8lsv38-shyamkumar-projects.vercel.app/",
    image: "https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png",
    gitLink: "https://github.com/shyamskk/order-food"
  },
  {
    title: "Netflix GPT",
    description: "Movie recommendation platform using GPT integration and live movie data.",
    liveLink: "https://netflix-gpt-psi-pearl.vercel.app/",
    image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png",
    gitLink:"https://github.com/shyamskk/netflix-gpt"
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-12" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-20 h-20 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-5 hover:bg-amber-50 hover:text-black"
              >
                Live Demo
              </a>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg mr-5 hover:bg-amber-50 hover:text-black"
              >
                Github Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
