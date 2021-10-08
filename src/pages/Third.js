import Back from "../components/Back";
import styled from 'styled-components'
import SubmitButton from '../components/SubmitButton'

const H1 = styled.div `
    margin-bottom: 5%;
    max-width:100%;
    width: 552px;
    height: 104px;
    left: 250px;
    top: 163px;

    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;

    letter-spacing: 0.01em;
    color: #000000;
`

const Text = styled.div `
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    margin-bottom: 3%;
`

const ButtonGroup = styled.div`
    display: flex;
    width: 80%;
    margin-top: 10%;
    margin-bottom: 20%;
`

const Checkbox = styled.input `
    background: #FFFFFF;
    border: 1px solid #F3E2D9;
    box-sizing: border-box;
    border-radius: 8px;
    width: 34px;
    height: 34px;
    float: left;
    /* for mark check: border: 2px solid #AB7455; */

    &:checked {
        display: block;
        background: orange;
        border: 2px solid #AB7455;
    }
`

const Agree = styled.label `
    word-wrap: break-word;
    line-height: 16px; 
    float: left;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;
    opacity: 0.8;
`

function Third() {
    return (
        <div>
            <H1>Skontrolujte si zadané údaje</H1>

            <Text>Akou formou chcem pomôcť</Text>
            <Text>Najviac mi záleží na útulku</Text>
            <Text>Suma ktorou chcem pomôcť</Text>
            <Text>Meno a priezvisko</Text>
            <Text>E-mailová adresa</Text>
            <Text>Telefónne číslo</Text>

            <div>
                <Checkbox required type="checkbox" value="test" />
                <Agree>
                    Súhlasím so spracovaním mojich osobných údajov
                </Agree>
            </div>
            <ButtonGroup>
                <Back link={"/form"}/>
                <SubmitButton />
            </ButtonGroup>
        </div>
    )
}

export default Third;