import React from 'react';
import classNames from "classnames";
import ButtonDiscipline from "../../ButtonDiscipline/ButtonDiscipline.tsx";
import {useGetDisciplinesQuery} from "../../../api/discipline.ts";

interface TableRowDisciplinesProps {
    groupName: string;
}

const TableRowDisciplines: React.FC<TableRowDisciplinesProps> = (props) => {
    const { data } = useGetDisciplinesQuery();

    const { groupName } = props;

    return (
        <tr>
            <td className={classNames({ group: true })}>{groupName}</td>
            <td className={classNames({ disciplines: true })}>
                {data?.map((discipline) => (
                    <ButtonDiscipline key={discipline.id} disciplineName={discipline.name} />
                ))}
            </td>
        </tr>
    );
};

export default TableRowDisciplines;