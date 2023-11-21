import "../../../index.css"
import TableRowStudents from "../TableRowStudents/TableRowStudents.jsx";

function TableStudents() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                <tr className="add">
                    <td className="title">Добавить студента</td>
                    <td className="input name"><input type="text" placeholder="Имя"/></td>
                    <td className="input surname"><input type="text" placeholder="Фамилия"/></td>
                    <td>
                        <select>
                            <option>ИСПП-01</option>
                            <option>ПКС-01</option>
                        </select>
                    </td>
                    <td>
                        <button className="addStudentBtn">Добавить</button>
                    </td>
                </tr>
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                {<TableRowStudents/>}
                </tbody>
            </table>
        </div>
    )
}

export default TableStudents;