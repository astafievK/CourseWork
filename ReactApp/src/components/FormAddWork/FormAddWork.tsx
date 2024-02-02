import React from "react";
import SelectWorkType from "../SelectWorkType/SelectWorkType.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {useAddWorkMutation} from "../../api/workApi.ts";
import {useAddWorkForGroupMutation} from "../../api/groupWorkApi.ts";

interface FormAddWorkProps {

}

const FormAddWork: React.FC<FormAddWorkProps> = () => {
    const {handleSubmit, register} = useForm<IWorkCommand>()

    const {course} = useTypedSelector(state => state.select)
    const {semester} = useTypedSelector(state => state.select)
    const {discipline} = useTypedSelector(state => state.select)
    const {group} = useTypedSelector(state => state.select)
    const {workType} = useTypedSelector(state => state.select)

    const [addWork] = useAddWorkMutation()
    const [addWorkForGroup] = useAddWorkForGroupMutation()

    const onSubmit: SubmitHandler<IWorkCommand> = async data => {
        if(workType && data && course && semester && discipline && group)
        {
            const newWorkId = await addWork({
                workTitle: data.name,
                workTypeId: workType.id})

            if("data" in newWorkId)
            {
                await addWorkForGroup({
                    groupId: group?.id,
                    workId: newWorkId.data,
                    disciplineId: discipline?.id,
                    courseId: course?.id,
                    semesterId: semester?.id
                })
            }
            else{
                console.log("Ошибка")
            }
        }
    }

    return(
        <form className="add-work" onSubmit={handleSubmit(onSubmit)}>
            <span className="add-work__title">Добавить работу</span>
            <SelectWorkType/>
            <input
                className="work-title"
                type="text"
                placeholder="Заголовок работы"
                {...register("name")}
                title="Заголовок работы"
                required/>
            <button className="add-work__button add-svg" type="submit" title="Добавить работу">
                <svg viewBox="0 0 24 24" fill="none">
                    <g id="Edit / Add_Plus">
                        <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </form>
    )
}

export default FormAddWork
