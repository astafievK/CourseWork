import React from "react";

interface FormWorkSampleProps {

}

const FormWorkSample: React.FC<FormWorkSampleProps> = () => {
    function validateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        if (!value.match(/^[0-9]+$/)) {
            event.target.value = value.substring(0, value.length - 1);
        }
    }

    return(
        <form className="marks-sample">
            <span className="marks__title">Шаблон</span>
            <div className="sample">
                <div className="mark cool">
                    <input type="text" maxLength={1} placeholder="5" onChange={validateInput} title="Кол-во заданий на оценку 5"/>
                </div>
                <div className="mark good">
                    <input type="text" maxLength={1} placeholder="4" onChange={validateInput} title="Кол-во заданий на оценку 4"/>
                </div>
                <div className="mark bad">
                    <input type="text" maxLength={1} placeholder="3" onChange={validateInput} title="Кол-во заданий на оценку 3"/>
                </div>
            </div>
        </form>
    )
}

export default FormWorkSample
