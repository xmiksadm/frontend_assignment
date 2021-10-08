import React from 'react'
import styled, { css } from 'styled-components'

const OneSlider = styled.div `
    position: static;
    width: 20.6px;
    height: 6px;
    left: 74.36px;
    bottom: 0px;

    background: #9F9F9F;
    opacity: 0.36;
    border-radius: 10px;
    flex: none;
    flex-grow: 0;
    margin-right: 5px;

    ${props => props.active && css`
        opacity: 1;
        width: 43.77px;
        height: 6px;
        background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #CD8B65;
        border-radius: 10px;
    `}
`

const SliderGroup = styled.div `

    max-width: 50%;
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    width: 80%;
`

const Slider = () => {
    return (
        <div>
            <SliderGroup>
                <OneSlider active></OneSlider>
                <OneSlider></OneSlider>
                <OneSlider></OneSlider>
            </SliderGroup>
        </div>
    )
}

export default Slider
