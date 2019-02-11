import axios from "axios";
import { WeatherApiResponse } from "./interfaces";
import { Dispatch } from "react";
import { UnitChange } from "./actions";

export const getWeatherData = (unit: string) => {
  console.log("Get Weather Data");
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
      windSpeed: response.data.wind.speed
    }));
};

export const setUnit = (unit: string, dispatch: Dispatch<any>) => {
  return getWeatherData(unit).then(data => {
    console.log("Set Unit ");
    dispatch({
      type: UnitChange,
      payload: { ...data, unit: unit }
    });
  });
};
