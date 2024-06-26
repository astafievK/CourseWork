import React from "react";
import ButtonMarkStaff from "../ButtonMarkStaff/ButtonMarkStaff.tsx";

interface TableRowMarksStaffProps{
    counter: number
    name: string
    surname: string
    completedTasks: number[]
    workTasks: number[]
    workTasksFull: ITask[]
    idStudent: number
    percentage: number
    tasksCount: number
    totalMark: number
}

const TableRowMarksStaff: React.FC<TableRowMarksStaffProps> = (props) => {
    function printRectangle(totalMark: number) {
        switch (totalMark) {
            case 2:
                return (<td className="rectangle bad"></td>)
            case 3:
                return (<td className="rectangle medium"></td>)
            case 4:
                return (<td className="rectangle good"></td>)
            case 5:
                return (<td className="rectangle good"></td>)
        }
    }

    return (
        <tr>
            <td className="number">
                <span>{props.counter}</span>
            </td>
            <td className="fullName">
                <span className="surname">{props.surname}</span>
                <span className="name">{props.name}</span>
            </td>
            <td className="stats">
                {Array.from({length: props.tasksCount}).map((_, i) => (
                    <ButtonMarkStaff
                        isPassed={props.completedTasks.includes(props.workTasks[i])}
                        counter={i + 1}
                        key={i}
                        value={props.workTasks[i]}
                        idStudent={props.idStudent}
                        title={props.workTasksFull[i].title}
                        description={props.workTasksFull[i].description}
                    />
                ))}
            </td>
            {
                /*
                <td className="actions">
                    <ButtonActionAll/>
                    <ButtonActionNothing/>
                    <FormActionSelected/>
                </td>
                 */
            }
            <td className="percentage">
                <span>{Math.trunc(props.percentage)}%</span>
            </td>
            <td className="total-mark">
                <span>{props.totalMark}</span>
            </td>
            {
                printRectangle(props.totalMark)
            }
        </tr>
    )
}

export default TableRowMarksStaff