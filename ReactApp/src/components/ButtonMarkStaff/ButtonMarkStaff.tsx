import React from "react";
import {useSetTaskMutation} from "../../api/completedWorkApi.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

interface ButtonMarkStaffProps {
    counter: number
    isPassed: boolean
    value: number
    idStudent: number
}

const ButtonMarkStaff: React.FC<ButtonMarkStaffProps> = (props) => {
    const markBtnRef = React.useRef<HTMLButtonElement>(null);
    const { work } = useTypedSelector(state => state.select)
    const [setTask] = useSetTaskMutation()

    function setTaskHandle() {
        if (markBtnRef.current && work) {
            setTask({
                idStudent: Number(markBtnRef.current.getAttribute('data-student')),
                idWork: work.id,
                idTask: Number(markBtnRef.current.value)
            })
            console.log(Number(markBtnRef.current.getAttribute('data-student')))
            console.log(work.id)
            console.log(Number(markBtnRef.current.value))
            markBtnRef.current?.classList.toggle('passed')
        }
    }

    return (
        <button
            ref={markBtnRef}
            className={"markBtn" + (props.isPassed ? " passed" : "")}
            value={props.value}
            data-student={props.idStudent}
            onClick={setTaskHandle}>{props.counter}</button>
    )
}
export default ButtonMarkStaff;