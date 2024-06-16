import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAddGroupMutation} from "../../api/groupApi.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

interface FormAddGroupProps {

}

const FormAddGroup: React.FC<FormAddGroupProps> = () => {
    const {handleSubmit, register} = useForm<IGroupCommand>()
    const {course} = useTypedSelector(state => state.select)
    const {semester} = useTypedSelector(state => state.select)

    const onSubmit: SubmitHandler<IGroupCommand> = async data => {
        if(course && semester){
            await addGroup({
                name: data.groupName,
                idCourse: course.id,
                idSemester: semester.id
            })
        }
    }

    const [addGroup] = useAddGroupMutation()

    return(
        <form className="add-group" onSubmit={handleSubmit(onSubmit)}>
            <span className="add-group__title">Добавить группу</span>
            <input
                className="group-name"
                type="text"
                placeholder="Имя группы"
                {...register("groupName")}
                title="Имя группы"
                required/>
            <button className="add-group__button add-svg" type="submit" title="Добавить группу в систему">
                <svg viewBox="0 0 24 24" fill="none">
                    <g id="Edit / Add_Plus">
                        <path d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#e1e3e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </form>
    )
}

export default FormAddGroup
