import TableRowDisciplines from "../TableRowDisciplines/TableRowDisciplines.tsx";
import {useGetGroupsQuery} from "../../../api/group.ts";
import {userInfo} from "../../../userInfo.ts";
import AddRowDisciplines from "../../AddRowDisciplines/AddRowDisciplines.tsx";

function TableDisciplines() {
    const { data } = useGetGroupsQuery();

    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    userInfo[0].role === 'Преподаватель' ? <AddRowDisciplines/> : ''
                }
                {
                    data?.map((group) => (
                    <TableRowDisciplines key={group.id} groupName={group.name}/>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default TableDisciplines;