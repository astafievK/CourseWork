import React from 'react';
import ButtonDiscipline from "../ButtonDiscipline/ButtonDiscipline.tsx";
import {useGetDisciplinesQuery} from "../../api/disciplineApi.ts";

interface TableRowDisciplinesProps {
    groupName: string;
}

const TableRowDisciplinesStaff: React.FC<TableRowDisciplinesProps> = (props) => {
    const { groupName } = props;
    const { data } = useGetDisciplinesQuery();

    console.log(data)

    return (
        <tr>
            <td className="group">{groupName}</td>
            <td className="disciplines">
                {data?.map((discipline) => (
                    <ButtonDiscipline key={discipline.id} disciplineName={discipline.name}/>
                    )
                )}
            </td>
        </tr>
    );
};

export default TableRowDisciplinesStaff;