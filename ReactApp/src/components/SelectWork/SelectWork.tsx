import React from "react";
import {useGetWorksByGroupAndDisciplineQuery} from "../../api/groupApi.ts";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSelectWork} from "../../api/slices/selectSlice.ts";

interface SelectWorkProps{

}

const SelectWork: React.FC<SelectWorkProps> = () => {
    const { group } = useTypedSelector(state => state.select)
    const { discipline } = useTypedSelector(state => state.select)
    const { data=[] } = useGetWorksByGroupAndDisciplineQuery(
        {
            id: group ? group.id : 0,
            DisciplineId : discipline ? discipline.id : 0
        })

    const dispatch = useAppDispatch()

    const { work } = useTypedSelector(state => state.select)

    return(
        <div className="filter work">
            <select
                className="select-work"
                value={work ? work.id : undefined}
                onChange={(e) => {
                    const value = e.target.value

                    dispatch(setSelectWork({
                        id: Number(value)
                    } as IWork))
                }}
            >
                {
                    data.length == 0 ? <option>Нет данных</option> :
                        data.map((work, key) => (
                        <option
                            key={work.id}
                            value={work.id}
                        >
                            {work.workType.name} {key+1} ({work.name})
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectWork