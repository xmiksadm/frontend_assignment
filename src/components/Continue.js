import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContinueButton = styled.button `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 19px 23px;
    border: none;
    cursor: pointer;

    left : 60%;
    position: relative;
    width: 124px;
    height: 59px;
    color: white;
    background: #9F9F9F;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;

    /* Clear floats (clearfix hack) */
    &:after {
        content: "";
        clear: both;
        display: table;
    }

    &:hover {
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }
`

const Continue = (link) => {

    function handleSubmit() {
        console.log('Your input value is: ' )
        //Send state to the server code
    }
        
    return (
        <Link to={link.link} style={{ textDecoration: 'none' }}>
            <ContinueButton onClick={handleSubmit}>Pokračovať</ContinueButton>
        </Link>
    )
}

export default Continue
