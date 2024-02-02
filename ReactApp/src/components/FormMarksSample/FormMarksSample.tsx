import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

interface FormWorkSampleProps {

}

const FormWorkSample: React.FC<FormWorkSampleProps> = () => {
    const {handleSubmit, register} = useForm<ISampleMarkCommand>()

    const onChange: SubmitHandler<ISampleMarkCommand> = async data => {
        if(String(data.idMark).length !== 0){
            // тело события
        }
    }


    return(
        <form className="marks-sample">
            <span className="marks__title">Шаблон</span>
            <div className="sample">
                <div className="mark cool">
                    <input type="text"
                           data-mark="5"
                           maxLength={2}
                           placeholder="5"
                           {...register("idMark")}
                           onChange={handleSubmit(onChange)}
                           title="Кол-во заданий на оценку 5"/>
                </div>
                <div className="mark good">
                    <input type="text"
                           data-mark="4"
                           maxLength={2}
                           placeholder="4"
                           {...register("idMark")}
                           onChange={handleSubmit(onChange)}
                           title="Кол-во заданий на оценку 4"/>
                </div>
                <div className="mark bad">
                    <input type="text"
                           data-mark="3"
                           maxLength={2}
                           placeholder="3"
                           {...register("idMark")}
                           onChange={handleSubmit(onChange)}
                           title="Кол-во заданий на оценку 3"/>
                </div>
            </div>
        </form>
    )
}

export default FormWorkSample
