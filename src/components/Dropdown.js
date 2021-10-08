import React from 'react'
import styled from 'styled-components'
import useFetch from '../useFetch'
import ShelterList from "./ShelterList"

const ShelterForm = styled.form `
    margin-bottom: 5%;
`

const Dropdown = () => {

    const { data, isPending, error} = useFetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')

    return (
        <div>
            <label><h3>Útulok</h3></label>
            <ShelterForm>
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                { data && <ShelterList shelters={data} />} 
            </ShelterForm>
        </div>
    )
}

export default Dropdown
