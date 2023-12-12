import React from "react";

interface FormAddStudentProps {

}

const FormAddStudent: React.FC<FormAddStudentProps> = () => {
    return(
        <td>
            <form className="add-student">
                <span className="add-student__title">Добавить студента</span>
                <input className="student-name" type="text" placeholder="Имя"/>
                <input className="student-surname" type="text" placeholder="Фамилия"/>
                <button className="add-student__button" type="submit" id="addStudent">Добавить</button>
            </form>
        </td>
    )
}

export default FormAddStudent
