//Show average temperature in the month
// Average high, average low, how many sunny/cloudy days

import React from "react";
import { celsiusToFahrenheit } from "./WeatherData";
import { parse } from "path";

export default async function TempAverages() {
  const api =
    "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
  const response = await fetch(api);
  const data = await response.json();

  let totalMin = 0;
  let totalMax = 0;

  const numDays = 7;

  for (let i = 0; i < numDays; i++) {
    const dayData = data.soles[i];
    totalMin += parseInt(dayData.min_temp);
    totalMax += parseInt(dayData.max_temp);
  }

  const avgMin = parseInt(totalMin) / numDays;
  const avgMax = parseInt(totalMax) / numDays;

  return (
    <div className="card">
      <h2>Highest Average Temperature:</h2>
      <h3>{Math.round(celsiusToFahrenheit(avgMax))}°F</h3>
      <h2>Lowest Average Temperature:</h2>
      <h3>{Math.round(celsiusToFahrenheit(avgMin))}°F</h3>
    </div>
  );
}
