import React from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSelectDiscipline} from "../../api/slices/selectSlice.ts";
import {useGetGroupDisciplinesQuery} from "../../api/groupApi.ts";

interface SelectDisciplineProps{

}

const SelectDiscipline: React.FC<SelectDisciplineProps> = () => {
    const { group } = useTypedSelector(state => state.select)
    const { data } = useGetGroupDisciplinesQuery( {idGroup: group ? group.id : 0} )

    const dispatch = useAppDispatch()

    const { discipline } = useTypedSelector(state => state.select)

    return(
        <div className="filter discipline">
            <select
                className="select-discipline"
                value={discipline ? discipline.id : undefined}
                onChange={(e) => {
                    const value = e.target.value

                    dispatch(setSelectDiscipline({
                        id: Number(value)
                    } as IDiscipline))
                }}
            >
                {
                    data?.selectedDisciplines.length == 0 ? <option>Нет данных</option> :
                        data?.selectedDisciplines.map((discipline) => (
                            <option
                                key={discipline.id}
                                value={discipline.id}
                            >
                                {discipline.name}
                            </option>
                        ))
                }
            </select>
        </div>
    )
}

export default SelectDiscipline