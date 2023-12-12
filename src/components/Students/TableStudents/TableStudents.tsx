import TableRowStudents from "../TableRowStudents/TableRowStudents.tsx";
import {userInfo} from "../../../userInfo.ts";
import AddRowStudents from "../../AddRowStudents/AddRowStudents.tsx";

function TableStudents() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    userInfo[0].role === 'Преподаватель' ? <AddRowStudents/> : ''
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