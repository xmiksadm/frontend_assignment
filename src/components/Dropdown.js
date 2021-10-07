import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ShelterList from "./ShelterList"

const ShelterForm = styled.form `
    margin-bottom: 5%;
`

const Dropdown = () => {

    const [shelters, setShelters] = useState(null);

    useEffect(() => {
        fetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setShelters(data.shelters)
        })
    }, [])

    return (
        <div>
            <ShelterForm>
                <label for="shelters"><h3>Vyberte útulok zo zoznamu</h3></label>
                    {shelters && <ShelterList shelters={shelters} />} 
            </ShelterForm>
        </div>
    )
}

export default Dropdown
