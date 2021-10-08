import { useState } from 'react'
import styled from 'styled-components'

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

    const [sum, setSum] = useState(0);
    const [simpleButtonState, toggleSimpleButtonState] = useState(false);
    const handleSimpleButtonClick = () => toggleSimpleButtonState(!simpleButtonState)
    
    function setColor(e) {
        var target = e.target,
            count = +target.dataset.count;
      
        target.style.background = count === 1 ? "#linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)" : '#FFFFFF';
        target.dataset.count = count === 1 ? 0 : 1;
    }
    function donate(sum) {
        // alert('Hello!'); 
        // handleSimpleButtonClick();
        setSum(sum);
        console.log(sum);
    }

    const handleInput = event => {
        setSum(event);
    };

    return (
        <div>
            <h3>Suma, ktorou chcem prispieť</h3>

            <Buttons>
                <Button onClick={() => donate(5)}>5 €</Button>
                <Button onClick={() => donate(10)}>10 €</Button>
                <Button onClick={() => donate(20)}>20 €</Button>
                <Button onClick={() => donate(30)}>30 €</Button>
                <Button onClick={() => donate(50)}>50 €</Button>
                <Button onClick={() => donate(100)}>100 €</Button>
                <Input onInput={e => handleInput(e.target.value)} type="number" placeholder=" _ €"></Input>
            </Buttons>
        </div>
    )
}

export default DonateSum