import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  // Handle button click
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  // State to store the person's symptom and days
  const [symbol, setSymbol] = useState("");
  const [days, setDays] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Symptom: ${symbol}\nDays observed: ${days}`);
    // Here you can add additional functionality, such as sending data to a server
  };

  return (
    <div className="total">
      <div className="top">
        <h1>SYMPTOM CHECKER</h1>
        <button type="button" onClick={handleClick}>
          What do I have!
        </button>
      </div>

      <div className="symbol-collection">
        <img src="src/assets/symptom-checkers.jpg" alt="Symptom Checker" className="sidebar-image" />
        <h2>Enter Your Symptom</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Enter your symptoms here"
            required
          />
          
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="Number of days"
            required
          />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
