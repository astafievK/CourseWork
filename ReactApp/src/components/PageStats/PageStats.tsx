import React from "react";
import HeaderStatsStudent from "../HeaderStatsStudent/HeaderStatsStudent.tsx";
import HeaderStatsStaff from "../HeaderStatsStaff/HeaderStatsStaff.tsx";
import TableMarksStudent from "../TableMarksStudent/TableMarksStudent.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";
import TableMarksStaff from "../TableMarksStaff/TableMarksStaff.tsx";

interface PageStatsProps {

}

const PageStats: React.FC<PageStatsProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    return(
        <>
            {user.role.name === "Student" ? (
                <>
                    <HeaderStatsStudent name={user.name} surname={user.surname}/>
                    <TableMarksStudent/>
                </>
            ) : (
                <>
                    <HeaderStatsStaff/>
                    <TableMarksStaff/>
                </>
            )}
        </>
    )
}

export default PageStats