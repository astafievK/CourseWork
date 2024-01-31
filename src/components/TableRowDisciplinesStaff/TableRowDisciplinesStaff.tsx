import React from 'react';
import ButtonDiscipline from "../ButtonDiscipline/ButtonDiscipline.tsx";
import {useGetGroupDisciplinesQuery} from "../../api/groupApi.ts";

interface TableRowDisciplinesProps {
    groupName: string;
    groupId: number;
}

const TableRowDisciplinesStaff: React.FC<TableRowDisciplinesProps> = (props) => {
    const { groupName, groupId } = props;
    const { data } = useGetGroupDisciplinesQuery({ idGroup: groupId });
    let selectedDisciplinesSorted: IDiscipline[] = [];
    let notSelectedDisciplines: IDiscipline[] = [];

    if (data && data.selectedDisciplinesSorted) {
        selectedDisciplinesSorted = data.selectedDisciplinesSorted;
    }

    if (data && data.notSelectedDisciplines) {
        notSelectedDisciplines = data.notSelectedDisciplines;
    }

    return (
        <tr>
            <td className="group" data-id={groupId}>{groupName}</td>
            <td className="disciplines">
                {
                    selectedDisciplinesSorted.map((discipline) => (
                        <ButtonDiscipline key={discipline.id} value={discipline.id} disciplineName={discipline.name} isSelected={true}/>
                    ))
                }
                {
                    notSelectedDisciplines.map((discipline) => (
                        <ButtonDiscipline key={discipline.id} value={discipline.id} disciplineName={discipline.name} isSelected={false}/>
                    ))
                }
            </td>
        </tr>
    );
};

export default TableRowDisciplinesStaff;