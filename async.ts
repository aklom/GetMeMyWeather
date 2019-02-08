import axios from "axios";

interface WeatherApiResponse {
  main: {
    temp: number;
  };
  weather: Array<{ description: string }>;
  wind: { speed: number };
}

export const asyncGetWeather = () => {
  console.log("Async 1");
  setTimeout(() => console.log("Async timeout"), 1000);
  return "Async return";
};
