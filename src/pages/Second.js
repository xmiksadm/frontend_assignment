import { useState } from 'react'
import Slider from "../components/Slider"
import Label from '../components/Label'
import Back from '../components/Back'
import Continue from '../components/Continue'
import styled from 'styled-components'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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

    &:focus {
        outline: none;
        border: 1px solid #CD8B65;
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
    const [phone, setPhone] = useState('');
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

    function handlePhoneChange(phone) {
        setPhone(phone)
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
                <PhoneInput
                    country={'sk'}
                    onlyCountries={['sk', 'cz']}
                    value={phone}
                    masks={{sk: '(...) ... ...', cz: '(...) ... ...'}}
                    onChange={handlePhoneChange}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}
                    buttonStyle={{border: 'none', 
                        height: '60px', 
                        marginTop: '6px', 
                        marginLeft: '3px', 
                        backgroundColor: 'white'
                    }}
                    inputStyle={{width: '557px',
                        height: '74px',
                        background: '#FFFFFF',
                        border: '1px solid #DFDFDF',
                        boxSizing: 'border-box',
                        borderRadius: '8px',
                        alignItems: 'none',
                        '&:focus': {
                            outline: 'none',
                            border: '5px solid #CD8B65'
                        },
                    }}
                />

                <br/>

                <ButtonGroup>
                    <Back link={"/"}/>
                    { !isPending && <Continue link={"/confirm"}/> }
                    { isPending && <button disabled>Contributing...</button> }
                </ButtonGroup>
            </form>
        </div>
    )
}

export default Second