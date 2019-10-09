import React, { Dispatch, useEffect } from "react";
import "./App.css";
import { stateInterface, Pages } from "./interfaces";
import { connect } from "react-redux";
import { updateData, changeActivePage, formatDate } from "./functions";
import styled from "styled-components";
import { PageSwitch } from "./PageSwitch";
import { WeatherContent } from "./WeatherContent";
import { usePosition } from "./usePosition";


import BackgroundFlowers from './Assets/flowers.png';
import PlaceholderIcon from "./Assets/placeholder2.png";
import { SunContent } from './SunContent';

const App: React.FC<stateInterface & { dispatch: Dispatch<any> }> = ({ dispatch, city, activePage, unit, currentTime, timezone }) => {

  const pos = usePosition()

  useEffect(() => {
    updateData(unit, dispatch, pos.longitude, pos.latitude);
    setInterval(() => 
    updateData(unit, dispatch, pos.longitude, pos.latitude), 60000
    )
  }, [dispatch, pos.longitude, pos.latitude, unit])

  return (<>
    <Wrapper >
      <PageSwitch activePage={activePage} onClick={() => changeActivePage(activePage, dispatch)} />

      <Header>
        <Field>
          <div>Refreshed at</div>
          <Time>
            {currentTime && formatDate(currentTime, timezone)}
          </Time>
        </Field>
        <Placeholder src={PlaceholderIcon} />
        <City> {city} </City>

      </Header>
      <Flowers src={BackgroundFlowers} />

      {activePage === Pages.weather &&
        <WeatherContent />}

      {activePage === Pages.sun && <SunContent />}
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
    activePage: state.activePage,
    sunset: state.sunset,
    sunrise: state.sunrise,
    timezone: state.timezone,
    currentTime: state.currentTime
  };
}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  padding: 40px;
 
`

const Header = styled.div`
    position: absolute; 
    right: 80px;
    top: 60px;
    
    display: flex; 
    flex-direction: row;
    `

const City = styled.div`
color: #d853ea;
font-size: 20px;
`

const Time = styled.div`
    color: #84bdd8;
    font-size: 33px;
    padding: 0 50px;
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

const Field = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 260px;
    font-size: 12px;
    margin-top: -15px;
`


export default connect(mapStateToProps)(App);