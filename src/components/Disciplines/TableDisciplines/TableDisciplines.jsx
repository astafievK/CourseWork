import "./TableDisciplines.css"
import TableRowDisciplines from "../TableRowDisciplines/TableRowDisciplines.jsx";

function TableDisciplines() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                <tr className="add">
                    <td className="title">Добавить дисциплину</td>
                    <td className="input name"><input type="text" placeholder="Название дисциплины"/></td>
                    <td>
                        <button className="addStudentBtn">Добавить</button>
                    </td>
                </tr>
                {<TableRowDisciplines/>}
                </tbody>
            </table>
        </div>
    )
}

export default TableDisciplines;