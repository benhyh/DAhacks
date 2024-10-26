import React from "react";
import { fetchWeatherData, celsiusToFahrenheit } from "./WeatherData";
function formatDate(date) {
  const stuff = date.split("-");
  return stuff[1] + "/" + stuff[2] + "/" + stuff[0];
}

function formatTime(time) {
  const [hours, minutes] = time.split(":");
  const period = parseInt(hours) < 12 ? "AM" : "PM";
  const twelveHour = parseInt(hours) % 12 || 12;
  return `${twelveHour}:${minutes.padStart(2, "0")} ${period}`;
}

export default function TempOverview() {
  const [weatherData, setWeatherData] = React.useState(null);

  React.useEffect(() => {
    fetchWeatherData().then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) {
    return null;
  }

  const wData = weatherData.soles;
  const today = wData[0];
  const minTempF = Math.round(celsiusToFahrenheit(today.min_temp));
  const maxTempF = Math.round(celsiusToFahrenheit(today.max_temp));
  const minTempColor =
    minTempF < -80
      ? "#6495ED"
      : minTempF < -40
        ? "#87CEEB"
        : minTempF < 0
          ? "#F7DC6F"
          : minTempF < 40
            ? "#FFD700"
            : "#E74C3C";
  const maxTempColor =
    maxTempF < -80
      ? "#6495ED"
      : maxTempF < -40
        ? "#87CEEB"
        : maxTempF < 0
          ? "#F7DC6F"
          : maxTempF < 40
            ? "#FFD700"
            : "#E74C3C";
  const terrestrialDate = today.terrestrial_date;
  const avgTemp = (minTempF + maxTempF) / 2;
  let tempMessage = "";
  if (avgTemp < -80) {
    tempMessage =
      "BRUH IT'S FREEZING: Don't even think about going outside! 🥶";
  } else if (avgTemp < -40) {
    tempMessage = "it do be kinda cold tho: bundle up, Martian! ❄️";
  } else if (avgTemp < 0) {
    tempMessage = "same old, same old: Mars is still pretty chilly 😐";
  } else if (avgTemp < 40) {
    tempMessage = "OMG IT'S WARM... just kidding, it's still cold 😂";
  } else {
    tempMessage = "WARM?!: is this a joke? Mars is never warm 🤣";
  }

  const pressure = today.pressure;
  const pressure_string = today.pressure_string;
  const pressureColor = pressure_string === "Higher" ? "#0F0" : "#F00"; // Dark green for Higher, dark red for Lower
  const sunrise = today.sunrise;
  const sunset = today.sunset;
  const uvExposure = today.local_uv_irradiance_index;

  return (
    <>
      <div className="flex flex-col items-center justify-center" id="overview">
        <div className="flex flex-row text-[69px]">
          <span
            className=" font-bold"
            style={{ color: minTempColor }}
          >
            {minTempF}&deg;F
          </span>
          <span class="px-3">/</span>
          <span
            className="font-bold"
            style={{ color: maxTempColor }}
          >
            {maxTempF}&deg;F
          </span>
        </div>

        <small>as of {formatDate(terrestrialDate)}</small>

        <p className="text-2xl">{tempMessage}</p>

        <p><span className="label">Atmospheric Pressure:</span> {pressure} Pa <span style={{ color: pressureColor }}>({pressure_string})</span></p>
        <p><span className="label">Sunrise:</span> {formatTime(sunrise)} | <span className="label">Sunset:</span> {formatTime(sunset)}</p>
        <p><span className="label">UV Exposure:</span> {uvExposure}</p>
      </div>
    </>
  );
}


