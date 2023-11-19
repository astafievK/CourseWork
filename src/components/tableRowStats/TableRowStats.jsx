import './TableRowStats.css'
import ButtonMark from "../Mark/ButtonMark.jsx";
import {data} from "../../data.js";
import {useEffect, useState} from "react";
import {fetchMarks} from "../../api/fetchMarks.js";

function TableRowStats() {
    const [marks, setMarks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const items = await fetchMarks()
            setMarks(items)
        }

        fetchData()
    }, []);

    return (
        data[0].role === 'Студент' ? (
            <tr>
                <td className="labwork">
                    <span className="title">Лабораторная работа 1</span>
                    <span className="title short">Лаб 1</span>
                </td>
                <td className="stats">
                    {
                        marks.map(mark =>
                            mark.tasks.map((task, index) =>
                                <ButtonMark key={index} counter={index+1} userId={mark.userId} workId={mark.workId} isPassed={mark.tasks[index]}/>))
                    }
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
                    {
                        marks.map(mark =>
                            mark.tasks.map((task, index) =>
                                <ButtonMark key={index} counter={index+1} userId={mark.userId} workId={mark.workId} isPassed={mark.tasks[index]}/>))
                    }
                </td>
                <td className="add">
                    <div className="add-form">
                        <input className="add-numbers" type="text" name="numbers" placeholder="3"/>
                            <button>
                                <img className="add-img" src="src/assets/images/add_dark.svg" alt="Добавить задание"/>
                            </button>
                    </div>
                </td>
                <td className="actions">
                    <button className="action all">
                        <img src="src/assets/images/checkmark.svg" alt="Все"/>
                    </button>
                    <button className="action nothing">
                        <img src="src/assets/images/cross.svg" alt="Отменить"/>
                    </button>
                    <input className="action numbers" type="text" name="numbers" placeholder="1-3,5"/>
                    <button className="action selected">
                        Выбранные
                    </button>
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

export default TableRowStats