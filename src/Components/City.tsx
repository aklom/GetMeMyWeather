import React from 'react'
import styled from "styled-components"

import PlaceholderIcon from "../Assets/placeholder2.png";
import { connect } from "react-redux";
import { mapStateToProps } from "../functions";
import { stateInterface } from "../interfaces";



export const _City: React.FC<stateInterface> = ({ city }) =>
    <Wrapper>
        <Placeholder src={PlaceholderIcon} />
        <Name> {city} </Name>
    </Wrapper>



const Wrapper = styled.div`
    position: absolute; 
    right: 80px;
    top: 60px;
    
    display: flex; 
    flex-direction: row;
    `

const Name = styled.div`
color: #d853ea;
font-size: 20px;
`

const Placeholder = styled.img`
  height: 30px;
  padding-right: 10px;
`

export const City = connect(mapStateToProps)(_City)