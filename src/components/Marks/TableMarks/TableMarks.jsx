import "../../../index.css"
import TableRowMarks from "../TableRowMarks/TableRowMarks.jsx";

function TableMarks() {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {<TableRowMarks/>}
                </tbody>
            </table>
        </div>
    )
}

export default TableMarks;