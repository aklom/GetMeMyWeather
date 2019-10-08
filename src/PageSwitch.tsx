import React from "react"
import styled from "styled-components"
import { Pages } from "./interfaces";


export const PageSwitch: React.FC<{activePage: Pages, onClick: () => void}> = ({activePage, onClick}) => {

    return <Wrapper> 
        <MenuItem active={activePage === Pages.weather} onClick={() => { if (activePage !== Pages.weather) { onClick();} }}> Weather </MenuItem>
        <MenuItem active={activePage === Pages.sun} onClick={() => { if (activePage !== Pages.sun) { onClick();} }}> Sunrise / Sunset </MenuItem>
        <Slider rightSlide={activePage === Pages.weather}></Slider>
    </Wrapper>

}

const Wrapper = styled.div`
    height: 50px; 
    width: 300px; 
    background-color: #fafafa; 
    border-radius: 100px; 
    display: flex; 
    flex-direction: row;
    position: relative;
    margin-left: -350px;
`


const MenuItem = styled.button<{active: boolean}>`
    background-color: transparent;
    border-radius: 100px;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    transition: 0.7s ease-in-out;
    font-family: 'Quicksand', sans-serif;
    color: ${({active}) => active ? '#fff' : '#3f1e6f'};
    font-size: 16px;
    z-index: 10;
    cursor: pointer;
`

const Slider = styled.div<{rightSlide: boolean}>`
    position: absolute;
    background-color: #8264ac;
    border-radius: 100px;
    width: 150px;
    height: 50px;
    z-index: 0;
    transition: 0.6s ease-in-out;
    transform: ${props => props.rightSlide ? 'translateX(0px);': 'translateX(150px);'}

`