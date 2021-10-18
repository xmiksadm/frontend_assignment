import React from 'react'
import Slider from "../components/Slider"
import Label from '../components/Label'
import Back from '../components/Back'
import Continue from '../components/Continue'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import { useForm, Controller  } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"

const ButtonGroup = styled.div`
    display: flex;
    width: 80%;
    margin-top: 10%;
    margin-bottom: 5%;
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

    /* Change the white to any color */
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
        box-shadow: none;
        -webkit-box-shadow: 0 0 0 50px white inset !important;
    }
`
const Info = styled.div `
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;
`

function Second() {

    const { t } = useTranslation()

    const { register, handleSubmit, formState: { errors }, trigger, control } = useForm({
        defaultValues: { firstname: "", surname: "", email: "", phone: "" },
    });

    // const { field } = useController({ name: 'test' })

    // const name = useSelector((state) => state.name)
    // const lastName = useSelector((state) => state.surname)
    // const email = useSelector((state) => state.email)
    // const phone = useSelector((state) => state.phone)
    const history = useHistory();

    // DISPATCH -> Execute the action, dispatch this action to the reducer
    const dispatch = useDispatch();
    // action creators
    const AC = bindActionCreators(actionCreators, dispatch)    

    const onSubmit = (data) => {

        console.log(data)

        AC.name(data.firstname)
        AC.surname(data.surname)
        AC.email(data.email)
        AC.phone(data.phone)
        
        history.push('/confirm')
    }

    return (
        <div>

        <Slider active={2} />
        <Label text={t("label.second")}/>
            <form onSubmit={handleSubmit(onSubmit)} id='my-form'>
                <Info>{t("form.firstName")}</Info>
                <Input 
                    placeholder={t("form.placeholderFirstName")}
                    {...register('firstname', 
                                { required: t("form.required"), 
                                type: "text",
                                minLength: {value: 2, message: t("form.greaterThanTwo")}, 
                                maxLength: {value: 20, message: t("form.lessThanTwenty")} })}
                    onKeyUp={() => {
                        trigger('firstname')
                    }}
                />
                {errors.firstname && <p style={{color: 'red'}}>{errors.firstname.message}</p>}
                <br/>
                <Info>{t("form.lastName")}</Info>
                <Input 
                    placeholder={t("form.placeholderLastName")}
                    {...register('surname', 
                                { required: t("form.required"), 
                                type: "text",
                                minLength: {value: 2, message: t("form.greaterThanTwo")}, 
                                maxLength: {value: 30, message: t("form.lessThanThirty")} })}
                    onKeyUp={() => {
                        trigger('surname')
                    }}
                />
                {errors.surname && <p style={{color: 'red'}}>{errors.surname.message}</p>}
                <br/>
                <Info>{t("form.email")}</Info>
                <Input 
                    placeholder={t("form.placeholderEmail")}
                    {...register('email', { required: t("form.required"),
                                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: t("form.wrongEmail")},
                                type: "email"})}
                    onKeyUp={() => {
                        trigger('email')
                    }}
                />
                {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
                <br/>
                <Info>{t("form.phone")}</Info>
                <div >
                <Controller
                    name='phone'
                    control={control}
                    type="number"
                    rules={{
                        rules: { required: true,}, //{value: 9, message: "Musí byť viac ako 9 číslov"},
                    }}
                    render={({ field: { onChange, value } }) => (
                        <PhoneInput
                            value={value}
                            onChange={onChange}
                            country={'sk'}
                            onlyCountries={['sk', 'cz']}
                            masks={{sk: '(...) ... ...', cz: '(...) ... ...'}}
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
                            inputStyle={{
                                width: '557px',
                                height: '74px',
                                background: '#FFFFFF',
                                border: '1px solid #DFDFDF',
                                boxSizing: 'border-box',
                                borderRadius: '8px',
                                alignItems: 'none',
                                '&:focus': {
                                    outline: 'none',
                                    border: '5px solid #CD8B65'
                                }
                            }}
                            onKeyUp={() => {
                                trigger('phone')
                            }}
                        />
                    )}
                    />
                    {errors.phone && <p style={{color: 'red'}}>{errors.phone.message}</p>}
                </div>
                <br/>

                <ButtonGroup>
                    <Back link={"/"}/>
                    <Continue type="submit" link={"/confirm"}/>
                </ButtonGroup>
                
            </form>
        </div>
    )
}

export default Second