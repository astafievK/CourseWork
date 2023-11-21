import "./TableRowStudents.css"
import "../../../data.js"
import ButtonDiscipline from "../../ButtonDiscipline/ButtonDiscipline.jsx";

function TableRowStudents() {
    return (
        <tr>
            <td className="fullName">Астафьев Кирилл</td>
            <td><button className="retiredBtn">Отчислен(-а)</button></td>
        </tr>
    )
}

export default TableRowStudents;