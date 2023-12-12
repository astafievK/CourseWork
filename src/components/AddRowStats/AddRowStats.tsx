import React from "react";
import FormAddWork from "../FormAddWork/FormAddWork.tsx";
import FormMarksSample from "../FormMarksSample/FormMarksSample.tsx";
import FormAddTasks from "../FormAddTasks/FormAddTasks.tsx";

interface AddRowStatsProps {

}

const AddRowStats: React.FC<AddRowStatsProps> = () => {
    return(
        <tr className="add stats">
            <FormAddWork/>
            <FormMarksSample/>
            <FormAddTasks/>
        </tr>
    )
}

export default AddRowStats