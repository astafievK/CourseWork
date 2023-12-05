import "./ButtonDiscipline.css"
import classNames from "classnames";

function ButtonDiscipline (props) {
    const {disciplineName} = props;

    return(
        <button className={classNames({disciplineBtn: true})}>{disciplineName}</button>
    )
}
export default ButtonDiscipline;