import { useState } from "react";
import ShelterList from "./ShelterList";

export default function Step1() {

    const [shelter, setShelter] = useState([
        {id: 1, name: 'prvy'},
        {id: 2, name: 'druhy'},
    ]);
    return (
        <div>
            <h1>Vyberte si možnosť, ako chcete pomôcť </h1>

            <h3>Chcem finančne prispieť konkrétnemu útulku</h3>
            <h3>Chcem finančne prispieť celej nadácii</h3>

            <form>
                <label for="shelters">Vyberte útulok zo zoznamu </label>
                    <ShelterList shelter={shelter} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}