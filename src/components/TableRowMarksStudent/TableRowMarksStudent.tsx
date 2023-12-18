import React from "react";
import ButtonMarkStudent from "../ButtonMarkStudent/ButtonMarkStudent.tsx";

interface TableRowMarksStudentProps{
    workName: string
}

const TableRowMarksStudent: React.FC<TableRowMarksStudentProps> = (props) => {
return (
        <tr>
            <td className="labwork">
                <span className="title">{props.workName}</span>
                <span className="title short">{props.workName.replace(/^(.{3}).*(d)$/, "$1 $2")}</span>
            </td>
            <td className="stats">
                <ButtonMarkStudent counter={1} isPassed={true}/>
                <ButtonMarkStudent counter={2} isPassed={true}/>
                <ButtonMarkStudent counter={3} isPassed={false}/>
                <ButtonMarkStudent counter={4} isPassed={false}/>
                <ButtonMarkStudent counter={5} isPassed={false}/>
                <ButtonMarkStudent counter={6} isPassed={true}/>
                <ButtonMarkStudent counter={7} isPassed={true}/>
                <ButtonMarkStudent counter={8} isPassed={false}/>
                <ButtonMarkStudent counter={9} isPassed={true}/>
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
}

export default TableRowMarksStudent