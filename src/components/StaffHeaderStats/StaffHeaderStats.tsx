import { Link } from 'react-router-dom'
import ExitButton from "../ExitButton/ExitButton.tsx";
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";

function StaffHeaderStats() {
    return (
        <header>
            <div className="functions">
                <Link className="function stats selected" to="/stats">Статистика</Link>
                <Link className="function students" to="/students">Студенты</Link>
                <Link className="function disciplines" to="/disciplines">Дисциплины</Link>
                <button className="function export">Экспорт</button>
            </div>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
                <div className="filter group">
                    <select className="select-group" id="filterGroup" onChange={(event) => {
                        console.log(event.target.value)
                    }}>
                        <option>ИСПП-01</option>
                        <option>ПКС-01</option>
                    </select>
                </div>
                <div className="filter discipline">
                    <select className="select-discipline" id="filterDiscipline" onChange={(event) => {
                        console.log(event.target.value)
                    }}>
                        <option>МДК 01.01</option>
                        <option>МДК 01.02</option>
                    </select>
                </div>
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

export default StaffHeaderStats;