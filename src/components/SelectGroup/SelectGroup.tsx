import React from "react";

interface SelectGroupProps{

}

const SelectGroup: React.FC<SelectGroupProps> = () => {
    return(
        <div className="filter group">
            <select className="select-group" id="filterGroup" onChange={(event) => {
                console.log(event.target.value)
            }}>
                <option>ИСПП-01</option>
                <option>ПКС-01</option>
            </select>
        </div>
    )
}

export default SelectGroup