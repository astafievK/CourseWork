import {useGetWorkTypesQuery} from "../../api/worktype.ts";

function SelectWorkType() {
    const { data } = useGetWorkTypesQuery();

    return (
        <select className="work-type">
            {data?.map((workType) => (
                <option key={workType.id}>{workType.name}</option>
            ))}
        </select>
    )
}

export default SelectWorkType;