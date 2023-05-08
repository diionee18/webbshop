const Sortlist = () =>{
    return(
        <div className="sort-list">
        <select>
            <option value="rekomenderat">Rekommenderat</option>
            <option value="lägstpris">Billigast först</option>
            <option value="högstpris">Dyrast först</option>
        </select>
    </div>
    )
}
export default Sortlist