import React from "react";

interface FormAddGroupProps {

}

const FormAddGroup: React.FC<FormAddGroupProps> = () => {
    return(
        <form className="add-group">
            <span className="add-group__title">Добавить группу</span>
            <input className="group-name" type="text" placeholder="Имя группы" title="Имя группы" required/>
            <button className="add-group__button add-svg" type="submit" title="Добавить группу в систему">
                <svg viewBox="0 0 24 24" fill="none">
                    <g id="Edit / Add_Plus">
                        <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </form>
    )
}

export default FormAddGroup
