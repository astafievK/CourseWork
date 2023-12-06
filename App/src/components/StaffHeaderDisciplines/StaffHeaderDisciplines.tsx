import "./StaffHeaderDisciplines.css"
import { Link } from 'react-router-dom'
import ExitButton from "../ExitButton/ExitButton.tsx";
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";

function StaffHeaderDisciplines() {
    return (
        <header>
            <div className="functions">
                <Link className="function stats" to="/stats">Статистика</Link>
                <Link className="function students" to="/students">Студенты</Link>
                <Link className="function disciplines selected" to="/disciplines">Дисциплины</Link>
                <button className="function export">Экспорт</button>
            </div>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
            </div>
            <ExitButton/>
        </header>
    )
}

export default StaffHeaderDisciplines;