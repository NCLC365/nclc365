import React from "react";

export default function Features() {
  return (
    <div className="bg-gray-100 min-h-screen text-center pt-20">
      <h1 className="text-4xl font-bold text-blue-800">🚀 Features</h1>
      <p className="text-lg text-gray-700 mt-4">Explore what NCLC365 has to offer!</p>

      <div className="mt-10 flex flex-wrap justify-center gap-12 px-6">
        <div className="bg-white p-6 shadow-lg rounded-xl w-80 border-b-4 border-blue-600">
          <h3 className="text-2xl font-semibold">No-Code Platforms</h3>
          <p className="text-gray-700 mt-3">Build apps & workflows without coding.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-xl w-80 border-b-4 border-blue-600">
          <h3 className="text-2xl font-semibold">Low-Code Solutions</h3>
          <p className="text-gray-700 mt-3">Flexible development tools for all levels.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-xl w-80 border-b-4 border-blue-600">
          <h3 className="text-2xl font-semibold">AI-Powered Tools</h3>
          <p className="text-gray-700 mt-3">Automate tasks & enhance productivity.</p>
        </div>
      </div>
    </div>
  );
}
