import React from "react";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {useGetStatsStudentQuery} from "../../api/studentApi.ts";
import {Navigate} from "react-router-dom";
import TableRowMarksStudent from "../TableRowMarksStudent/TableRowMarksStudent.tsx";

interface TableMarksStudentProps{

}

// Компонент страницы статистики для студента
const TableMarksStudent: React.FC<TableMarksStudentProps> = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {discipline} = useTypedSelector(state => state.select)
    const {data=[]} = useGetStatsStudentQuery({
        idDiscipline: discipline ? discipline.id : 0,
        idUser: user ? user.id : 0
    });

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                {
                    data.length === 0 ? [] : 
                    data.map((work, counter) => (
                    <TableRowMarksStudent
                        counter={counter+1}
                        completedTasks={work.completedTasks}
                        workTasks={work.workTasks}
                        workType={work.workType}
                        workName={work.workName}
                        percentage={work.percentage}
                        totalMark={work.totalMark}
                        tasksCount={work.tasksCount}
                        />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableMarksStudent;