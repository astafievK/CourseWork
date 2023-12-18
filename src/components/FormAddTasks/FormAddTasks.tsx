import React from "react";

interface FormAddTasksProps {

}

const FormAddTasks: React.FC<FormAddTasksProps> = () => {
    return(
        <form className="add-tasks">
            <span className="add-task__title">Добавить задания</span>
            <div className="add-task">
                <input className="add-task__numbers" type="text" maxLength={2}  name="numbers" placeholder="3"/>
                <button className="add-task__add">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
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
