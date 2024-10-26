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
    <Card className="bg-[#ffebcc] rounded-3xl shadow-lg p-5 w-80 mx-auto my-5 text-center font-sans transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <h3 className="text-2xl text-[#d35400] mb-5">Sweater Recommendation</h3>
      </CardHeader>
      <CardBody>
        <input
          type="number"
          className="w-28 p-2 my-2.5 border border-gray-300 rounded-lg text-base"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
        />
        <button
          className="bg-[#f39c12] text-white border-none rounded-lg py-3 px-5 text-base mt-5 cursor-pointer transition-colors duration-300 hover:bg-[#e67e22]"
          onClick={calculateSweaters}
        >
          Get Recommendation
        </button>
      </CardBody>
      <CardFooter>
        <p className="text-lg text-green-500">
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
