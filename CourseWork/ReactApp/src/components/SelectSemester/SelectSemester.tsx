import { useGetSemestersQuery } from "../../api/semesterApi.ts";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSelectSemester} from "../../api/slices/selectSlice.ts";


function SelectSemester() {
    const { data=[] } = useGetSemestersQuery();
    const dispatch = useAppDispatch()

    const { semester } = useTypedSelector(state => state.select)

    return (
        <div className="filter semester">
            <select
                className="select-semester"
                value={semester ? semester.id : undefined}
                onChange={(e) => {
                    const value = e.target.value

                    dispatch(setSelectSemester({
                        id: Number(value)
                    } as ISemester))
                }}
            >
                <option disabled>Семестр</option>
                {
                    data.length == 0 ? <option>Нет данных</option> :
                        data.map((semester) => (
                            <option
                                key={semester.id}
                                value={semester.id}
                            >
                                {semester.id} семестр
                            </option>
                        ))
                }
            </select>
        </div>
    )
}

export default SelectSemester;