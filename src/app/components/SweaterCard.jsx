import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import "./sweater2.css"

import React, { useState } from "react";


const SweaterCard = () => {
    const [temperature, setTemperature] = useState("");
    const [sweaters, setSweaters] = useState(null);

    const calculateSweaters = () => {
        const temp = parseInt(temperature);
        if (isNaN(temp)) {
            alert("Please enter a valid number for temperature!");
            return;
        }

        const comfortTemp = 70; // Assume 70°F is the comfortable temp, every -10f-->plus one sweater
        
        let sweaterCount = 0;

        // Calculate how many sweaters based on temperature drop below comfortTemp
        if (temp < comfortTemp) {
            sweaterCount = Math.ceil((comfortTemp - temp) / 10); // 1 sweater for every 10°F drop
        }

        setSweaters(sweaterCount);
    };

    return (
        <div className="card" style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
            <h3>Mars Sweater Recommender</h3>
            
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
            
            {/* Button to calculate sweaters */}
            <button onClick={calculateSweaters} style={{ display: "block", marginTop: "10px" }}>
                Calculate Sweaters
            </button>
            
            {/* Output how many sweaters needed */}
            {sweaters !== null && (
                <div style={{ marginTop: "20px" }}>
                    <p>
                        You need <strong>{sweaters}</strong> sweater(s) to stay warm at {temperature}°F.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SweaterCard;
