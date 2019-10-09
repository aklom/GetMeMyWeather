import axios from "axios";
import { Dispatch } from "react";
import { UnitChange, DataChange, PageChange } from "./actions";
import { Pages, Unit } from './interfaces';

interface WeatherApiResponse {
  main: {
    temp: number;
  };
  weather: Array<{ description: string, icon: string }>;
  wind: { speed: number };
  name: string; 
  sys: {country: string, sunrise: string, sunset: string}; 
  timezone: number; 
  dt: number;
}

export const getWeatherData = (unit: string, longitude?: number, latitude?: number) => {
  console.log("Get Weather Data");

  let url = `https://api.openweathermap.org/data/2.5/weather`;
  if(longitude && latitude){
    url = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&lat=${latitude}&lon=${longitude}`   

  }
  console.log(url)

  return axios
    .request<WeatherApiResponse>({
      url: url,
      method: "get",
      params: {
        APPID: "d7197c5fa87affeca526f85103fc6ac8"
      }
    })
    .then(response => 
      ({
      temperature: `${response.data.main.temp}${unit === Unit.METRIC ? " °C" : " °F"}`,
      weather: response.data.weather[0].description,
      windSpeed: `${response.data.wind.speed}${unit === Unit.METRIC ? " km/h" : " mi/h"}`, 
      icon: response.data.weather[0].icon, 
      city: `${response.data.name},  ${response.data.sys.country}`, 
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      currentTime: response.data.dt, 
      timezone: response.data.timezone
    }));
};

export const updateData = (unit: string, dispatch: Dispatch<any>, longitude?: number, latitude?: number) => {
  
  if(longitude && latitude){
    return getWeatherData(unit, longitude, latitude).then(data => {
      dispatch({
        type: DataChange,
        payload: { ...data, unit: unit, longitude: longitude, latitude: latitude }
      });
    });
  }
  else{
    return getWeatherData(unit).then(data => {
      dispatch({
        type: DataChange,
        payload: { ...data, unit: unit}
      });
    });
  }
  
};


export const changeActivePage = (activePage: Pages, dispatch: Dispatch<any>) => {
  if(activePage === Pages.weather){
    dispatch({
      type: PageChange, 
      payload: { activePage: Pages.sun}
    })
  }
  else{
    dispatch({
      type: PageChange, 
      payload: { activePage: Pages.weather}
    })
  }

}


export const changeActiveUnit = (activeUnit: Unit, dispatch: Dispatch<any>) => {
  if(activeUnit === Unit.METRIC){
    dispatch({
      type: UnitChange, 
      payload: { unit: Unit.IMPERIAL}
    })
  }
  else{
    dispatch({
      type: UnitChange, 
      payload: { unit: Unit.METRIC}
    })
  }

}


export const formatDate = (timestamp: number, timezone: number = 0) => {
    const date =  new Date((timestamp + timezone - 3600)* 1000)
    const minutes = "0" + date.getMinutes(); 
    const hours = "0" + date.getHours();
    return `${hours.substr(-2)}:${minutes.substr(-2)}`
}
