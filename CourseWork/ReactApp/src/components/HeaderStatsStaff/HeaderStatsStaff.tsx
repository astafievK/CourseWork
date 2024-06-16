import { Link } from 'react-router-dom'
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";
import ButtonExport from "../ButtonExport/ButtonExport.tsx";
import ButtonExit from "../ButtonExit/ButtonExit.tsx";
import SelectDiscipline from "../SelectDIscipline/SelectDiscipline.tsx";
import SelectGroup from "../SelectGroup/SelectGroup.tsx";
import SelectWork from "../SelectWork/SelectWork.tsx";
import ButtonTheme from "../ButtonTheme/ButtonTheme.tsx";

function HeaderStatsStaff() {
    return (
        <header>
            <ButtonTheme/>
            <nav>
                <Link className="stats selected" to="/stats">Статистика</Link>
                <Link className="students" to="/students">Студенты</Link>
                <Link className="disciplines" to="/disciplines">Дисциплины</Link>
            </nav>
            <ButtonExport/>
            <div className="filters">
                <SelectCourse/>
                <SelectSemester/>
                <SelectGroup/>
                <SelectDiscipline/>
                <SelectWork/>
            </div>
            <ButtonExit/>
        </header>
    )
}

export default HeaderStatsStaff;