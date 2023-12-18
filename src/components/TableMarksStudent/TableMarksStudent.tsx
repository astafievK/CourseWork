import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";
import TableRowMarksStudent from "../TableRowMarksStudent/TableRowMarksStudent.tsx";
import React from "react";

interface TableMarksStudentProps{

}

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
                <TableRowMarksStudent workName={"Лабораторная работа 2"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 3"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 4"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 5"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 6"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 7"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 8"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 9"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 10"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 11"}/>
                <TableRowMarksStudent workName={"Лабораторная работа 12"}/>
                </tbody>
            </table>
        </div>
    )
}

export default TableMarksStudent;