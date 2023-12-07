import React from "react";

type AddDisciplineProps = {

};

const AddStudent: React.FC<AddDisciplineProps> = ({  }) => {
    return(
        <tr className="add student">
            <td className="add-student__title">Добавить студента</td>
            <td className="student-name">
                <input type="text" placeholder="Имя"/>
            </td>
            <td className="student-surname">
                <input type="text" placeholder="Фамилия"/>
            </td>
            <td className="add-student">
                <button className="add-student__button" id="addStudent">Добавить</button>
            </td>
            <td className="add-group__title">Добавить группу</td>
            <td className="group-name">
                <input type="text" placeholder="Имя группы"/>
            </td>
            <td className="add-group">
                <button className="add-group__button" id="addGroup">Добавить</button>
            </td>
        </tr>
    )
}

export default AddStudent
