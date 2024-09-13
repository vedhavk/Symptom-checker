import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [symbol, setSymbol] = useState("");
    const [days, setDays] = useState("");
    const [diseases, setDiseases] = useState([]);
    const [faqs, setFAQs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/symptom/input', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ symptom: symbol, days }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Data has been saved successfully!');
                fetchDiseasesAndFAQs(symbol);  // Fetch diseases and FAQs after saving data
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert('An error occurred while submitting the data.');
        }
    };

    const fetchDiseasesAndFAQs = async (symptom) => {
        try {
            const response = await fetch(`/symptom/diseases?symptom=${symptom}`);
            const data = await response.json();

            if (response.ok) {
                setDiseases(data.diseases);
                setFAQs(data.faqs);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    return (
        <div className="total">
            <div className="top">
                <h1>SYMPTOM CHECKER</h1>
                <button type="button" onClick={() => alert('Button was clicked!')}>
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

                {faqs.length > 0 && (
                    <div>
                        <h3>FAQs:</h3>
                        <ul>
                            {faqs.map((faq, index) => (
                                <li key={index}>{faq}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
