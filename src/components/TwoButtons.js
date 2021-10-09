import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

const Pet = styled(PetsOutlinedIcon) `
    filter: invert(100%);
    transform: scale(1.8);
    background-color: grey;
    border-radius:50%;
    box-shadow: 0 0 0 10px grey;
    opacity: 0.5;
    position: absolute;
    top: 50px;
    left: 20%;
`

const Wallet = styled(AccountBalanceWalletOutlinedIcon) `
    transform: scale(1.8);
    background-color: grey;
    border-radius:50%;
    box-shadow: 0 0 0 10px grey;
    opacity: 0.5;
    position: absolute;
    top: 50px;
    left: 20%;
`

const ButtonGroup = styled.div`
    position: relative;
    display: flex;
    width: 80%;
    margin-bottom: 5%;
`

const Button = styled(ButtonGroup)`
    font-size: 1.1em;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    background: #FAF9F9;
    border: 1px solid #CD8B65;
    color: black;
    padding: 10px 24px;
    cursor: pointer;

    flex: 50%;
    padding: 10px;
    height: 150px;
    max-width: 300px;

    /* Add a background color on hover */
    &:hover {
        color: white;
        background: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    }

    &:not(:last-child) {
        border-right: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    &:after {
        content: "";
        clear: both;
        display: table;
    }
  ${props => props.left && css `
    border-radius: 24px 0px 0px 24px;
  `}
  ${props => props.right && css `
    border-radius: 0px 24px 24px 0px;
  `}

  ${({ active }) => active && css`
    background: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);
    color: white;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  `}
`

const TwoButtons = () => {

    const [activeLeft, setActiveLeft] = useState(false);
    const [activeRight, setActiveRight] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleButtonLeft = (e) => {
        if (activeRight){
            setActiveRight(false);
        }
        setShowDropdown(true);
        setActiveLeft(!activeLeft);
    }
    const handleButtonRight = (e) => {
        if (activeLeft){
            setActiveLeft(false);
        }
        setShowDropdown(false);
        setActiveRight(!activeRight);
    }

    return (
        <div>
            <ButtonGroup>
                <Button left active={activeLeft} onClick={handleButtonLeft}>
                    <Wallet />Chcem finančne prispieť konkrétnemu útulku
                </Button>
                <Button right active={activeRight} onClick={handleButtonRight}>
                    <Pet />Chcem finančne prispieť celej nadácii
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default TwoButtons
