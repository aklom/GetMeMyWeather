import React  from "react"
import styled from "styled-components"
import { Unit } from "../interfaces";


export const UnitSwitch: React.FC<{ activeUnit: Unit, onClick: () => void }> = ({ activeUnit, onClick }) => {


  return <Wrapper>
    <MenuItem active={activeUnit === Unit.METRIC} onClick={() => { if (activeUnit !== Unit.METRIC) { onClick();} }}> Metric </MenuItem>
    <MenuItem active={activeUnit === Unit.IMPERIAL} onClick={() => { if (activeUnit !== Unit.IMPERIAL) { onClick(); }}}> Imperial </MenuItem>
    <Slider rightSlide={activeUnit === Unit.METRIC}></Slider>
  </Wrapper>

}


const Wrapper = styled.div`
    background-color: #fafafa; 
    border-radius: 70px; 
    display: flex; 
    flex-direction: row;
    position: relative;
`


const MenuItem = styled.button<{ active: boolean }>`
    background-color: transparent;
    border-radius: 100px;
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: none;
    transition: 0.7s ease-in-out;
    color: ${({ active }) => active ? '#fff' : '#3f1e6f'};
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    z-index: 10;
    cursor: pointer;
`

const Slider = styled.div<{ rightSlide: boolean }>`
    position: absolute;
    background-color: #2c195b;
    border-radius: 70px;
    width: 70px;
    height: 40px;
    z-index: 0;
    transition: 0.6s ease-in-out;
    ${props => props.rightSlide ? 'transform: translateX(0px);' : 'transform: translateX(70px);'}

`