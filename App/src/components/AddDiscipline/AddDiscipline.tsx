import React from "react";

type AddDisciplineProps = {

};

const AddDiscipline: React.FC<AddDisciplineProps> = ({  }) => {
    return(
        <tr className="add discipline">
            <td className="add-discipline__title">Добавить дисциплину</td>
            <td className="discipline-name">
                <input type="text" placeholder="Название дисциплины"/>
            </td>
            <td className="add-discipline">
                <button className="add-discipline__button" id="addDiscipline">Добавить</button>
            </td>
        </tr>
    )
}

export default AddDiscipline
