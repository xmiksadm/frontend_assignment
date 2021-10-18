import Slider from "../components/Slider"
import Label from '../components/Label'
import TwoButtons from "../components/TwoButtons";
import Dropdown from "../components/Dropdown";
import Continue from "../components/Continue";
import DonateSum from "../components/DonateSum";
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

function First() {

    const { t } = useTranslation()
    
    const donateType = useSelector((state) => state.donateType)
    const money = useSelector((state) => state.money)
    const shelter = useSelector((state) => state.shelter)
    
    function check() {
        if (money < 1) {
            return false
        }
        else if (donateType === "ONE" && shelter === 0) {
            return false
        }
        else return true
    }


    return (
        <div style={{marginBottom: '20%'}}>
            <Slider active={1} />
            <Label text={t("label.first")} />
            <TwoButtons/>
            <Dropdown />
            <DonateSum />
            {check() && <Continue link={"/form"}/>}
            
        </div>
    )
}

export default First