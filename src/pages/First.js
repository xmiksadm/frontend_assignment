import { useState } from "react";
import styled, { css } from 'styled-components'
import TwoButtons from "../components/TwoButtons";
import Dropdown from "../components/Dropdown";
import Continue from "../components/Continue";
import DonateSum from "../components/DonateSum";

function First() {

    return (
        <div>
            <h1 className="h1step1">Vyberte si možnosť, ako chcete pomôcť </h1>
            <TwoButtons />
            <Dropdown />
            <DonateSum />
            <Continue />
        </div>
    )
}

export default First;