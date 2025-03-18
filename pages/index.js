import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 fixed top-0 bg-white shadow-md z-50">
        <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">NCLC365</h1>
        <ul className="hidden md:flex space-x-8 text-lg text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/features">Features</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="/signup">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition">Sign Up</button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white px-6">
        <motion.h2
          className="text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover No-Code, Low-Code & AI Tools
        </motion.h2>
        <p className="text-lg mt-4 max-w-xl opacity-90">
          Streamline your workflow and boost productivity with our curated list of 365+ powerful tools.
        </p>
        <motion.button
          className="mt-6 bg-white text-blue-800 px-8 py-3 rounded-full shadow-xl font-semibold hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-white text-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose NCLC365?</h2>
        <div className="flex flex-wrap justify-center gap-12 px-6">
          <motion.div
            className="bg-blue-100 text-blue-900 p-8 rounded-xl shadow-lg text-center w-80 border-b-4 border-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">🚀 No-Code Platforms</h3>
            <p className="text-gray-700 mt-3">Build apps and workflows without coding knowledge.</p>
          </motion.div>
          <motion.div
            className="bg-blue-100 text-blue-900 p-8 rounded-xl shadow-lg text-center w-80 border-b-4 border-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">💡 Low-Code Solutions</h3>
            <p className="text-gray-700 mt-3">Flexible development tools for all skill levels.</p>
          </motion.div>
          <motion.div
            className="bg-blue-100 text-blue-900 p-8 rounded-xl shadow-lg text-center w-80 border-b-4 border-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">🤖 AI-Powered Tools</h3>
            <p className="text-gray-700 mt-3">Automate tasks and enhance productivity using AI.</p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full py-16 bg-gradient-to-r from-indigo-800 to-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Explore?</h2>
        <p className="text-lg mt-4">Start leveraging the best No-Code, Low-Code & AI tools today.</p>
        <Link href="/signup">
          <motion.button
            className="mt-6 bg-white text-blue-800 px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get Started Now
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
