import TableRowMarks from "../TableRowMarks/TableRowMarks.tsx";
import AddRowStats from "../AddRowStats/AddRowStats.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";

function TableMarks() {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    user.role.name !== 'Student' ? <AddRowStats/> : ''
                }
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                <TableRowMarks/>
                </tbody>
            </table>
        </div>
    )
}

export default TableMarks;