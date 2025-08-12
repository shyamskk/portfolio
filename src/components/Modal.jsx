import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <motion.div onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>

        <p className="mb-4 text-gray-700">{project.description}</p>

        <h4 className="font-bold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {project.features.map((f, idx) => <li key={idx}>{f}</li>)}
        </ul>

        <h4 className="font-bold mb-2">Tech Stack:</h4>
        <p className="text-gray-600">{project.techStack}</p>
      </motion.div>
    </div>
  );
}
