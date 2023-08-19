import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Home from "./components/Home";
import Sightings from "./components/Sightings";
import Animals from "./components/Animals";
import EndangeredAnimals from "./components/EndangeredAnimals";

function App() {
  const [selectedForm, setSelectedForm] = useState(null);

  const formComponents = {
    home: <Home />,
    animals: <Animals />,
    endangered: <EndangeredAnimals />,
    sightings: <Sightings />,
  };

  const renderedForm = () => {
    return selectedForm ? formComponents[selectedForm] : null;
  };

  useEffect(() => {
    const storedForm = localStorage.getItem("selectedForm");
    setSelectedForm(storedForm || "home");
  }, []); 

  const handleNavigationClick = (form) => {
    setSelectedForm(form);
    localStorage.setItem("selectedForm", form);
  };

  return (
    <div className="flex flex-col h-screen bg-primary bg-opacity-20">
      <nav className="bg-navbar bg-opacity-75 sticky top-0 z-50 p-3 flex md:gap-8 gap-4 items-center justify-center">
        <button
          className="p-2 rounded hover:bg-highlight font-bold"
          onClick={() => handleNavigationClick("home")}> Home </button>
        <button
          className="p-2 rounded hover:bg-highlight"
          onClick={() => handleNavigationClick("sightings")}> Sightings </button>
        <button
          className="p-2 rounded hover:bg-highlight"
          onClick={() => handleNavigationClick("animals")}> Animals </button>
        <button
          className="p-2 rounded hover:bg-highlight"
          onClick={() => handleNavigationClick("endangered")}> Endangered Animals </button>
      </nav>
      <main className="flex-1 overflow-x-auto overflow-y-auto p-4">
        {renderedForm()}
      </main>
    </div>
  );
}

export default App;
