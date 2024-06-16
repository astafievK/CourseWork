import React from "react";
import {useSetGroupDisciplineMutation} from "../../api/groupApi.ts";

interface ButtonDisciplineProps {
    value: number;
    disciplineName: string;
    isSelected: boolean;
}

const ButtonDiscipline: React.FC<ButtonDisciplineProps> = (props) => {
    const { value, disciplineName, isSelected } = props

    const disciplineBtnRef = React.useRef<HTMLButtonElement>(null);

    const [addDiscipline] = useSetGroupDisciplineMutation()

    const toggleSelectedStatus = () => {
        if (disciplineBtnRef.current) {
            const newDisciplineId = Number(disciplineBtnRef.current.value)
            const newGroupId = Number(disciplineBtnRef.current.parentElement?.parentElement?.querySelector(".group")?.getAttribute('data-id'))
            addDiscipline({idGroup: newGroupId, idDiscipline: newDisciplineId})
        }
    };

    return(
        <>
            <button ref={disciplineBtnRef} className={"disciplineBtn" + (isSelected ? " selected" : "")} value={value} onClick={toggleSelectedStatus}>{disciplineName}</button>
        </>
    )
}
export default ButtonDiscipline;