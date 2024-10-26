import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
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
    <Card className="bg-[#ffebcc] rounded-3xl shadow-lg p-5 w-80 mx-auto my-5 text-center font-sans transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <h3 className="text-2xl text-[#d35400] mb-5">
          Boba Tea Recommendation
        </h3>
      </CardHeader>
      <CardBody>
        <label className="text-base text-gray-600">
          Enter temperature:
          <input
            type="number"
            className="w-32 p-2.5 ml-2.5 border-2 border-[#d35400] rounded-lg text-base"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter temperature"
          />
        </label>
        <button
          className="bg-[#f39c12] text-white border-none rounded-lg py-3 px-5 text-base mt-5 cursor-pointer transition-colors duration-300 hover:bg-[#e67e22]"
          onClick={calculateBoba}
        >
          Calculate
        </button>
      </CardBody>
      <CardFooter>
        <p className="mt-5 text-lg text-[#27ae60]">
          {boba !== null && (
            <span>
              You need <strong>{boba}</strong> boba tea(s) to stay energized at{" "}
              {temperature}°F.
            </span>
          )}
        </p>
      </CardFooter>
    </Card>
  );
};

export default BobaCard;