const ShelterList = ( {shelter} ) => {
    return (
        <div className="shelter-list">
            <select name="shelters" id="shelters">
                {shelter.map((shelter) => (
                            <option key={shelter.id}>{shelter.name}</option>
                ))}
            </select>
        </div>
    );
}
 
export default ShelterList;