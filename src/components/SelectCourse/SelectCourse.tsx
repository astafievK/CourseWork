import {useGetCoursesQuery} from "../../api/courseApi.ts";
import React from "react";

interface SelectCourseProps{

}

const SelectCourse: React.FC<SelectCourseProps> = () => {
    const { data } = useGetCoursesQuery();

    return(
        <div className="filter course">
            <select className="select-course" id="filterCourse">
                {
                    data?.map((course) => (
                    <option key={course.id} data-id={course.id}>{course.id} курс</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectCourse