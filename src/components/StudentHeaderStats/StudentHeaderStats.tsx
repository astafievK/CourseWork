import ExitButton from "../ExitButton/ExitButton.tsx";
import SelectSemester from "../SelectSemester/SelectSemester.tsx";
import SelectCourse from "../SelectCourse/SelectCourse.tsx";

function StudentHeaderStats() {
    return (
        <header>
            <div className="info">
                <div className="info-item info-fullname">Астафьев Кирилл</div>
                <div className="info-item info-sep">•</div>
                <div className="info-item info-group">ИСПП-01</div>
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