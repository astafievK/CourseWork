import TableRowDisciplinesStaff from "../TableRowDisciplinesStaff/TableRowDisciplinesStaff.tsx";
import {useGetGroupsQuery} from "../../api/group.ts";
import AddRowDisciplines from "../AddRowDisciplines/AddRowDisciplines.tsx";

function TableDisciplinesStaff() {
    const { data } = useGetGroupsQuery();

    return(
        <>
            <AddRowDisciplines/>
            <div className="table-wrapper">
                <table id="table">
                    <tbody>
                    {
                        data?.map((group) => (
                            <TableRowDisciplinesStaff key={group.id} groupName={group.name}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableDisciplinesStaff;