import React from "react";

interface SelectDisciplineProps{

}

const SelectDiscipline: React.FC<SelectDisciplineProps> = () => {
    return(
        <div className="filter discipline">
            <select className="select-discipline" id="filterDiscipline" onChange={(event) => {
                console.log(event.target.value)
            }}>
                <option>МДК 01.01</option>
                <option>МДК 01.02</option>
            </select>
        </div>
    )
}

export default SelectDiscipline