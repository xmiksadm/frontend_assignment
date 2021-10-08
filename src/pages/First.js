import styled from 'styled-components'
import TwoButtons from "../components/TwoButtons";
import Dropdown from "../components/Dropdown";
import Continue from "../components/Continue";
import DonateSum from "../components/DonateSum";

const H1 = styled.div `
    padding-bottom: 5%;
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

function First() {

    return (
        <div>
            <H1>Vyberte si možnosť, ako chcete pomôcť</H1>
            <TwoButtons />
            <Dropdown />
            <DonateSum />
            <Continue />
        </div>
    )
}

export default First;