import React, { Dispatch, useEffect } from "react";
import "./App.css";
import {  stateInterface, Pages } from "./interfaces";
import { connect } from "react-redux";
import { updateData, changeActivePage } from "./functions";
import styled from "styled-components";
import { PageSwitch } from "./PageSwitch";
import { WeatherContent } from "./WeatherContent";
import { usePosition } from "./usePosition";


import BackgroundFlowers from './Assets/flowers.png';
import PlaceholderIcon from "./Assets/placeholder.png";

const App: React.FC<stateInterface & { dispatch: Dispatch<any> }> = ({ dispatch, city, icon, activePage, unit }) => {

  const pos = usePosition()

  useEffect(() => {
    updateData(unit, dispatch, pos.longitude, pos.latitude);
  }, [dispatch, pos.longitude, pos.latitude, unit])

  return (<>
    <Wrapper >
      <PageSwitch activePage={activePage} onClick={() => changeActivePage(activePage, dispatch)}> </PageSwitch>
      <City>
        <Placeholder src={PlaceholderIcon}></Placeholder>
        {city}
      </City>
      <Flowers src={BackgroundFlowers}></Flowers>

      {icon && activePage === Pages.weather && <>
        <WeatherContent></WeatherContent>
      </>}
    </Wrapper>
  </>
  );

}

export function mapStateToProps(state: stateInterface) {
  return {
    weather: state.weather,
    unit: state.unit,
    icon: state.icon,
    temperature: state.temperature,
    windSpeed: state.windSpeed,
    longitude: state.longitude,
    latitude: state.latitude,
    city: state.city,
    activePage: state.activePage
  };
}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  padding: 40px;
 
`

const City = styled.div`
    color: #84bdd8;
    position: absolute; 
    right: 80px;
    top: 60px;
    font-size: 20px;
    `

const Placeholder = styled.img`
  height: 30px;
  padding-right: 10px;
`

const Flowers = styled.img`
  position: absolute;
  left: -100px;
  bottom: -30px;
  z-index: 0;
`



export default connect(mapStateToProps)(App);