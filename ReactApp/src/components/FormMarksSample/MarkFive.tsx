import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {useDeleteSampleMarkMutation, useIsMarkExistsQuery, useSetSampleMarkMutation} from "../../api/workMarkApi.ts";

interface MarkFiveProps {

}

const MarkFive: React.FC<MarkFiveProps> = () => {
    const {handleSubmit, register} = useForm<ISampleMarkCommand>()

    const markId = 1;

    const {work} = useTypedSelector(state => state.select)
    const [setMark] = useSetSampleMarkMutation()
    const [deleteMark] = useDeleteSampleMarkMutation()
    const {data: isMarkExists} = useIsMarkExistsQuery({
        WorkId: work ? work.id : 0,
        MarkId: markId
    })

    console.log("work.id: " + (work ? work.id : 0))
    console.log("isMarkExists: " + isMarkExists)

    const onChange: SubmitHandler<ISampleMarkCommand> = async data => {
        if (work) {
            if(isMarkExists){
                await deleteMark({
                    idWork: work.id,
                    idMark: markId
                })
            }

            await setMark({
                idWork: work.id,
                idMark: markId,
                taskCount: Number(data.taskCount)
            })

            console.log("POST")
            console.log("idWork " + work.id)
            console.log("idMark " + markId)
            console.log("taskCount " + Number(data.taskCount))
        }
    }

    return (
        <div className="mark cool">
            <input type="text"
                   data-mark="1"
                   maxLength={2}
                   placeholder="5"
                   id="inputMarkCool"
                   {...register("taskCount")}
                   onChange={handleSubmit(onChange)}
                   title="Кол-во заданий на оценку 5"
                   required
            />
        </div>
    )
}

export default MarkFive