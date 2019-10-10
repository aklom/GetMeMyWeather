import React, { Dispatch, useEffect } from "react";
import "./App.css";
import { stateInterface, Pages } from "./interfaces";
import { connect } from "react-redux";
import { updateData, changeActivePage, mapStateToProps } from "./functions";
import styled from "styled-components";
import { PageSwitch } from "./Components/PageSwitch";
import { WeatherContent } from "./Components/WeatherContent";
import { usePosition } from "./hooks/usePosition";


import BackgroundFlowers from './Assets/flowers.png';
import { SunContent } from './Components/SunContent';
import { City } from "./Components/City";

const App: React.FC<stateInterface & { dispatch: Dispatch<any> }> = ({ dispatch, city, activePage, unit, longitude, latitude }) => {

  const pos = usePosition()
 

  useEffect(() => {
    const updateDataRegularly = () => {
      updateData(unit, dispatch, pos.longitude, pos.latitude);
      setTimeout(updateDataRegularly, 300000)
    }

    if (pos.longitude && pos.latitude){
      updateDataRegularly()
    }
  }, [dispatch, pos.longitude, pos.latitude, unit])
 

  return (<>
    <Wrapper >

      <PageSwitch activePage={activePage} onClick={() => changeActivePage(activePage, dispatch)} />
      <City/>

      <Flowers src={BackgroundFlowers} />

      {activePage === Pages.weather && <WeatherContent />}

      {activePage === Pages.sun && <SunContent />}

    </Wrapper>
  </>
  );

}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  padding: 40px;
 
`

const Flowers = styled.img`
  position: absolute;
  left: -100px;
  bottom: -30px;
  z-index: 0;
`


export default connect(mapStateToProps)(App);