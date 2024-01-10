import TableRowStudentsStaff from "../TableRowStudentsStaff/TableRowStudentsStaff.tsx";
import AddRowStudents from "../AddRowStudents/AddRowStudents.tsx";
import {useGetStudentsQuery} from "../../api/studentApi.ts";

function TableStudentsStaff() {
    const { data } = useGetStudentsQuery();
    console.log(data)

    return(
        <>
            <AddRowStudents/>
            <div className="table-wrapper">
                <table id="table">
                    <tbody>
                    {data?.map((student) => (
                        <TableRowStudentsStaff key={student.user.id} name={student.user.name} surname={student.user.surname}/>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableStudentsStaff;