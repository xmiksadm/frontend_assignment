import Label from '../components/Label'
import Slider from "../components/Slider"
import Back from "../components/Back";
import styled from 'styled-components'
import SubmitButton from '../components/SubmitButton'
import Checkbox from '../components/Checkbox'

const Text = styled.div `
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    margin-bottom: 1%;
`

const TextCheck = styled(Text) `
    font-weight: 500;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 3%;
`

const ButtonGroup = styled.div`
    display: flex;
    width: 80%;
    margin-top: 10%;
    margin-bottom: 20%;
`

function Third() {
    return (
        <div>
            <Slider active={3} />
            <Label text={"Skontrolujte si zadané údaje"} />

            <Text>Akou formou chcem pomôcť</Text>
            <TextCheck>asd</TextCheck>
            <Text>Najviac mi záleží na útulku</Text>
            <TextCheck>asd</TextCheck>
            <Text>Suma ktorou chcem pomôcť</Text>
            <TextCheck>asd</TextCheck>
            <Text>Meno a priezvisko</Text>
            <TextCheck>asd</TextCheck>
            <Text>E-mailová adresa</Text>
            <TextCheck>asd</TextCheck>
            <Text>Telefónne číslo</Text>
            <TextCheck>asd</TextCheck>

            <Checkbox />
            <ButtonGroup>
                <Back link={"/form"}/>
                <SubmitButton />
            </ButtonGroup>
        </div>
    )
}

export default Third