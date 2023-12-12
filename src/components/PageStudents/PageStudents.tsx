import React from "react";
import StaffHeaderStudents from "../StaffHeaderStudents/StaffHeaderStudents.tsx";
import TableStudents from "../Students/TableStudents/TableStudents.tsx";

interface PageStudentsProps {

}

const PageStudents: React.FC<PageStudentsProps> = () => {
    return(
        <>
            <StaffHeaderStudents/>
            <TableStudents />
        </>
    )
}

export default PageStudents