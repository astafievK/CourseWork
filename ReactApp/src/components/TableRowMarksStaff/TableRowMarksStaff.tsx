import React from "react";
import ButtonActionAll from "../Actions/All/ButtonActionAll.tsx";
import ButtonActionNothing from "../Actions/Nothing/ButtonActionNothing.tsx";
import FormActionSelected from "../Actions/Selected/FormActionSelected.tsx";
import ButtonMarkStaff from "../ButtonMarkStaff/ButtonMarkStaff.tsx";

interface TableRowMarksStaffProps{
    counter: number
    name: string
    surname: string
}

const TableRowMarksStaff: React.FC<TableRowMarksStaffProps> = (props) => {
    return (
        <tr>
            <td className="number">
                <span>{props.counter}</span>
            </td>
            <td className="fullName">
                <span className="surname">{props.surname}</span>
                <span className="name">{props.name}</span>
                <span className="name-short">{props.name.charAt(0)}</span>
            </td>
            <td className="stats">
                <ButtonMarkStaff counter={1} isPassed={true}/>
                <ButtonMarkStaff counter={2} isPassed={false}/>
                <ButtonMarkStaff counter={3} isPassed={true}/>
                <ButtonMarkStaff counter={4} isPassed={true}/>
                <ButtonMarkStaff counter={5} isPassed={false}/>
                <ButtonMarkStaff counter={6} isPassed={true}/>
                <ButtonMarkStaff counter={7} isPassed={true}/>
                <ButtonMarkStaff counter={8} isPassed={false}/>
                <ButtonMarkStaff counter={9} isPassed={false}/>
            </td>
            <td className="actions">
                <ButtonActionAll/>
                <ButtonActionNothing/>
                <FormActionSelected/>
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

export default TableRowMarksStaff