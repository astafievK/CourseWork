import React from "react";

interface FormAddTasksProps {

}

const FormAddTasks: React.FC<FormAddTasksProps> = () => {
    return(
        <td>
            <form className="add-tasks">
                <span className="add-task__title">Добавить задания</span>
                <div className="add-task">
                    <input className="add-task__numbers" type="text" maxLength={2}  name="numbers" placeholder="3"/>
                    <button className="add-task__add">
                        <img className="add-task__img" src="src/assets/images/add_light.svg" alt="Добавить задание"/>
                    </button>
                </div>
            </form>
        </td>
    )
}

export default FormAddTasks
