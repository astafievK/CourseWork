import './ButtonMark.css'
import {data} from "../../data.js";
import classNames from "classnames";

function ButtonMark (props) {
    const {counter, userId, workId, isPassed} = props;

    if (data[0].role === 'Студент') {
        return (
            <button
                className={classNames({mark: true}, {passed: isPassed === 1})}>{counter}</button>
        );
    }
    return (
        <button className={classNames({markBtn: true}, {passed: isPassed === 1})} data-userid={userId} data-workid={workId} data-passed={isPassed}>{counter}</button>
    );
}
export default ButtonMark;