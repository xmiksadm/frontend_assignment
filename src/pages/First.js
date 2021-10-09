import Slider from "../components/Slider"
import Label from '../components/Label'
import TwoButtons from "../components/TwoButtons";
import Dropdown from "../components/Dropdown";
import Continue from "../components/Continue";
import DonateSum from "../components/DonateSum";

function First() {

    return (
        <div style={{marginBottom: '20%'}}>
            <Slider active={1} />
            <Label text={"Vyberte si možnosť, ako chcete pomôcť"} />
            <TwoButtons />
            <Dropdown style={{visibility: 'hidden'}}/>
            <DonateSum />
            <Continue link={"/form"} />
        </div>
    )
}

export default First