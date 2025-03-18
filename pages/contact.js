import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen text-center pt-20">
      <h1 className="text-4xl font-bold text-blue-800">📞 Contact Us</h1>
      <p className="text-lg text-gray-700 mt-4">We’d love to hear from you!</p>

      <div className="mt-10 max-w-lg mx-auto bg-white p-6 shadow-lg rounded-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded-lg h-32"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>
      </div>
    </div>
  );
}
