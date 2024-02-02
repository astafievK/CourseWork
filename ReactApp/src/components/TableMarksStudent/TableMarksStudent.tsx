import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";
import TableRowMarksStudent from "../TableRowMarksStudent/TableRowMarksStudent.tsx";
import React from "react";

interface TableMarksStudentProps{

}

// Компонент страницы статистики для студента
const TableMarksStudent: React.FC<TableMarksStudentProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <div className="table-wrapper">
            <table id="table">
                <tbody>
                    <TableRowMarksStudent workName={"Лабораторная работа 1"}/>
                </tbody>
            </table>
        </div>
    )
}

export default TableMarksStudent;