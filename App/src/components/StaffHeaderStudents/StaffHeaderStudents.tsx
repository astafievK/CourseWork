import "./StaffHeaderStudents.css"
import { Link } from 'react-router-dom'
import ExitButton from "../ExitButton/ExitButton.tsx";

function StaffHeaderStudents() {
    return (
        <header>
            <div className="functions">
                <Link className="function stats" to="/stats">Статистика</Link>
                <Link className="function students selected" to="/students">Студенты</Link>
                <Link className="function disciplines" to="/disciplines">Дисциплины</Link>
                <button className="function export">Экспорт</button>
            </div>
            <div className="filters">
                <div className="filter group">
                    <select className="select-group" id="filterGroup" onChange={(event) => {
                        console.log(event.target.value)
                    }}>
                        <option>ИСПП-01</option>
                        <option>ПКС-01</option>
                    </select>
                </div>
            </div>
            <ExitButton/>
        </header>
    )
}

export default StaffHeaderStudents;