import React from "react";

interface FormAddDisciplinesProps {

}

const FormAddDiscipline: React.FC<FormAddDisciplinesProps> = () => {
    return (
        <form className="add-discipline">
            <span className="add-discipline__title">Добавить дисциплину</span>
            <input
                className="discipline-name"
                type="text"
                placeholder="Название дисциплины"
                required
                />
            <button className="add-discipline__button" type="submit">Добавить</button>
        </form>
    )
}

export default FormAddDiscipline
