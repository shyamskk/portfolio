import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

export default function App() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <Skills />
        <Projects onOpenModal={(proj) => setModalProject(proj)} />
        <Journey />
        <Contact />
      </main>

      {modalProject && (
        <Modal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </div>
  );
}
