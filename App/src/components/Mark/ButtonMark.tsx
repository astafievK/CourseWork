import "./ButtonMark.css";
import { data } from "../../data";
import classNames from "classnames";

interface ButtonMarkProps {
    counter: number;
    userId: string;
    workId: string;
    isPassed: number;
}

function ButtonMark(props: ButtonMarkProps) {
    const {counter, userId, workId, isPassed} = props;

    if (data[0].role === 'Студент') {
        return (
            <button className={classNames({mark: true}, {passed: isPassed === 1})}>{counter}</button>
        );
    }
    return (
        <button className={classNames({markBtn: true}, {passed: isPassed === 1})} data-userid={userId} data-workid={workId} data-passed={isPassed}>{counter}</button>
    );
}
export default ButtonMark;