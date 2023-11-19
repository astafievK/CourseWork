import './Table.css'
import TableRowStats from "../TableRowStats/TableRowStats.jsx";
import TableRowStudents from "../TableRowStudents/TableRowStudents.jsx";
import TableRowDisciplines from "../TableRowDisciplines/TableRowDisciplines.jsx";

function Table() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {<TableRowStats/>}
                </tbody>
            </table>
        </div>
    )
}

export default Table;