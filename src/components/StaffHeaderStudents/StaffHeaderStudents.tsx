import { Link } from 'react-router-dom'
import ButtonExport from "../ButtonExport/ButtonExport.tsx";
import ButtonExit from "../ButtonExit/ButtonExit.tsx";
import SelectGroup from "../SelectGroup/SelectGroup.tsx";
import ButtonTheme from "../ButtonTheme/ButtonTheme.tsx";

function StaffHeaderStudents() {
    return (
        <header>
            <ButtonTheme/>
            <nav>
                <Link className="stats" to="/stats">Статистика</Link>
                <Link className="students selected" to="/students">Студенты</Link>
                <Link className="disciplines" to="/disciplines">Дисциплины</Link>
            </nav>
            <ButtonExport/>
            <div className="filters">
                <SelectGroup/>
            </div>
            <ButtonExit/>
        </header>
    )
}

export default StaffHeaderStudents;