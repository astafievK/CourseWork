import React from "react";

interface FormAddStudentProps {

}

const FormAddStudent: React.FC<FormAddStudentProps> = () => {
    return(
        <form className="add-student">
            <span className="add-student__title">Добавить студента</span>
            <input className="student-name" type="text" placeholder="Имя" title="Имя студента" required/>
            <input className="student-surname" type="text" placeholder="Фамилия" title="Фамилия студента" required/>
            <input className="student-login" type="text" placeholder="Логин" title="Логин учетной записи студента" required/>
            <input className="student-password" type="password" placeholder="Пароль" title="Пароль учетной записи студента" required/>
            <button className="add-student__button add-svg" type="submit" title="Добавить учетную запись в систему">
                <svg viewBox="0 0 24 24" fill="none">
                    <g id="Edit / Add_Plus">
                        <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </form>
    )
}

export default FormAddStudent
