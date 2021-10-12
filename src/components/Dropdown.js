import React from 'react'
import styled from 'styled-components'
import useFetchGet from '../useFetchGet'
import ShelterList from "./ShelterList"
import { useSelector } from 'react-redux';

const ShelterForm = styled.form `
    margin-bottom: 5%;
`

const Dropdown = () => {

    const { data, isPending, error} = useFetchGet('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')

    const type = useSelector((state) => state.donateType)

    return (
        <div>
        {
            type === "ONE" ?
            <div>

                <label><h3>Útulok</h3></label>
                <ShelterForm>
                    { error && <div>{ error }</div>}
                    { isPending && <div>Loading...</div> }
                    { data && <ShelterList shelters={data} />} 
                </ShelterForm>
            </div>
            :
            <div></div>
        }
        </div>
    )
}

export default Dropdown
