import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
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
    <Card className="bg-gray-900/50 backdrop-blur-sm rounded-3xl shadow-lg p-5 w-80 mx-auto my-5 text-center font-sans transition-transform duration-300 hover:scale-105 border border-gray-700">
      <CardHeader>
        <h3 className="text-2xl text-white mb-5">Sweater Recommendation</h3>
      </CardHeader>
      <CardBody>
        <label className="text-base text-gray-300">
          Enter temperature:
          <input
            type="number"
            className="w-32 p-2.5 ml-2.5 border-2 border-gray-700 rounded-lg text-base bg-gray-800 text-white"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter temperature"
          />
        </label>
        <button
          className="bg-blue-600 text-white border-none rounded-lg py-3 px-5 text-base mt-5 cursor-pointer transition-colors duration-300 hover:bg-blue-700"
          onClick={calculateSweaters}
        >
          Calculate
        </button>
      </CardBody>
      <CardFooter>
        <p className="mt-5 text-lg text-green-400">
          {sweaters !== null && (
            <span>
              You need <strong>{sweaters}</strong> sweater(s) to stay warm at{" "}
              {temperature}°F.
            </span>
          )}
        </p>
      </CardFooter>
    </Card>
  );
};

export default SweaterCard;
