import { Link } from 'react-router-dom'
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";
import ButtonExport from "../ButtonExport/ButtonExport.tsx";
import ButtonExit from "../ButtonExit/ButtonExit.tsx";
import ButtonTheme from "../ButtonTheme/ButtonTheme.tsx";

function StaffHeaderDisciplines() {
    return (
        <header>
            <ButtonTheme/>
            <nav>
                <Link className="stats" to="/stats">Статистика</Link>
                <Link className="students" to="/students">Студенты</Link>
                <Link className="disciplines selected" to="/disciplines">Дисциплины</Link>
            </nav>
            <ButtonExport/>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
            </div>
            <ButtonExit/>
        </header>
    )
}

export default StaffHeaderDisciplines;