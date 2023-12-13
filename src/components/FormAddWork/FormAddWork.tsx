import React from "react";
import SelectWorkType from "../SelectWorkType/SelectWorkType.tsx";

interface FormAddWorkProps {

}

const FormAddWork: React.FC<FormAddWorkProps> = () => {
    return(

        <td>
            <form className="add-work">
                <span className="add-work__title">Добавить работу</span>
                <SelectWorkType/>
                <input className="work-title" type="text" placeholder="Заголовок работы"/>
                <button className="add-work__button" type="submit" id="addWork">Добавить</button>
            </form>
        </td>
    )
}

export default FormAddWork
