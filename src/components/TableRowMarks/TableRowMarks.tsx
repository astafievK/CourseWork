import "./TableRowMarks.css"
import ButtonMark from "../Mark/ButtonMark.tsx";
import {userInfo} from "../../userInfo.ts";

function TableRowMarks() {
    return (
        userInfo[0].role === 'Студент' ? (
            <tr>
                <td className="labwork">
                    <span className="title">Лабораторная работа 1</span>
                    <span className="title short">Лаб 1</span>
                </td>
                <td className="stats">
                    <ButtonMark/>
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
                    <span className="surname">{userInfo[0].surname}</span>
                    <span className="name">{userInfo[0].name}</span>
                    <span className="name-short">{userInfo[0].surname.charAt(0)}</span>
                </td>
                <td className="stats">
                    <ButtonMark/>
                </td>
                <td className="actions">
                    <button className="action all">
                        <img src="../../assets/images/checkmark.svg" alt="Все"/>
                    </button>
                    <button className="action nothing">
                        <img src="../../assets/images/cross.svg" alt="Отменить"/>
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