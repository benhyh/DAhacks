"use client"
import React, { useEffect, useState } from "react";
// import "./funFacts.css";

const FunFacts = () => {
  // List of 10 fun facts about Mars, with "Did you know..." prepended to each one
  const marsFacts = [
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

  // State to hold the index of the current fun fact
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // useEffect hook to set the interval for changing fun facts every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % marsFacts.length);
    }, 10000); // 10 seconds interval

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [marsFacts.length]);

  return (
    <div className="fun-fact-container">
      <h3 className="fun-fact-title">Fun Fact About Mars</h3>
      <p className="fun-fact">{marsFacts[currentFactIndex]}</p>
    </div>
  );
};

export default FunFacts;
