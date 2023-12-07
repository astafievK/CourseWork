import React from "react";
import SelectWorkType from "../SelectWorkType/SelectWorkType.tsx";

type AddWorkProps = {

};

const AddWork: React.FC<AddWorkProps> = ({  }) => {
    return(
        <tr className="add work">
            <td className="add-work__title">Добавить работу</td>
            <SelectWorkType/>
            <td className="work-title">
                <input className="work-title__input" type="text" placeholder="Заголовок работы"/>
            </td>
            <td className="add-work">
                <button className="add-work__button" id="addWork">Добавить</button>
            </td>

            <td className="marks__title">Шаблон</td>
            <td className="marks">
                <div className="mark cool">
                    <input type="text" placeholder="5"/>
                </div>
                <div className="mark good">
                    <input type="text" placeholder="4"/>
                </div>
                <div className="mark bad">
                    <input type="text" placeholder="3"/>
                </div>
            </td>

            <td className="add-task__title">Добавить задания</td>
            <td className="add-task">
                <input className="add-task__numbers" type="text" name="numbers" placeholder="3"/>
                <button className="add-task__add">
                    <img className="add-task__img" src="src/assets/images/add_light.svg" alt="Добавить задание"/>
                </button>
            </td>
        </tr>
    )
}

export default AddWork
