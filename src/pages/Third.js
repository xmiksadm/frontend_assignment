import Label from '../components/Label'
import Slider from "../components/Slider"
import Back from "../components/Back"
import styled from 'styled-components'
import SubmitButton from '../components/SubmitButton'
import Checkbox from '../components/Checkbox'
import { useSelector } from 'react-redux'
// import { bindActionCreators } from "redux"
// import { actionCreators } from "../state/index"
import { useTranslation } from "react-i18next"

const Text = styled.div `
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    margin-bottom: 1%;
`

const TextCheck = styled(Text) `
    font-weight: 500;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 3%;
`

const ButtonGroup = styled.div`
    display: flex;
    width: 80%;
    margin-top: 10%;
    margin-bottom: 5%;
`

function Third() {

    const { t } = useTranslation()

    const type = useSelector((state) => state.donateType)
    let donateType = ""
    if (type === "ALL")
        donateType = t("thirdPage.donateTypeAll")
    else if (type === "ONE")
        donateType = t("thirdPage.donateTypeOne")
    
    const money = useSelector((state) => state.money)
    const shelterName = useSelector((state) => state.shelter)
    const name = useSelector((state) => state.name)
    const surname = useSelector((state) => state.surname)
    const email = useSelector((state) => state.email)
    const phone = useSelector((state) => state.phone)
    const agree = useSelector((state) => state.agree)

    // const dispatch = useDispatch();
    // action creators
    // const AC = bindActionCreators(actionCreators, dispatch)

    function checkAll() {
        if (money > 0 && name !== "" && surname !== "" && email !== "" && phone.length > 9) 
            return true
        else 
            return false
    }

    return (
        <div>
            <Slider active={3} />
            <Label text={t("label.third")} />

            <Text>{t("thirdPage.donateType")}</Text>
            <TextCheck>{donateType}</TextCheck>
            {
                !shelterName 
                ?
                <div></div>
                :
                <div>
                    <Text>{t("thirdPage.oneShelter")}</Text>
                    <TextCheck>{shelterName.name}</TextCheck>
                </div>
            }
            <Text>{t("thirdPage.sum")}</Text>
            <TextCheck>{money}</TextCheck>
            <Text>{t("thirdPage.name")}</Text>
            <TextCheck>{name} {surname}</TextCheck>
            <Text>{t("thirdPage.email")}</Text>
            <TextCheck>{email}</TextCheck>
            <Text>{t("thirdPage.phone")}</Text>
            <TextCheck>+{phone}</TextCheck>

            <Checkbox />
            <ButtonGroup>
                <Back link={"/form"}/>
                {checkAll() && agree && <SubmitButton />}
            </ButtonGroup>
        </div>
    )
}

export default Third