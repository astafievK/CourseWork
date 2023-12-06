import "../../../index.css"
import TableRowStudents from "../TableRowStudents/TableRowStudents.tsx";
import AddStudent from "../../AddStudent/AddStudent.tsx";

function TableStudents() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                <AddStudent/>
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