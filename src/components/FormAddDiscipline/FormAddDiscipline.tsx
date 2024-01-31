import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAddDisciplineMutation} from "../../api/disciplineApi.ts";

// Инициализация интерфейса для параметров компонента
interface FormAddDisciplineProps {

}

// Инициализация компонента
const FormAddDiscipline: React.FC<FormAddDisciplineProps> = () => {
    // Подготовка хуков для использования формы
    const {handleSubmit, register} = useForm<IDisciplineCommand>()

    // Создание события на отправку данных в АПИ при нажатии на кнопку
    const onSubmit: SubmitHandler<IDisciplineCommand> = async data => {
        // Проверка на случай, если длина названия дисциплины больше 100 символов
        if(data.disciplineName.length > 100){
            // Оповещаем пользователя об ошибке
            alert("Максимальная длина названия дисциплины - 100 символов")
        }
        else{
            // Если ошибок нет, то добавляем дисциплину в систему
            await updateDiscipline({name: data.disciplineName})
        }
    }

    const [updateDiscipline] = useAddDisciplineMutation()

    return (
        <form className="add-discipline" onSubmit={handleSubmit(onSubmit)}>
            <span className="add-discipline__title">Добавить дисциплину</span>
            <input
                className="discipline-name"
                type="text"
                maxLength={100}
                placeholder="Название дисциплины"
                {...register("disciplineName")}
                title="Название дисциплины"
                required
            />
            <button className="add-discipline__button add-svg" type="submit" title="Добавить дисциплину в систему">
                <svg viewBox="0 0 24 24" fill="none">
                    <g id="Edit / Add_Plus">
                        <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </form>
    );
};

// Экспорт компонента
export default FormAddDiscipline
