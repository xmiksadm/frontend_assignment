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
            <label><h3>Útulok</h3></label>
            <ShelterForm>
                    {shelters && <ShelterList shelters={shelters} />} 
            </ShelterForm>
        </div>
    )
}

export default Dropdown
