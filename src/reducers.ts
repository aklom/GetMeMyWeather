import { stateInterface, actionInterface } from "./interfaces";
import { UnitChange } from "./actions";
const initialState: stateInterface = {
  temperature: 0,
  weather: "",
  windSpeed: 0,
  unit: "metric"
};

export const reducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case UnitChange:
      return Object.assign({}, state, {
        unit: action.payload.unit,
        temperature: action.payload.temperature,
        weather: action.payload.weather,
        windSpeed: action.payload.windSpeed
      });

    default:
      return state;
  }
};
