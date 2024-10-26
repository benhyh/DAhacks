"use client";
import { Card, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import "./tempCard.css";

export default function TemperatureCard() {
  const [weatherData, setWeatherData] = useState([]);

  const DataImport = async () => {
    const api =
      "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
    const response = await fetch(api);
    const data = await response.json();
    return data.soles.slice(0, 7); // Limit to 7 days
  };

  useEffect(() => {
    DataImport()
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}`;
  };

  return (
    <div className="cards-container">
      {weatherData.map((day, index) => (
        <Card key={index} className="card">
          {/* Date Section */}
          <div className="card-header">
            <h1>{formatDate(day.terrestrial_date)}</h1>
          </div>

          {/* Image and Temperature Side by Side */}
          <div className="content-container">
            <Image
              alt="weather logo"
              src={
                day.atmo_opacity === "Sunny"
                  ? "https://png.pngtree.com/png-clipart/20220719/original/pngtree-sun-icon-logo-png-png-image_8366229.png"
                  : "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-snowflake-icon-download-image_1147140.jpg"
              }
            />
            <div className="content">
              <h3>{day.max_temp ?? "N/A"} °F</h3>
              <h3>{day.min_temp ?? "N/A"} °F</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
