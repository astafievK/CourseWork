import React from "react";

interface ButtonMarkStudentProps {
    counter: number
    isPassed: boolean
    title: string
    description: string
}

const ButtonMarkStudent: React.FC<ButtonMarkStudentProps> = (props) => {
    return (
        <div className={"task-wrapper"}>
            <button className={"mark" + (props.isPassed ? " passed" : "")}>{props.counter}</button>
            <div className="task-info">
                <span className={"title"}>{props.title}</span>
                <span className={"description"}>{props.description}</span>
            </div>
        </div>
    )
}
export default ButtonMarkStudent;