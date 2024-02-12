import React from "react";

interface ButtonMarkStaffProps {
    counter: number
    isPassed: boolean
    value: number
}

const ButtonMarkStaff: React.FC<ButtonMarkStaffProps> = (props) => {
    const markBtnRef = React.useRef<HTMLButtonElement>(null);

    function togglePassedStatus() {
        markBtnRef.current?.classList.toggle('passed');
    }

    return (
        <button
            ref={markBtnRef}
            className={"markBtn" + (props.isPassed ? " passed" : "")}
            value={props.value}
            onClick={togglePassedStatus}>{props.counter}</button>
    )
}
export default ButtonMarkStaff;