import "./TableRowMarks.css"
import ButtonMark from "../../ButtonMark/ButtonMark.tsx";
import {data} from "../../../data.ts";

function TableRowMarks() {
    return (
        data[0].role === 'Студент' ? (
            <tr>
                <td className="labwork">
                    <span className="title">Лабораторная работа 1</span>
                    <span className="title short">Лаб 1</span>
                </td>
                <td className="stats">
                    <ButtonMark counter={0} userId={0} workId={0} isPassed={0}/>
                </td>
                <td className="percentage">
                    <span>100%</span>
                </td>
                <td className="total-mark">
                    <span>5</span>
                </td>
                <td className="rectangle good"></td>
            </tr>
        ) : (
            <tr>
                <td className="number">
                    <span>1</span>
                </td>
                <td className="fullname">
                    <span className="surname">{data[0].surname}</span>
                    <span className="name">{data[0].name}</span>
                    <span className="name-short">{data[0].surname.charAt(0)}</span>
                </td>
                <td className="stats">
                    <ButtonMark counter={0} userId={0} workId={0} isPassed={0}/>
                </td>
                <td className="actions">
                    <button className="action all">
                        <img src="src/assets/images/checkmark.svg" alt="Все"/>
                    </button>
                    <button className="action nothing">
                        <img src="src/assets/images/cross.svg" alt="Отменить"/>
                    </button>
                    <div className="action select-tasks">
                        <input className="select-tasks__numbers" type="text" name="numbers" placeholder="1-3,5"/>
                        <button className="select-tasks__select">
                            Выбранные
                        </button>
                    </div>
                </td>
                <td className="percentage">
                    <span>100%</span>
                </td>
                <td className="total-mark">
                    <span>5</span>
                </td>
                <td className="rectangle good"></td>
            </tr>
        )
    )
}

export default TableRowMarks