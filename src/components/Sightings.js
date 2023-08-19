// components/Sightings.js
import React, { useState } from "react";

function Sightings() {
  const [animalId, setAnimalId] = useState("");
  const [location, setLocation] = useState("");
  const [rangerName, setRangerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", animalId, location, rangerName);

    // Reset form fields
    setAnimalId("");
    setLocation("");
    setRangerName("");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
     <div className="bg-form p-4 rounded-md shadow-xl w-full  m-64">
      <h2 className="text-xl font-semibold mb-4">Add Sighting </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="animal-id"> ID: </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="number"
              id="animal-id"
              value={animalId}
              onChange={(e) => setAnimalId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="location">Location: </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="ranger-name"> Ranger Name: </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="ranger-name"
              value={rangerName}
              onChange={(e) => setRangerName(e.target.value)}
              required
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
}

export default Sightings;
