import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-gray-800">Shyam Kumar</a>

        <div className="hidden md:flex space-x-6">
          <a href="#skills" className="text-gray-600 hover:text-teal-600 transition">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-teal-600 transition">Projects</a>
          <a href="#journey" className="text-gray-600 hover:text-teal-600 transition">Journey</a>
          <a href="#contact" className="text-gray-600 hover:text-teal-600 transition">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-gray-800">
            {open ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white/95 px-6 pb-4">
          <a href="#skills" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Projects</a>
          <a href="#journey" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Journey</a>
          <a href="#contact" className="block py-2 text-gray-700" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
