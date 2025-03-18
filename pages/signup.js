import React from "react";

export default function Signup() {
  return (
    <div className="bg-gray-100 min-h-screen text-center pt-20">
      <h1 className="text-4xl font-bold text-blue-800">🔐 Sign Up</h1>
      <p className="text-lg text-gray-700 mt-4">Create your account & start exploring!</p>

      <div className="mt-10 max-w-md mx-auto bg-white p-6 shadow-lg rounded-xl">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
}
