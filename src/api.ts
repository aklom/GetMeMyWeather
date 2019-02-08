import axios from "axios";

interface WeatherApiResponse {
  main: {
    temp: number;
  };
  weather: Array<{ description: string }>;
  wind: { speed: number };
}

export const getWeatherData = (unit: string) => {
  console.log("Weather");
  return axios
    .request<WeatherApiResponse>({
      url: `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=${unit}`,
      method: "get",
      params: {
        APPID: "d7197c5fa87affeca526f85103fc6ac8"
      }
    })
    .then(response => ({
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description,
      wind_speed: response.data.wind.speed
    }));
};
