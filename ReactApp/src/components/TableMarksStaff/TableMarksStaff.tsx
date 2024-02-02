import AddRowStats from "../AddRowStats/AddRowStats.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";
import TableRowMarksStaff from "../TableRowMarksStaff/TableRowMarksStaff.tsx";
import React from "react";

interface TableMarksStaffProps{

}

const TableMarksStaff: React.FC<TableMarksStaffProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <>
            <AddRowStats/>
            <div className="table-wrapper">
                <table id="table">
                    <tbody>
                        <TableRowMarksStaff counter={1} surname={"Акберов"} name={"Муса"}/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableMarksStaff;