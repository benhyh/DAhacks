import React, { useState, useEffect } from "react";

// Define the array of topics (cards) to display
const marsInfo = [
  "Did you know... Mars is known as the Red Planet due to iron oxide (rust) on its surface?",
  "Did you know... A day on Mars is just over 24 hours, known as a 'sol', and is 40 minutes longer than an Earth day?",
  "Did you know... Mars has the largest volcano in the solar system, Olympus Mons, which is about three times taller than Mount Everest?",
  "Did you know... The gravity on Mars is only about 38% of Earth's gravity, so you would weigh less there?",
  "Did you know... Mars has two moons, Phobos and Deimos, which are thought to be captured asteroids?",
  "Did you know... Mars experiences massive dust storms that can cover the entire planet and last for months?",
  "Did you know... Mars' atmosphere is 100 times thinner than Earth's and composed mostly of carbon dioxide?",
  "Did you know... Temperatures on Mars can drop to as low as -195°F (-125°C) at the poles?",
  "Did you know... Mars is home to the longest canyon in the solar system, Valles Marineris, which is over 4,000 km long?",
  "Did you know... There is evidence of liquid water flowing on Mars in the past, and current evidence suggests seasonal water flow?",
];

// Component for the flipping card
const MarsCardFlipper = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % marsInfo.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ perspective: "1000px", margin: "0 auto", width: "300px" }}>
      <div
        style={{
          width: "100%",
          height: "200px",
          border: "1px solid #4a5568",
          padding: "20px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(17, 24, 39, 0.5)",
          backdropFilter: "blur(8px)",
          borderRadius: "24px",
          color: "white",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <p style={{ fontSize: "18px" }}>{marsInfo[currentCard]}</p>
        </div>
      </div>
    </div>
  );
};

export default MarsCardFlipper;
