import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white -mx-6 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">I'm currently looking for new opportunities. If you have a project in mind or just want to connect, feel free to reach out.</p>

        <a href="mailto:shyamkumar14318@gmail.com" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition transform hover:scale-105 inline-block">Get In Touch</a>

        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/shyamskk" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:shyamkumar14318@gmail.com" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
