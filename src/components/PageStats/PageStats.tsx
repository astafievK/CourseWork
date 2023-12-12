import React from "react";
import StudentHeaderStats from "../StudentHeaderStats/StudentHeaderStats.tsx";
import StaffHeaderStats from "../StaffHeaderStats/StaffHeaderStats.tsx";
import TableMarks from "../Marks/TableMarks/TableMarks.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";

interface PageStatsProps {

}

const PageStats: React.FC<PageStatsProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <>
            {user.role.name === "Student" ? <StudentHeaderStats name={user.name} surname={user.surname}/> : <StaffHeaderStats/>}
            <TableMarks/>
        </>
    )
}

export default PageStats