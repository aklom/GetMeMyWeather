import { stateInterface, actionInterface } from "./interfaces";
const initialState: stateInterface = {
  temperature: 0,
  weather: "",
  windSpeed: 0,
  unit: "metric"
};

export const reducer = (state = initialState, action: actionInterface) => {
  if (action.type === "CHANGE_WEATHER") {
    return { ...state, weather: "Heyyyy" };
  }
  return state;
};
