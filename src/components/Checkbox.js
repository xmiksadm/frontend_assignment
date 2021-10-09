import React from 'react'
import styled from 'styled-components'

const LabelContainer = styled.label `
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    margin-top: 10%;
    cursor: pointer;

    font-size: 20px;
    line-height: 30px;
    color: #2F2F2F;
    opacity: 0.8; 

    /* Hide the browser's default checkbox */
    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    & p {
        margin-left: 2%;
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ .checkmark {
        background-color: #AB7455;
    }

    /* When the checkbox is checked */
    & input:checked ~ .checkmark {
        background-color: white;
        border: 2px solid #F3E2D9;
    }

    /* Show the checkmark when checked */
    & input:checked ~ .checkmark:after {
        display: block;
    }
`
/* Create a custom checkbox */
const SpanCheckmark = styled.span `
    margin-right: 100px;

    position: absolute;
    top: 0;
    left: 0;

    background: #FFFFFF;
    border: 2px solid #F3E2D9;
    box-sizing: border-box;
    border-radius: 8px;
    width: 34px;
    height: 34px;

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
        content: "";
        position: absolute;
        display: none;

        left: 11px;
        top: 6px;
        width: 6px;
        height: 13px;
        border: 2px solid #AB7455;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

const Checkbox = () => {
    return (
        <div>
            <LabelContainer>
                <p>Súhlasím so spracovaním mojich osobných údajov</p>
                <input required type="checkbox" />
                <SpanCheckmark className="checkmark"></SpanCheckmark>
            </LabelContainer>
        </div>
    )
}

export default Checkbox
