import { Link } from 'react-router-dom'
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";
import ButtonExit from "../ButtonExit/ButtonExit.tsx";
import ButtonTheme from "../ButtonTheme/ButtonTheme.tsx";

function HeaderDisciplinesStaff() {
    return (
        <header>
            <ButtonTheme/>
            <nav>
                <Link className="stats" to="/stats">Статистика</Link>
                <Link className="students" to="/students">Студенты</Link>
                <Link className="disciplines selected" to="/disciplines">Дисциплины</Link>
            </nav>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
            </div>
            <ButtonExit/>
        </header>
    )
}

export default HeaderDisciplinesStaff;