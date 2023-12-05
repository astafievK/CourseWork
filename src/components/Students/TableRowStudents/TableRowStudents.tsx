import "./TableRowStudents.css"
import "../../../data.ts"
import ButtonDiscipline from "../../ButtonDiscipline/ButtonDiscipline.tsx";

function TableRowStudents() {
    return (
        <tr>
            <td className="fullName">Астафьев Кирилл</td>
            <td><button className="retiredBtn">Отчислен(-а)</button></td>
        </tr>
    )
}

export default TableRowStudents;