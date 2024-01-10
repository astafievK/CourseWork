import React from "react";

interface ButtonDisciplineProps {
    key?: number;
    disciplineName: string;
}

const ButtonDiscipline: React.FC<ButtonDisciplineProps> = (props) => {
    const { key, disciplineName } = props

    return(
        <button className="disciplineBtn" key={key}>{disciplineName}</button>
    )
}
export default ButtonDiscipline;