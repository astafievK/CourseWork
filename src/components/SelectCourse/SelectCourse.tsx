import {useGetCoursesQuery} from "../../api/courseApi.ts";
import React from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSelectCourse} from "../../api/slices/selectSlice.ts";

interface SelectCourseProps{

}

const SelectCourse: React.FC<SelectCourseProps> = () => {
    const { data= [] } = useGetCoursesQuery()
    const dispatch = useAppDispatch()

    const { course } = useTypedSelector(state => state.select)

    return(
        <div className="filter course">
            <select
                className="select-course"
                value={course ? course.id : undefined}
                onChange={(e) => {
                    const value = e.target.value

                    dispatch(setSelectCourse({
                        id: Number(value)
                    } as ICourse))
                }}
            >
                {
                    data.length == 0 ? <option>Нет данных</option> :
                    data.map((course) => (
                        <option
                            key={course.id}
                            value={course.id}
                        >
                            {course.id} курс
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectCourse