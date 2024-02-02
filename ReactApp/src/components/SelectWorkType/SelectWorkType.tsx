import {useGetWorkTypesQuery} from "../../api/workTypeApi.ts";
import React from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSelectWorkType} from "../../api/slices/selectSlice.ts";

interface SelectWorkTypeProps {

}

const SelectWorkType: React.FC<SelectWorkTypeProps> = () => {
    const { data=[] } = useGetWorkTypesQuery();
    const dispatch = useAppDispatch()

    const { workType } = useTypedSelector(state => state.select)

    return (
        <select
            className="work-type"
            value={workType ? workType.id : undefined}
            onChange={(e) => {
                const value = e.target.value

                dispatch(setSelectWorkType({
                    id: Number(value)
                } as IWorkType))
            }}
        >
            {
                data.length == 0 ? <option>Нет данных</option> :
                data.map((workType) => (
                    <option
                        key={workType.id}
                        value={workType.id}
                    >
                        {workType.name}
                    </option>
                ))
            }
        </select>
    )
}

export default SelectWorkType;