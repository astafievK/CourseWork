import React from "react";
import FormAddDiscipline from "../FormAddDiscipline/FormAddDiscipline.tsx";

interface AddRowDisciplinesProps {

}

const AddRowDisciplines: React.FC<AddRowDisciplinesProps> = () => {
    return(
        <tr className="add discipline">
            <FormAddDiscipline/>
        </tr>
    )
}

export default AddRowDisciplines