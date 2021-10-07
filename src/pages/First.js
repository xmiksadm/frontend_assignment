import { useState, useEffect } from "react";
import ShelterList from "../ShelterList";

function First() {

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
            <h1 className="h1step1">Vyberte si možnosť, ako chcete pomôcť </h1>

            <div className="row">
                <button style={{borderRadius: '24px 0px 0px 24px'}}>
                    <h3 className="column">Chcem finančne prispieť konkrétnemu útulku</h3>
                </button>
                <button style={{borderRadius: '0px 24px 24px 0px'}}>
                    <h3 className="column">Chcem finančne prispieť celej nadácii</h3>
                </button>
            </div>

            <form className="sheltersForm">
                <label for="shelters"><h3>Vyberte útulok zo zoznamu</h3></label>
                    <ShelterList shelter={shelter} />
            </form>
            
            <div className="money">
                <h3>Suma, ktorou chcem prispieť</h3>
                <div className="row">
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">5 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">10 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">20 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">30 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">50 €</h3>
                    </button>
                    <button style={{borderRadius: '8px'}}>
                        <h3 className="column">100 €</h3>
                    </button>
                    <input type="text" placeholder="_ €"/>
                </div>
            </div>
        </div>
    )
}

export default First;