import { useState, useEffect } from "react";
import ShelterList from "../components/ShelterList";
import styled, { css } from 'styled-components'
import TwoButtons from "../components/TwoButtons";
import Dropdown from "../components/Dropdown";
import Continue from "../components/Continue";

function First() {

    useEffect(() => {
        console.log('use effect ran')
    }, [])

    return (
        <div>
            <h1 className="h1step1">Vyberte si možnosť, ako chcete pomôcť </h1>
            <TwoButtons />
            <Dropdown />
            
            <div className="money">
                <h3>Suma, ktorou chcem prispieť</h3>
                <div className="row">
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">5 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">10 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">20 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">30 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">50 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">100 €</h3>
                    </button>
                    <input type="text" placeholder="_ €"/>
                </div>
            </div>
            <Continue />
        </div>
    )
}

export default First;