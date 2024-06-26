import React from "react";

interface TableRowStudentsStaffProps{
    key: number
    counter: number
    id: number
    name: string
    surname: string
    isRetired: boolean
    login: string
}

const TableRowStudentsStaff: React.FC<TableRowStudentsStaffProps> = (props) => {
    /*
    const retiredBtnRef = React.useRef<HTMLButtonElement>(null);

    const [setRetiredStatus] = useSetStudentRetiredStatusMutation()

    const toggleSelectedStatus = () => {
        if (retiredBtnRef.current) {
            const studentId = Number(retiredBtnRef.current.value)
            console.log(studentId + typeof(studentId))
            setRetiredStatus({idStudent: studentId})
        }
    };
     */

    return (
        <tr>
            <td className="number">
                <span>{props.counter}</span>
            </td>
            <td className="student">
                <div className="fullname">
                    <span className="surname">{props.surname}</span>
                    <span className="name">{props.name}</span>
                </div>
                <div className="login">
                    <span>{props.login}</span>
                </div>
            </td>
            {
                /*
                <td>
                <button
                    className={"retiredBtn" + (props.isRetired ? " selected" : "")}
                    value={props.id}
                    onClick={toggleSelectedStatus}
                >Отчислен(-а)</button>
            </td>
                 */
            }
        </tr>
    )
}

export default TableRowStudentsStaff;