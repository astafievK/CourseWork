import React from "react";

interface SelectWorkProps{

}

const SelectWork: React.FC<SelectWorkProps> = () => {
    return(
        <div className="filter work">
            <select className="select-work" id="filterWork">
                <option value={1}>Лабораторная работа 1</option>
                <option value={2}>Лабораторная работа 2</option>
            </select>
        </div>
    )
}

export default SelectWork