import React, { useState } from "react";
import axios from "axios";
import "./Sidebar.css";

const Sidebar = () => {
  const [symbol, setSymbol] = useState("");
  const [days, setDays] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the input (symptom and days)
      await axios.post("http://localhost:5000/symptom/input", {
        symptom: symbol,
        days: days,
      });

      // Fetch diseases based on symptom
      const response = await axios.get("http://localhost:5000/symptom/diseases", {
        params: { symptom: symbol },
      });

      setDiseases(response.data.diseases);
      setError("");
    } catch (err) {
      setError("An error occurred. Please try again.");
      setDiseases([]);
    }
  };

  return (
    <div className="total">
      <div className="top">
        <h1>SYMPTOM CHECKER</h1>
        <button type="button">What do I have!</button>
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

        {diseases.length > 0 && (
          <div>
            <h3>Possible Diseases:</h3>
            <ul>
              {diseases.map((disease, index) => (
                <li key={index}>{disease}</li>
              ))}
            </ul>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Sidebar;
