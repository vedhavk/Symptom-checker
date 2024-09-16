import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  // State to store the symptom and days observed
  const [symptom, setSymptom] = useState('');
  const [days, setDays] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Symptom: ${symptom}\nDays observed: ${days}`);
  };

  return (
    <div className="total">
      <div className="top">
        <h1>SYMPTOM CHECKER</h1>
      </div>

      <div className="symbol-collection">
        <img src="src/assets/symptom-checkers.jpg" alt="Symptom Checker" className="sidebar-image" />
        <h2>Enter Your Symptom</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
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

          {/* Single button for submission */}
          <button type="submit" className="check-symptoms-btn">
            Check My Symptoms
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
