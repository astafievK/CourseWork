import React from "react";
import StaffHeaderDisciplines from "../StaffHeaderDisciplines/StaffHeaderDisciplines.tsx";
import TableDisciplines from "../Disciplines/TableDisciplines/TableDisciplines.tsx";

interface PageDisciplinesProps {

}

const PageDisciplines: React.FC<PageDisciplinesProps> = () => {
    return(
        <>
            <StaffHeaderDisciplines/>
            <TableDisciplines />
        </>
    )
}

export default PageDisciplines