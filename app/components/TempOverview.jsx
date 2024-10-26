import React from "react";
import { fetchWeatherData, celsiusToFahrenheit } from "./WeatherData";

function formatDate(date) {
  const stuff = date.split("-");
  return stuff[1] + "/" + stuff[2] + "/" + stuff[0];
}

export default async function TempOverview() {
  const weatherData = await fetchWeatherData();
  const wData = weatherData.soles;
  const today = wData[0];

  const minTempF = Math.round(celsiusToFahrenheit(today.min_temp));
  const maxTempF = Math.round(celsiusToFahrenheit(today.max_temp));

  const minTempColor = minTempF < -80 ? "#6495ED" : minTempF < -40 ? "#87CEEB" : minTempF < 0 ? "#F7DC6F" : minTempF < 40 ? "#FFD700" : "#E74C3C";
  const maxTempColor = maxTempF < -80 ? "#6495ED" : maxTempF < -40 ? "#87CEEB" : maxTempF < 0 ? "#F7DC6F" : maxTempF < 40 ? "#FFD700" : "#E74C3C";
  const terrestrialDate = today.terrestrial_date;
  console.log(terrestrialDate)

  const avgTemp = (minTempF + maxTempF) / 2;
  let tempMessage = "";

  if (avgTemp < -80) {
    tempMessage = "BRUH IT'S FREEZING: Don't even think about going outside! 🥶";
  } else if (avgTemp < -40) {
    tempMessage = "it do be kinda cold tho: bundle up, Martian! ❄️";
  } else if (avgTemp < 0) {
    tempMessage = "same old, same old: Mars is still pretty chilly ⚠️";
  } else if (avgTemp < 40) {
    tempMessage = "OMG IT'S WARM... just kidding, it's still cold 😂";
  } else {
    tempMessage = "WARM?!: is this a joke? Mars is never warm 🤣";
  }

  return (
    <>
      <div className="text-center">
        <span className="headerthing" style={{ color: minTempColor }}>{minTempF}&deg;F</span> to <span className="headerthing" style={{ color: maxTempColor }}>{maxTempF}&deg;F</span>
        <p id="temp-message">{tempMessage}</p>
        <small>as of {formatDate(terrestrialDate)}</small>
      </div>
    </>
  )
}


