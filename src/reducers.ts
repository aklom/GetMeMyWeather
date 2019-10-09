import { stateInterface, actionInterface, Pages, Unit } from "./interfaces";
import {  DataChange, PageChange, UnitChange } from "./actions";


const initialState: stateInterface = {
  temperature: undefined,
  weather: undefined,
  windSpeed: undefined,
  unit: Unit.METRIC, 
  icon: undefined, 
  longitude: undefined, 
  latitude: undefined, 
  city: undefined, 
  activePage: Pages.weather, 
  sunrise: undefined, 
  sunset: undefined
};

export const reducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    
      case DataChange:
        return Object.assign({}, state, action.payload);

      case PageChange:
        return Object.assign({}, state, {...state, ...action.payload});
  
      case UnitChange:
          return Object.assign({}, state, {...state, ...action.payload});
    
    default:
      return state;
  }
};