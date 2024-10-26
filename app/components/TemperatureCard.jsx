//Show highest and lowest temperature throughout the week
"use client"

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {React, useState, useEffect} from "react";
 
export default function TemperatureCard() {
  const [weatherData, setWeatherData] = useState([]);

  const DataImport = async () => {
    const api = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
    const response = await fetch(api);
    const data = await response.json();
    return data.soles.slice(0, 7); // Limit to 7 days
  }

  useEffect(() => {
    DataImport().then((data) => setWeatherData(data));
  }, []);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${month}/${day}`;
  };
  return (
    <>

      {weatherData.map((day, index) => (
        <Card key={index} className="card">
          <CardHeader>
            <h1>{formatDate(day.terrestrial_date)}</h1> {/* Formatted date */}
          </CardHeader>
          <div className="flex-container">
            <Image
              alt="weather logo"
              src= {day.atmo_opacity == "Sunny" ? "https://w7.pngwing.com/pngs/487/562/png-transparent-sun-logo-sunlight-silhouette-thumbnail.png" : "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-snowflake-icon-download-image_1147140.jpg"}
            />
            <div>
              <CardBody>
                <h2>Highest Temperature:</h2>
                <h3>{day.max_temp} °F</h3>
                <h2>Lowest Temperature:</h2>
                <h3>{day.min_temp} °F</h3>
                <h2>Weather Condition:</h2>
                <h3>{day.atmo_opacity}</h3>
              </CardBody>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}
