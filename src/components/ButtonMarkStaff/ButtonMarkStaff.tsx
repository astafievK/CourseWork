import React from "react";

interface ButtonMarkStaffProps {
    counter: number
    isPassed: boolean
}

const ButtonMarkStaff: React.FC<ButtonMarkStaffProps> = (props) => {
    const markBtnRef = React.useRef<HTMLButtonElement>(null);

    function togglePassedStatus() {
        markBtnRef.current?.classList.toggle('passed');
    }

    return (
        <button ref={markBtnRef} className={"markBtn" + (props.isPassed ? " passed" : "")} onClick={togglePassedStatus}>{props.counter}</button>
    )
}
export default ButtonMarkStaff;