import React from "react";
import StaffHeaderDisciplines from "../StaffHeaderDisciplines/StaffHeaderDisciplines.tsx";
import TableDisciplinesStaff from "../TableDisciplinesStaff/TableDisciplinesStaff.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";

interface PageDisciplinesProps {

}

const PageDisciplines: React.FC<PageDisciplinesProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    if(user.role.name === "Student"){
        return <Navigate to="/stats"/>
    }

    return(
        <>
            <StaffHeaderDisciplines/>
            <TableDisciplinesStaff />
        </>
    )
}

export default PageDisciplines