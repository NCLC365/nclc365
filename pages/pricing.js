import React from "react";

export default function Pricing() {
  return (
    <div className="bg-gray-100 min-h-screen text-center pt-20">
      <h1 className="text-4xl font-bold text-blue-800">💰 Pricing</h1>
      <p className="text-lg text-gray-700 mt-4">Choose a plan that fits your needs.</p>

      <div className="mt-10 flex flex-wrap justify-center gap-12 px-6">
        <div className="bg-white p-6 shadow-lg rounded-xl w-80 border-b-4 border-blue-600">
          <h3 className="text-2xl font-semibold">🎉 Free Plan</h3>
          <p className="text-gray-700 mt-3">Access basic features at no cost.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-xl w-80 border-b-4 border-blue-600">
          <h3 className="text-2xl font-semibold">🚀 Pro Plan</h3>
          <p className="text-gray-700 mt-3">$10/month for advanced tools & support.</p>
        </div>
      </div>
    </div>
  );
}
