import React from "react";

interface ButtonMarkStudentProps {
    counter: number
    isPassed: boolean
}

const ButtonMarkStudent: React.FC<ButtonMarkStudentProps> = (props) => {
    return (
        <button className={"mark" + (props.isPassed ? " passed" : "")}>{props.counter}</button>
    )
}
export default ButtonMarkStudent;