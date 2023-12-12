import ExitButton from "../ExitButton/ExitButton.tsx";
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";
import React from "react";

interface StudentsHeaderStatsProps{
    name: string,
    surname: string
}

const StudentHeaderStats: React.FC<StudentsHeaderStatsProps> = ({name, surname}: StudentsHeaderStatsProps) => {


    return (
        <header>
            <div className="info">
                <div className="info-item info-fullname">{surname} {name}</div>
                <div className="info-item info-sep">•</div>
                <div className="info-item info-group">тут будет группа</div>
            </div>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
                <div className="filter work">
                    <select className="select-work" id="filterWork" onChange={(event) => {
                        console.log(event.target.value)
                    }}>
                        <option value={1}>Лабораторная работа 1</option>
                        <option value={2}>Лабораторная работа 2</option>
                    </select>
                </div>
            </div>
            <ExitButton/>
        </header>
    )
}

export default StudentHeaderStats;