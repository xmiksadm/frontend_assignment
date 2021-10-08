import { useState } from 'react'
import Back from '../components/Back'
import Continue from '../components/Continue';
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

const ButtonGroup = styled.div`
    display: flex;
    width: 80%;
    margin-top: 10%;
    margin-bottom: 20%;
`

function Second() {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log('Submit handled')
    }

    return (
        <div>
        <H1>

            Potrebujeme od Vás zopár informácií
        </H1>

            <form>
                <label>Meno:<br/>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label><br/>
                <label>Priezvisko:<br/>
                    <input 
                        type="text" 
                    />
                </label><br/>
                <label>E-mail:<br/>
                    <input 
                        type="email" 
                    />
                </label><br/> 
                <label>Telefón:<br/>
                    <input 
                        type="number" 
                    />
                </label><br/>
                <label>Potvrdiť súhlas so spracovaním osobných údajov:<br/>
                    <input 
                        type="checkbox" 
                    />
                </label><br/>
                {/* <button onClick={handleSubmit}>Send</button> */}

                <ButtonGroup>
                    <Back link={"/"}/>
                    <Continue link={"/confirm"}/>
                </ButtonGroup>
            </form>
        </div>
    )
}

export default Second;