import "./TableRowStudents.css"
import "../../../data.ts"

function TableRowStudents() {
    return (
        <tr>
            <td className="fullName">Астафьев Кирилл</td>
            <td><button className="retiredBtn">Отчислен(-а)</button></td>
        </tr>
    )
}

export default TableRowStudents;