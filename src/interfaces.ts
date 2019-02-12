import { Dispatch } from "react";

export interface stateInterface {
  temperature: number;
  weather: string;
  windSpeed: number;
  unit: string;
}
export interface promiseInterface {
  temperature: number;
  weather: string;
  windSpeed: number;
}
export interface actionInterface {
  type: string;
  payload: any;
}

export interface WeatherApiResponse {
  main: {
    temp: number;
  };
  weather: Array<{ description: string }>;
  wind: { speed: number };
}

export interface ToggleSwitchInterface {
  unit: string;
  dispatch: Dispatch<any>;
}

export interface AppInterface {
  weather: string;
  unit: string;
  dispatch: Dispatch<any>;
}
export enum Unit {
  METRIC = "metric",
  IMPERIAL = "imperial"
}
