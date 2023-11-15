import './Table.css'
import TableRow from "../tableRow/TableRow.jsx";

// eslint-disable-next-line react/prop-types
function Table({ role }) {
    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {<TableRow role={role}/>}
                </tbody>
            </table>
        </div>
    )
}

export default Table;