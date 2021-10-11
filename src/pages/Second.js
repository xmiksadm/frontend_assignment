import { useState } from 'react'
import Slider from "../components/Slider"
import Label from '../components/Label'
import Back from '../components/Back'
import Continue from '../components/Continue'
import styled from 'styled-components'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"

const ButtonGroup = styled.div`
    display: flex;
    width: 80%;
    margin-top: 10%;
    margin-bottom: 20%;
`

const Input = styled.input `
    display: block;
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 8px;
    width: 557px;
    height: 74px;

    &:click {
        border: 1px solid #CD8B65;
    }
`
const Phone = styled(PhoneInput) `
    width: 557px;
    height: 80px;
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 8px;
    align-items: none;

    &:--PhoneInputCountryFlag-height {
        height: 2em;
    }

    .PhoneInputCountrySelect {
	    position: absolute;
    }

    .PhoneInput {
        align-items: stretch;
    }

`

const Info = styled.div `
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;
`

function Second() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [checkbox, setCheckbox] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // DISPATCH -> Execute the action, dispatch this action to the reducer
    const dispatch = useDispatch();
    // action creators
    const AC = bindActionCreators(actionCreators, dispatch)

    AC.name(name)
    AC.surname(surname)
    AC.email(email)
    AC.phone(phone)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit handled')

        const contribute = { name, surname, email, phone, checkbox }


        setIsPending(true)

        fetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(contribute)
        }).then(() => {
            console.log("Contributed")
            setIsPending(false)
            history.push('/')
        })

        console.log(contribute)
    }

    return (
        <div>

        <Slider active={2} />
        <Label text={"Potrebujeme od Vás zopár informácií"}/>
            <form>
                <Info>Meno</Info>
                    {/* onChange={(e) => setName(e.target.value)} */}
                <Input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Zadajte Vaše meno"
                    min="2" 
                    max="20"
                />
                <br/>
                <Info>Priezvisko</Info>
                <Input 
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Zadajte Vaše priezvisko"
                    min="2" 
                    max="30"
                    required
                />
                <br/>
                <Info>E-mailová adresa</Info>
                <Input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Zadajte Váš e-mail"
                    required
                />
                <br/>
                <Info>Telefónne číslo</Info>
                <Phone
                    addInternationalOption={false}
                    enableAreaCodes={true}
                    containerStyle={{ background: 'black' }}
                    defaultCountry="SK"
                    countries={["SK", "CZ"]}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+421"
                    style={{alignItems: 'stretch', borderRadius: '8px'}}
                />
                <br/>

                <ButtonGroup>
                    <Back link={"/"}/>
                    { !isPending && <Continue onClick={handleSubmit} link={"/confirm"}/> }
                    { isPending && <button disabled>Contributing...</button> }
                </ButtonGroup>
            </form>
        </div>
    )
}

export default Second