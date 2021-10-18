import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"
import { useState } from 'react'
import { useTranslation } from "react-i18next"

const SubmitButtonn = styled.button `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 19px 23px;
    border: none;
    cursor: pointer;
    
    position: absolute; 
    left : 50%;
    width: 124px;
    height: 59px;
    color: white;
    background: #9F9F9F;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;

    /* Clear floats (clearfix hack) */
    &:after {
        content: "";
        clear: both;
        display: table;
    }

    &:hover {
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }
`

const SubmitButton = () => {

    const { t } = useTranslation()

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    const value = useSelector((state) => state.money)
    const shelterID = useSelector((state) => state.shelter.id)

    const firstName = useSelector((state) => state.name)
    const lastName = useSelector((state) => state.surname)
    const email = useSelector((state) => state.email)
    const phone = useSelector((state) => state.phone)

    const dispatch = useDispatch();
    // action creators
    const AC = bindActionCreators(actionCreators, dispatch)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit handled')
        AC.agree(false)

        const contribute = { firstName, lastName, email, phone, value, shelterID }

        setIsPending(true)
        const options = { 
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(contribute)
        }

        fetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', options)
        .then(response => {
            if (response.ok) {
                console.log("Contributed")
                setIsPending(false)
                history.push('/')
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));

        console.log(contribute)
    }

    return (
        <div>
            { !isPending && <SubmitButtonn onClick={handleSubmit}>{t("submitButton")}</SubmitButtonn> }
            { isPending && <SubmitButtonn disabled>{t("sending")}</SubmitButtonn> }
        </div>
    )
}

export default SubmitButton