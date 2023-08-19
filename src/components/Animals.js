// components/Animals.js
import React, { useState } from "react";

function Animals() {
  const [animalId, setAnimalId] = useState("");
  const [animalName, setAnimalName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", animalId, animalName);

    // Reset form fields
    setAnimalId("");
    setAnimalName("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-form p-6 rounded-md shadow-xl w-full m-64">
      <h2 className="text-xl font-semibold mb-4">Add Animals</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="animal-id">
              ID:
            </label>
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
            <label className="block font-medium mb-1" htmlFor="animal-name">
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="animal-name"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
              required
            />
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Animals;
