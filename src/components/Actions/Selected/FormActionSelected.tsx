import React from "react";

interface FormActionSelectedProps {

}

const FormActionSelected: React.FC<FormActionSelectedProps> = () => {
    return(
        <div className="action select-tasks">
            <input className="select-tasks__numbers" type="text" name="numbers" placeholder="1-3,5" required/>
            <button className="select-tasks__select">
                Выбранные
            </button>
        </div>
    )
}
export default FormActionSelected;