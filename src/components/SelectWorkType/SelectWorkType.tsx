import {useGetWorkTypesQuery} from "../../api/workTypeApi.ts";
import React from "react";

interface SelectWorkTypeProps {

}

const SelectWorkType: React.FC<SelectWorkTypeProps> = () => {
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