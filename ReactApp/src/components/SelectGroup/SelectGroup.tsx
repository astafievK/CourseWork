import React from "react";
import {useGetGroupsQuery} from "../../api/groupApi.ts";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSelectGroup} from "../../api/slices/selectSlice.ts";

interface SelectGroupProps{

}

const SelectGroup: React.FC<SelectGroupProps> = () => {
    const { data=[] } = useGetGroupsQuery()
    const dispatch = useAppDispatch()

    const { group } = useTypedSelector(state => state.select)

    return(
        <div className="filter group">
            <select
                className="select-group"
                value={group ? group.id : undefined}
                onChange={(e) => {
                    const value = e.target.value

                    dispatch(setSelectGroup({
                        id: Number(value)
                    } as IGroup))
                }}
            >
                {
                    data.length == 0 ? <option>Нет данных</option> :
                    data.map((group) => (
                        <option
                            key={group.id}
                            value={group.id}
                        >
                            {group.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectGroup