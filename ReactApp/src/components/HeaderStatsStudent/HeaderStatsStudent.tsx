import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";
import React from "react";
import ButtonExit from "../ButtonExit/ButtonExit.tsx";
import SelectDiscipline from "../SelectDIscipline/SelectDiscipline.tsx";
import ButtonTheme from "../ButtonTheme/ButtonTheme.tsx";

interface StudentsHeaderStatsProps{
    name: string,
    surname: string
}

const HeaderStatsStudent: React.FC<StudentsHeaderStatsProps> = ({name, surname}: StudentsHeaderStatsProps) => {
    return (
        <header>
            <ButtonTheme/>
            <div className="info">
                <div className="info-item info-fullname">{surname} {name}</div>
            </div>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
                <SelectDiscipline/>
            </div>
            <ButtonExit/>
        </header>
    )
}

export default HeaderStatsStudent;