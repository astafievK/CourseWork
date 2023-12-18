import React from "react";

interface FormAddGroupProps {

}

const FormAddGroup: React.FC<FormAddGroupProps> = () => {
    return(
        <form className="add-group">
            <span className="add-group__title">Добавить группу</span>
            <input className="group-name" type="text" placeholder="Имя группы"/>
            <button className="add-group__button" type="submit" id="addGroup">Добавить</button>
        </form>
    )
}

export default FormAddGroup
