import React from "react";
import ButtonMarkStudent from "../ButtonMarkStudent/ButtonMarkStudent.tsx";

interface TableRowMarksStudentProps{
    counter: number
    completedTasks: number[]
    workTasks: number[]
    workType: string
    workName: string
    percentage: number
    totalMark: number
    tasksCount: number
}

const TableRowMarksStudent: React.FC<TableRowMarksStudentProps> = (props) => {
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
            <td className="labwork">
                <span className="type">{props.workType}</span>
                <span className="title">{props.workName}</span>
            </td>
            <td className="stats">
                {Array.from({length: props.tasksCount }).map((_, i) => (
                    <ButtonMarkStudent
                        isPassed={props.completedTasks.includes(props.workTasks[i])}
                        counter={i + 1}
                    />
                ))}
            </td>
            <td className="percentage">
                <span>{props.percentage}%</span>
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

export default TableRowMarksStudent