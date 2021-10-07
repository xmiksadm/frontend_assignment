import { useState } from 'react'

function Second() {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log('Submit handled')
    }

    return (
        <form>
            <label>Meno:<br/>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </label><br/>
            <label>Priezvisko:<br/>
                <input 
                    type="text" 
                />
            </label><br/>
            <label>E-mail:<br/>
                <input 
                    type="email" 
                />
            </label><br/> 
            <label>Telefón:<br/>
                <input 
                    type="number" 
                />
            </label><br/>
            <label>Potvrdiť súhlas so spracovaním osobných údajov:<br/>
                <input 
                    type="checkbox" 
                />
            </label><br/>
            <button onClick={handleSubmit}>Send</button>
        </form>
    )
}

export default Second;