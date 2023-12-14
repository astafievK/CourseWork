import React from "react";
import StaffHeaderStudents from "../StaffHeaderStudents/StaffHeaderStudents.tsx";
import TableStudents from "../Students/TableStudents/TableStudents.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";

interface PageStudentsProps {

}

const PageStudents: React.FC<PageStudentsProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    if(user.role.name === "Student"){
        return <Navigate to="/stats"/>
    }

    return(
        <>
            <StaffHeaderStudents/>
            <TableStudents />
        </>
    )
}

export default PageStudents