import TableRowDisciplines from "../TableRowDisciplines/TableRowDisciplines.tsx";
import AddDiscipline from "../../AddDiscipline/AddDiscipline.tsx";
import {useGetGroupsQuery} from "../../../api/group.ts";
import {userInfo} from "../../../userInfo.ts";

function TableDisciplines() {
    const { data } = useGetGroupsQuery();

    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    userInfo[0].role === 'Преподаватель' ? <AddDiscipline/> : ''
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