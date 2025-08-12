import React from "react";
import projectData from "../data/projects";
import { motion } from "framer-motion";

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="py-20 bg-gray-100 -mx-6 px-6">
      <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">A few projects that show what I build — click for details.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {Object.values(projectData).map((proj, i) => (
          <motion.div key={proj.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <button onClick={() => onOpenModal(proj)} className="text-teal-600 font-semibold hover:underline">View Details →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
