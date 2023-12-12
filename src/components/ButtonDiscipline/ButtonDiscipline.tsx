import classNames from "classnames";
import React from "react";

interface ButtonDisciplineProps {
    disciplineName: string;
}

const ButtonDiscipline: React.FC<ButtonDisciplineProps> = (props) => {
    const { disciplineName } = props

    return(
        <button className={classNames({disciplineBtn: true})}>{disciplineName}</button>
    )
}
export default ButtonDiscipline;