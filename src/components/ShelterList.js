import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"

const Dropdown = styled.select `
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 8px;

    position: relative;
    display: flex;
    width: 80%;
    margin-bottom: 5%;

    font-size: 1.1em;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    background: #FAF9F9;
    border: 1px solid grey;
    color: black;
    padding: 16px 2px;
`

const ShelterList = ( {shelters} ) => {

    const dispatch = useDispatch();
    // action creators
    const AC = bindActionCreators(actionCreators, dispatch)

    function chooseShelter(shelterId) {
        AC.shelter(shelterId)
    }

    return (
        <div>
            <Dropdown placeholder="" defaultValue={'DEFAULT'} onChange={e => chooseShelter(e.target.value) }>
                <option value="DEFAULT" disabled>
                    Vyberte útulok zo zoznamu
                </option>
                {shelters.map(shelter => (
                        <option key={shelter.id}  value={shelter.id}>{shelter.name}</option>
                ))}
            </Dropdown>
        </div>
    );
}
 
export default ShelterList;