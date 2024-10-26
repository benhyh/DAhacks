//Show average temperature in the month
// Average high, average low, how many sunny/cloudy days

import React, { useEffect } from "react";
export default async function Card() {
    const api = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
    const response = await fetch(api);
    const data = await response.json();

    const totalMin = 0;
    const totalMax = 0;

    const numDays = 7;

    for (let i = 0; i < numDays; i++) {
        const dayData = days[i];
        //console.log(JSON.stringify(dayData))
        console.log("day " + dayData.terrestrial_date)
        console.log("min " + dayData.min_temp)
        totalMin += dayData.min_temp;
        console.log("max " + dayData.max_temp)
        totalMax += dayData.max_temp;
        
        let day = dayData.atmo_opacity;
    }
    
    const avgMin = totalMin / numDays;
    const avgMax = totalMax / numDays;

  return (
    <div className="card">
      <h2>Highest Average Temperature:</h2>
      <h3>{avgMax}</h3>
      <h2>Lowest Average Temperature::</h2>
      <h3>{avgMin}</h3>
    </div>
  )
}

