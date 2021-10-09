import styled from 'styled-components'

const H1 = styled.div `
    margin-bottom: 5%;
    max-width:100%;
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

function Label(props) {
    return (
        <div>
            <H1>
                {props.text}
            </H1>
        </div>
    )
}

export default Label
