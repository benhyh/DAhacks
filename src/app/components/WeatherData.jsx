export async function fetchWeatherData() {
  try {
    const api =
      "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
