import "./TableRowDisciplines.css"
import "../../../data.js"
import classNames from "classnames";
import ButtonDiscipline from "../../ButtonDiscipline/ButtonDiscipline.jsx";

function TableRowDisciplines(props){
    const {groupName} = props;

    return (
        <tr>
            <td className={classNames({group: true})}>{groupName}</td>
            <td className={classNames({disciplines: true})}>
                <ButtonDiscipline disciplineName={"ОПБД"}/>
            </td>
        </tr>
    )
}

export default TableRowDisciplines;