
export enum Pages {
  weather, sun
}


export enum Unit {
  METRIC = "metric",
  IMPERIAL = "imperial"
}


export interface stateInterface {
  temperature: string | undefined;
  weather: string | undefined;
  windSpeed: string | undefined;
  unit: Unit;
  icon: string | undefined;
  longitude: number | undefined; 
  latitude: number | undefined;
  city: string | undefined; 
  activePage: Pages;
  sunrise: number | undefined; 
  sunset: number | undefined;
}

export interface actionInterface {
  type: string;
  payload: any;
}


