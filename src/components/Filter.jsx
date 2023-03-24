export default function Filter({ setFilterIndex }) {


    return (
        <div className="col-6 col-md-2 a-zoom1 a-border1">
            <select className="form-select " name="" id="" defaultValue="0"
                onChange={e => setFilterIndex(e.target.selectedIndex)}
            >
                <option value="0">Default</option>
                <option value="1">Title [a-z]</option>
                <option value="2">Title [z-a]</option>
                <option value="3">Price $▲ </option>
                <option value="4">Price $▼ </option>
            </select>
        </div>
    )
}