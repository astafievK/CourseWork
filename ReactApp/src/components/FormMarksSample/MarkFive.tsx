import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

interface MarkFiveProps {

}

const MarkFive: React.FC<MarkFiveProps> = () => {
    const {handleSubmit, register} = useForm<ISampleMarkCommand>()

    const onChange: SubmitHandler<ISampleMarkCommand> = async data => {
        if (String(data.idMark).length !== 0) {
            // тело события
        }
    }

    return (
        <div className="mark cool">
            <input type="text"
                   data-mark="5"
                   maxLength={2}
                   placeholder="5"
                   {...register("idMark")}
                   onChange={handleSubmit(onChange)}
                   title="Кол-во заданий на оценку 5"/>
        </div>
    )
}

    export default MarkFive