import React from "react";

interface TableRowStudentsStaffProps{
    key?: number
    counter: number
    name: string
    surname: string
}

const TableRowStudentsStaff: React.FC<TableRowStudentsStaffProps> = (props) => {
    return (
        <tr>
            <td className="number">
                <span>{props.counter}</span>
            </td>
            <td className="fullName">
                <span className="surname">{props.surname}</span>
                <span className="name">{props.name}</span>
            </td>
            <td>
                <button className="retiredBtn">Отчислен(-а)</button>
            </td>
        </tr>
    )
}

export default TableRowStudentsStaff;