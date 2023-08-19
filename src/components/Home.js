// components/Home.js
import React from "react";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  m-64">
        {/* Sightings Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Sightings</h2>
          <p className="text-gray-600">
            Explore recent wildlife sightings and learn about the diverse
            species we've encountered in their natural habitat.
          </p>
        </div>

        {/* Animals Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Animals</h2>
          <p className="text-gray-600">
            Discover the various animals that inhabit our region and gain insights
            into their behavior, characteristics, and conservation status.
          </p>
        </div>

        {/* Endangered Animals Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Endangered Animals</h2>
          <p className="text-gray-600">
            Learn about the endangered species in our area, their challenges, and
            the efforts being made to protect and preserve them for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
