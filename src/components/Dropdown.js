import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import ShelterList from "./ShelterList"

const ShelterForm = styled.form `
    margin-bottom: 5%;
`

const Dropdown = () => {

    //TODO: add axios get request
    const [shelter, setShelter] = useState([
        {id: 1, name: 'prvy'},
        {id: 2, name: 'druhy'},
    ]);

    const [name, setName] = useState('treti')

    return (
        <div>
            <ShelterForm>
                <label for="shelters"><h3>Vyberte útulok zo zoznamu</h3></label>
                    <ShelterList shelter={shelter} />
            </ShelterForm>
        </div>
    )
}

export default Dropdown
