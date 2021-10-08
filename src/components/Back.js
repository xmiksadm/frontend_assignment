import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BackButton = styled.button `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 24px;
    border: none;
    cursor: pointer;
    width: 81px;
    height: 59px;
    background: #F3E2D9;
    border-radius: 100px;

    color: #2F2F2F;
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
        color: white;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }
`

const Back = (link) => {
        
    return (
        <Link to={link.link} style={{ textDecoration: 'none' }}>
            <BackButton>Späť</BackButton>
        </Link>
    )
}

export default Back