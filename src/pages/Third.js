import Label from '../components/Label'
import Slider from "../components/Slider"
import Back from "../components/Back";
import styled from 'styled-components'
import SubmitButton from '../components/SubmitButton'
import Checkbox from '../components/Checkbox'
import { useSelector, useDispatch } from 'react-redux';

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

    const type = useSelector((state) => state.donateType)
    let donateType = ""
    if (type === "ALL")
        donateType = "Chcem finančne prispieť celej nadácii"
    else if (type === "ONE")
        donateType = "Chcem finančne prispieť konkretnemu útulku"
    const money = useSelector((state) => state.money)
    const shelter = useSelector((state) => state.shelter)
    return (
        <div>
            <Slider active={3} />
            <Label text={"Skontrolujte si zadané údaje"} />

            <Text>Akou formou chcem pomôcť</Text>
            <TextCheck>{donateType}</TextCheck>
            <Text>Najviac mi záleží na útulku</Text>
            <TextCheck>{shelter}</TextCheck>
            <Text>Suma ktorou chcem pomôcť</Text>
            <TextCheck>{money}</TextCheck>
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