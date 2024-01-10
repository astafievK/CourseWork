import { useGetSemestersQuery } from "../../api/semesterApi.ts";

function SelectSemester() {
    const { data } = useGetSemestersQuery();

    return (
        <div className="filter semester">
            <select className="select-semester" id="filterSemester" onChange={(event) => { console.log(event.target.value) }}>
                {data?.map((semester) => (
                    <option key={semester.id} data-id={semester.id}>{semester.id} семестр</option>
                ))}
            </select>
        </div>
    )
}

export default SelectSemester;