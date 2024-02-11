import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {useAddTaskForWorkMutation} from "../../api/taskApi.ts";

interface FormAddTasksProps {

}

const FormAddTasks: React.FC<FormAddTasksProps> = () => {
    const {handleSubmit, register} = useForm<ITasksCommand>()
    const {work} = useTypedSelector(state => state.select)

    const [addTasks] = useAddTaskForWorkMutation()

    const onSubmit: SubmitHandler<ITasksCommand> = async data => {
        if (work) {
            await addTasks({
                idWork: work.id,
                count: data.tasksCount
            })

            console.log("idWork: " + work.id)
            console.log("count: " + data.tasksCount)
        }
    }

    return(
        <form className="add-tasks" onSubmit={handleSubmit(onSubmit)}>
            <span className="add-task__title">Добавить задания</span>
            <div className="add-task">
                <input
                    className="add-task__numbers"
                    type="text" maxLength={2}
                    placeholder="3"
                    {...register("tasksCount")}
                    title="Количество заданий для добавления (не больше 99)"
                    required/>
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
