import React from "react";
import FormAddStudent from "../FormAddStudent/FormAddStudent.tsx";
import FormAddGroup from "../FormAddGroup/FormAddGroup.tsx";

interface AddRowStudentsProps {

}

const AddRowStudents: React.FC<AddRowStudentsProps> = () => {
    return(
        <div className="add students">
            <FormAddStudent/>
            <FormAddGroup/>
        </div>
    )
}

export default AddRowStudents