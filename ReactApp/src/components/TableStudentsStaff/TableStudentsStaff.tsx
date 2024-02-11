import TableRowStudentsStaff from "../TableRowStudentsStaff/TableRowStudentsStaff.tsx";
import AddRowStudents from "../AddRowStudents/AddRowStudents.tsx";
import {useGetGroupStudentsQuery} from "../../api/groupApi.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

function TableStudentsStaff() {
    const { group } = useTypedSelector(state => state.select)
    const { data=[] } = useGetGroupStudentsQuery ( {idGroup: group ? group.id : 0} );

    return(
        <>
            <AddRowStudents/>
            <div className="table-wrapper">
                <table id="table">
                    <tbody>
                    {data?.map((student, counter) => (
                        <TableRowStudentsStaff
                            key={student.user.id}
                            counter={counter+1}
                            id={student.user.id}
                            name={student.user.name}
                            surname={student.user.surname}
                            isRetired={student.isRetired}
                        />
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableStudentsStaff;