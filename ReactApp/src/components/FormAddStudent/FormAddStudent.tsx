import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAddStudentMutation} from "../../api/studentApi.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

interface FormAddStudentProps {

}

const FormAddStudent: React.FC<FormAddStudentProps> = () => {
    const {handleSubmit, register} = useForm<IStudentCommand>()
    const { group } = useTypedSelector(state => state.select)

    const onSubmit: SubmitHandler<IStudentCommand> = async data => {
        if(group){
            await addStudent({
                idGroup: (group.id),
                login: data.login,
                password: data.password,
                name: data.name,
                surname: data.surname,
                patronymic: data.patronymic
            })
        }
    }

    const [addStudent] = useAddStudentMutation()

    return(
        <form className="add-student" onSubmit={handleSubmit(onSubmit)}>
            <span className="add-student__title">Добавить студента</span>
            <input className="student-surname" type="text" placeholder="Фамилия" {...register("surname")}
                   title="Фамилия студента" required/>
            <input className="student-name" type="text" placeholder="Имя" {...register("name")} title="Имя студента"
                   required/>
            <input className="student-patronymic" type="text" placeholder="Отчество" {...register("patronymic")}
                   title="Отчество студента" required/>
            <input className="student-login" type="text" placeholder="Логин" {...register("login")}
                   title="Логин учетной записи студента" required/>
            <input className="student-password" type="password" placeholder="Пароль" {...register("password")}
                   title="Пароль учетной записи студента" required/>
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
