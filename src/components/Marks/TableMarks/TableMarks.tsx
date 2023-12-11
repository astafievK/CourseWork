import "../../../index.css"
import TableRowMarks from "../TableRowMarks/TableRowMarks.tsx";
import AddWork from "../../AddWork/AddWork.tsx";
import {userInfo} from "../../../userInfo.ts";

function TableMarks() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    userInfo[0].role === 'Преподаватель' ? <AddWork/> : ''
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