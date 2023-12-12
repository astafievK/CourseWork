import React from "react";

interface FormAddDisciplinesProps {

}

const FormAddDiscipline: React.FC<FormAddDisciplinesProps> = () => {
    return(
        <td>
            <form className="add-discipline">
                <span className="add-discipline__title">Добавить дисциплину</span>
                <input className="discipline-name" type="text" placeholder="Название дисциплины"/>
                <button className="add-discipline__button" id="addDiscipline">Добавить</button>
            </form>
        </td>
    )
}

export default FormAddDiscipline
