import React from "react";

interface TableRowStudentsStaffProps{
    name: string
    surname: string
    isRetired: boolean
}

const TableRowStudentsStaff: React.FC<TableRowStudentsStaffProps> = (props) => {
    return (
        <tr>
            <td className="number">
                <span>1</span>
            </td>
            <td className="fullName">
                <span className="surname">{props.surname}</span>
                <span className="name">{props.name}</span>
                <span className="name-short">{props.name[0]}</span>
            </td>
            <td>
                <button className="retiredBtn">Отчислен(-а)</button>
            </td>
        </tr>
    )
}

export default TableRowStudentsStaff;