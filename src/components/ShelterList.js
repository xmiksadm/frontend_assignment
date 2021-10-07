import styled from 'styled-components'

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
    return (
        <div>
            <Dropdown placeholder="">
                <option value="none" selected disabled hidden>
                    Vyberte útulok zo zoznamu
                </option>
                {shelters.map(shelter => (
                        <option key={shelter.id}>{shelter.name}</option>
                ))}
            </Dropdown>
        </div>
    );
}
 
export default ShelterList;