import AddRowStats from "../AddRowStats/AddRowStats.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";
import TableRowMarksStaff from "../TableRowMarksStaff/TableRowMarksStaff.tsx";
import React from "react";
import {useGetWorkStatsQuery} from "../../api/workApi.ts";

interface TableMarksStaffProps{

}

const TableMarksStaff: React.FC<TableMarksStaffProps> = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {work} = useTypedSelector(state => state.select)
    const {data=[]} = useGetWorkStatsQuery({
        workId: work ? work.id : 0
    });

    console.log(data)

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <>
            <AddRowStats/>
            <div className="table-wrapper">
                <table id="table">
                    <tbody>
                    {data.map((student, counter) => (
                        <TableRowMarksStaff
                            counter={counter+1}
                            name={student.studentName}
                            surname={student.studentSurname}
                            completedTasks={student.completedTasks}
                            tasksCount={student.tasksCount}
                            totalMark={student.totalMark}
                            percentage={student.percentage}
                            />
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableMarksStaff;