import TableRowMarks from "../TableRowMarks/TableRowMarks.tsx";
import {userInfo} from "../../../userInfo.ts";
import AddRowStats from "../../AddRowStats/AddRowStats.tsx";

function TableMarks() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    userInfo[0].role === 'Преподаватель' ? <AddRowStats/> : ''
                }
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                </tbody>
            </table>
        </div>
    )
}

export default TableMarks;