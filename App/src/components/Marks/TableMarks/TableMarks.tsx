import "../../../index.css"
import TableRowMarks from "../TableRowMarks/TableRowMarks.tsx";
import AddWork from "../../AddWork/AddWork.tsx";

function TableMarks() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                <AddWork/>
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                {<TableRowMarks/>}
                </tbody>
            </table>
        </div>
    )
}

export default TableMarks;