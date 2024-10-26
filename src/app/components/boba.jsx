import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import "./boba2.css"


import React, { useState } from "react";

// Component that recommends the number of boba teas based on temperature
const BobaCard = () => {
    // State to hold temperature input
    const [temperature, setTemperature] = useState("");
    const [boba, setBoba] = useState(null);

    // Function to calculate the number of boba teas
    const calculateBoba = () => {
        const temp = parseInt(temperature);
        if (isNaN(temp)) {
            alert("Please enter a valid number for temperature!");
            return;
        }

        const comfortTemp = 70; // Assume 70°F is the comfortable temp
        let bobaCount = 1; // Base boba tea count is 1

        // Add one more boba for every 10°F drop below comfortTemp
        if (temp < comfortTemp) {
            bobaCount += Math.ceil((comfortTemp - temp) / 10); // 1 extra boba for every 10°F drop
        }

        setBoba(bobaCount);
    };

    return (
        <div className="card" style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
            <h3>Mars Boba Recommender</h3>
            
            {/* Input for the user to enter the temperature */}
            <label className="card">
                Enter Temperature (°F):
                <input
                    type="number"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    placeholder="Enter temperature"
                    style={{ marginLeft: "10px" }}
                />
            </label>
            
            {/* Button to calculate boba */}
            <button onClick={calculateBoba} style={{ display: "block", marginTop: "10px" }}>
                Calculate Boba
            </button>
            
            {/* Output how many boba teas needed */}
            {boba !== null && (
                <div style={{ marginTop: "20px" }}>
                    <p>
                        You need <strong>{boba}</strong> boba tea(s) to stay energized at {temperature}°F.
                    </p>
                </div>
            )}
        </div>
    );
};

export default BobaCard;
