import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

interface MarkFourProps {

}

const MarkFour: React.FC<MarkFourProps> = () => {
    const {handleSubmit, register} = useForm<ISampleMarkCommand>()

    const onChange: SubmitHandler<ISampleMarkCommand> = async data => {
        if (String(data.idMark).length !== 0) {
            // тело события
        }
    }

    return (
        <div className="mark cool">
            <input type="text"
                   data-mark="4"
                   maxLength={2}
                   placeholder="5"
                   {...register("idMark")}
                   onChange={handleSubmit(onChange)}
                   title="Кол-во заданий на оценку 5"/>
        </div>
    )
}

    export default MarkFour