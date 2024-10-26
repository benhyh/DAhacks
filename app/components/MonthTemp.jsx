"use client";
import React, { useState, useEffect } from "react";
import "./WeatherCalendar.css"; // Import the CSS

export default function WeatherCalendar() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to the current month

  // Fetch Mars weather data from the NASA API
  const fetchWeatherData = async () => {
    const api = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
    const response = await fetch(api);
    const data = await response.json();
    setWeatherData(data.soles.slice(0, 365).reverse());
  };

  useEffect(() => {
    fetchWeatherData().catch(console.error);
  }, []);
  
  // Helper function to get the day of the week from a date
  const getDayOfWeek = (dateString) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };
  // Filter data by selected month
  const filteredData = weatherData.filter((day) => {
    const date = new Date(day.terrestrial_date);
    return date.getMonth() === selectedMonth && date.getFullYear() === new Date().getFullYear();
  });

  // Helper function to handle month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };
  return (
      <>
          {/* Month Selector Bar */}
          <div className="month-selector">
            <label htmlFor="month">Select Month:</label>
            <select id="month" onChange={handleMonthChange} value={selectedMonth}>
              <option value={0}>January</option>
              <option value={1}>February</option>
              <option value={2}>March</option>
              <option value={3}>April</option>
              <option value={4}>May</option>
              <option value={5}>June</option>
              <option value={6}>July</option>
              <option value={7}>August</option>
              <option value={8}>September</option>
              <option value={9}>October</option>
            </select>
          </div>
          <div className="calendar-container">
        {filteredData.map((day, index) => (
          <div key={index} className="calendar-cell">
            <h2 className="day-header">{getDayOfWeek(day.terrestrial_date)}</h2>
            <p>{new Date(day.terrestrial_date).toLocaleDateString()}</p>
            <div className="weather-info">
              <img
                src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-sun-icon-logo-png-png-image_8366229.png"
                alt="sun icon"
                className="weather-icon"
              />
              <div className="block">
                <p className="temperature">{day.max_temp ?? "N/A"} °F</p>
                <p className="temperature">{day.min_temp ?? "N/A"} °F</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
