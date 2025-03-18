import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">NCLC365</h1>
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Features</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Pricing</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight max-w-3xl">
          Discover the Best No-Code, Low-Code, and AI Tools
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-xl">
          Streamline your workflow and boost productivity with our curated list of 365+ powerful tools.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">No-Code Platforms</h3>
            <p className="text-gray-600 mt-2">Easily build apps and workflows without coding knowledge.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">Low-Code Solutions</h3>
            <p className="text-gray-600 mt-2">Flexible development tools for both beginners and experts.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">AI-Powered Tools</h3>
            <p className="text-gray-600 mt-2">Leverage AI to automate tasks and enhance productivity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
