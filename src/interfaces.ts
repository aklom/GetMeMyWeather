import { string } from "prop-types";

export interface stateInterface {
  temperature: number;
  weather: string;
  windSpeed: number;
  unit: string;
}

export interface actionInterface {
  type: string;
  payload: any;
}
