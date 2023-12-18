import React from "react";
import FormAddDiscipline from "../FormAddDiscipline/FormAddDiscipline.tsx";

interface AddRowDisciplinesProps {

}

const AddRowDisciplines: React.FC<AddRowDisciplinesProps> = () => {
    return(
        <div className="add discipline">
            <FormAddDiscipline/>
        </div>
    )
}

export default AddRowDisciplines