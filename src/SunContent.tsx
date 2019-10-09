import React from "react"

import SunsetIcon from "./Assets/sunset.png"
import SunriseIcon from "./Assets/sunrise.png"
import styled from "styled-components"
import { mapStateToProps } from './App';
import { connect } from "react-redux"
import { stateInterface } from "./interfaces"

const formatDate = (n: number) => {
    const minutes = "0" + n; 
    return minutes.substr(-2)
}

export const _SunContent: React.FC<stateInterface> = ({ sunrise, sunset }) => {
    const sunriseDate = sunrise && new Date(sunrise * 1000)
    const sunsetDate = sunset && new Date(sunset * 1000)

    return sunriseDate && sunsetDate ? <RightSide>

        <Line>
            <Icon1 src={SunriseIcon} />
            <Field>
                <div> Sunrise </div>
                <Time>{sunriseDate.getHours()}:{formatDate(sunriseDate.getMinutes())}</Time>
            </Field>
        </Line>

        <Line>
            <Icon2 src={SunsetIcon} />
            <Field>
                <div> Sunset </div>
                <Time>{sunsetDate.getHours()}:{formatDate(sunsetDate.getMinutes())}</Time>
            </Field>
        </Line>

    </RightSide> : <></>

}


const RightSide = styled.div`
    padding-left: 400px;
    padding-top: 90px;
    display: flex; 
    flex-direction: column; 
    z-index: 30;
    
`

const Line = styled.div`
    display: flex; 
    flex-direction: row; 
    padding: 50px 0;
    `

const Time = styled.div`
font-size: 40px; 
    color: #445d85;
`

const Icon1 = styled.img`
    padding: 12px 0;
    margin-top: -25px;
`

const Icon2 = styled.img`
    padding: 11px 10px;
    height: 48px;
`


const Field = styled.div`
    padding: 0px 20px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 260px;
`

export const SunContent = connect(mapStateToProps)(_SunContent)