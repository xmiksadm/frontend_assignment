import { useState, useEffect } from "react";
import ShelterList from "./ShelterList";

export default function Step1() {

    //TODO: add axios get request
    const [shelter, setShelter] = useState([
        {id: 1, name: 'prvy'},
        {id: 2, name: 'druhy'},
    ]);

    const [name, setName] = useState('treti')

    useEffect(() => {
        console.log('use effect ran')
    }, [])

    return (
        <div>
            <h1>Vyberte si možnosť, ako chcete pomôcť </h1>

            <div className="row">
                <h3 className="column">Chcem finančne prispieť konkrétnemu útulku</h3>
                <h3 className="column">Chcem finančne prispieť celej nadácii</h3>
            </div>

            <form>
                <label for="shelters">Vyberte útulok zo zoznamu </label>
                    <ShelterList shelter={shelter} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}