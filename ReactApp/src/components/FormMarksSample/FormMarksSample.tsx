import React from "react";
import MarkFive from "./MarkFive.tsx";

interface FormWorkSampleProps {

}

const FormWorkSample: React.FC<FormWorkSampleProps> = () => {
    return(
        <form className="marks-sample">
            <span className="marks__title">Шаблон</span>
            <div className="sample">
                <MarkFive/>
            </div>
        </form>
    )
}

export default FormWorkSample
