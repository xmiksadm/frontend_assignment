const ShelterList = ( {shelters} ) => {
    return (
        <div className="shelter-list">
            <select name="shelters" id="shelters">
                {shelters.map(shelter => (
                            <option key={shelter.id}>{shelter.name}</option>
                ))}
            </select>
        </div>
    );
}
 
export default ShelterList;