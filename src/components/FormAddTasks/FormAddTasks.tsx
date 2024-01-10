import React from "react";

interface FormAddTasksProps {

}

const FormAddTasks: React.FC<FormAddTasksProps> = () => {
    function validateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        if (!value.match(/^[0-9]+$/)) {
            event.target.value = value.substring(0, value.length - 1);
        }
    }

    return(
        <form className="add-tasks">
            <span className="add-task__title">Добавить задания</span>
            <div className="add-task">
                <input className="add-task__numbers" type="text" maxLength={2}  name="numbers" placeholder="3" onChange={validateInput} title="Количество заданий для добавления (не больше 99)" required/>
                <button className="add-task__add add-svg" title="Добавить задания в работу">
                    <svg viewBox="0 0 24 24" fill="none">
                        <g id="Edit / Add_Plus">
                            <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default FormAddTasks
