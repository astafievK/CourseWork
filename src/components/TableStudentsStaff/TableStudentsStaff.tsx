import TableRowStudentsStaff from "../TableRowStudentsStaff/TableRowStudentsStaff.tsx";
import AddRowStudents from "../AddRowStudents/AddRowStudents.tsx";
import {useGetStudentsByGroupQuery} from "../../api/groupApi.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

function TableStudentsStaff() {
    const { group } = useTypedSelector(state => state.select)
    const { data=[] } = useGetStudentsByGroupQuery( {idGroup: group ? group.id : 0} );

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