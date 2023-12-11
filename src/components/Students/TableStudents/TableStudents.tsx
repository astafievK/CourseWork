import TableRowStudents from "../TableRowStudents/TableRowStudents.tsx";
import AddStudent from "../../AddStudent/AddStudent.tsx";
import {userInfo} from "../../../userInfo.ts";

function TableStudents() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    userInfo[0].role === 'Преподаватель' ? <AddStudent/> : ''
                }
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