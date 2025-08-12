import React from "react";
import EducationChart from "./EducationChart";

export default function Journey() {
  return (
    <section id="journey" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-2">My Journey</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">A mix of formal education and hands-on achievement.</p>

      <div className="flex flex-col md:flex-row md:space-x-12">
        <div className="md:w-1/2">
          <div className="relative border-l-2 border-teal-200 pl-6">
            <div className="mb-8 ml-6 relative">
              <div className="absolute -left-8 top-2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
              <p className="text-sm text-gray-500">2021 - 2024</p>
              <h3 className="text-xl font-semibold">Bachelor of Science</h3>
              <p className="text-gray-600">Govt Degree College, Eturnagaram</p>
            </div>

            <div className="mb-8 ml-6 relative">
              <div className="absolute -left-8 top-2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
              <p className="text-sm text-gray-500">During Degree</p>
              <h3 className="text-xl font-semibold">Hackathon Lead</h3>
              <p className="text-gray-600">Led a team selected for a hackathon project during an NCC camp.</p>
            </div>

            <div className="mb-8 ml-6 relative">
              <div className="absolute -left-8 top-2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
              <p className="text-sm text-gray-500">2019 - 2021</p>
              <h3 className="text-xl font-semibold">Intermediate Education</h3>
              <p className="text-gray-600">Prathiba Jr College, Hanmakonda</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0">
          <h3 className="text-2xl font-bold text-center mb-4">Academic Performance</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <EducationChart />
          </div>
        </div>
      </div>
    </section>
  );
}
