import TableRowStudentsStaff from "../TableRowStudentsStaff/TableRowStudentsStaff.tsx";
import AddRowStudents from "../AddRowStudents/AddRowStudents.tsx";

function TableStudentsStaff() {
    return(
        <>
            <AddRowStudents/>
            <div className="table-wrapper">
                <table id="table">
                    <tbody>
                        <TableRowStudentsStaff name={""} surname={""} isRetired={true}/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableStudentsStaff;