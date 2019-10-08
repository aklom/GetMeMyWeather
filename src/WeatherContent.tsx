import React, { Dispatch } from "react"
import styled from "styled-components"
import { stateInterface } from "./interfaces"
import { mapStateToProps } from './App';
import { connect } from "react-redux";


import { icons } from "./Assets/icons.js";
import { UnitSwitch } from "./UnitSwitch";
import { changeActiveUnit } from "./functions";



const _WeatherContent: React.FC<stateInterface & { dispatch: Dispatch<any> }> = ({ icon, unit, weather, temperature, windSpeed, city, dispatch, longitude, latitude }) => {
    const iconImg = icon && icons.filter((item) => item.key === icon)
    const iconSrc = iconImg && iconImg[0].src

    return <>
        {iconSrc && unit && weather && temperature && windSpeed &&
            <>

                <RightSide>

                   
                    <SecondLine>

                        <Field>
                            <WeatherIcon src={iconSrc} />
                            <Description>{weather}</Description>
                        </Field>
                        <Field>
                            <div> Temperature </div>
                            <Temperature>
                                {temperature}
                            </Temperature>
                        </Field>
                        <Field>
                            <div>Wind speed</div>
                            <WindSpeed>
                                {windSpeed}
                            </WindSpeed>
                        </Field>

                    </SecondLine>



                    <ThirdLine>
                        <UnitSwitch activeUnit={unit} onClick={() => {changeActiveUnit(unit, dispatch)}}></UnitSwitch>
                    </ThirdLine>

                </RightSide>
            </>
        }
    </>
}




const Line = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: center;
    
    `


const SecondLine = styled(Line)`
    padding-top: 110px;
    `

const ThirdLine = styled(Line)`
    padding-top: 180px;
    `

const RightSide = styled.div`
    padding-left: 400px;
    padding-top: 70px;
    display: flex; 
    flex-direction: column; 
    z-index: 30;
    
`
const Field = styled.div`
    padding: 0px 20px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 260px;
`
const WeatherIcon = styled.img`
    width: 120px;
`

const Temperature = styled.div`
    font-size: 50px;
    color: #5b3099;
`

const WindSpeed = styled.div`
    font-size: 50px;
    color: #9d1c6e;
`

const Description = styled.div`
    padding-top: 20px;
    font-size: 23px;
    color: #5e84a8;
`


export const WeatherContent = connect(mapStateToProps)(_WeatherContent)