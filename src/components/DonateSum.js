import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"

const Buttons = styled.table `
    width: 80%;
    margin-bottom: 10%;
    table-layout: fixed;
    border-collapse: collapse;

    display: flex;
    justify-content: space-around;
`

const Button = styled.button `
    width: 80%;
    margin: 5px;
    height: 53px;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;

    color: black;
    padding: 12px 2px;
    cursor: pointer;

    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 8px;

    &:hover {
        color: white;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }

    &.selected {
        color: white;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }
`

const Input = styled.input `
    width: 80%;
    border-radius: 8px;
    margin: 5px auto;
    text-align: center;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;

    background: #FFFFFF;
    border: 1px solid #DFDFDF;
`

const DonateSum = () => {

    const [selectedButton, setSelectedButton]  = useState(null);

    const money = useSelector((state) => state.money)
    // DISPATCH -> Execute the action, dispatch this action to the reducer
    const dispatch = useDispatch();

  // action creators
    const AC = bindActionCreators(actionCreators, dispatch)
    
    function donate(key) {
        AC.money(key)
        setSelectedButton(key);
    }

    return (
        <div>
            <h3>Suma, ktorou chcem prispieť: {money}</h3>

            <Buttons> 
                {[5, 10, 20, 30, 50, 100].map(key => 
                    <Button className={key === selectedButton ? 'selected' : ''} type="button" key={key} onClick={() => donate(key)}>{key} €</Button>
                )}
                <Input onInput={e => AC.money(e.target.value)} type="number" placeholder=" _ €"></Input>
            </Buttons>
        </div>
    )
}

export default DonateSum