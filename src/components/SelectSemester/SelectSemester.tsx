import { useGetSemestersQuery } from "../../api/semester.ts";

function SelectSemester() {
    const { data } = useGetSemestersQuery();

    return (
        <div className="filter semester">
            <select className="select-semester" id="filterSemester" onChange={(event) => { console.log(event.target.value) }}>
                {data?.map((semester) => (
                    <option key={semester.id}>{semester.id} семестр</option>
                ))}
            </select>
        </div>
    )
}

export default SelectSemester;