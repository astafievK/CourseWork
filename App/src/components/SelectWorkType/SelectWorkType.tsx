import {useGetWorkTypesQuery} from "../../api/worktype.ts";

function SelectWorkType() {
    const { data } = useGetWorkTypesQuery();

    return (
        <td className="work-type">
            <select className="work-type__select">
                {data?.map((workType) => (
                    <option key={workType.id}>{workType.name}</option>
                ))}
            </select>
        </td>
    )
}

export default SelectWorkType;