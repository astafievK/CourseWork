import React from "react";
import SelectWorkType from "../SelectWorkType/SelectWorkType.tsx";

interface FormAddWorkProps {

}

const FormAddWork: React.FC<FormAddWorkProps> = () => {
    return(
        <form className="add-work">
            <span className="add-work__title">Добавить работу</span>
            <SelectWorkType/>
            <input className="work-title" type="text" placeholder="Заголовок работы" title="Заголовок работы" required/>
            <button className="add-work__button add-svg" type="submit" title="Добавить работу">
                <svg viewBox="0 0 24 24" fill="none">
                    <g id="Edit / Add_Plus">
                        <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </form>
    )
}

export default FormAddWork
