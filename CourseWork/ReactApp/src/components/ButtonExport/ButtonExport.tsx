import React from "react";

interface ButtonExportProps{

}

const ButtonExport: React.FC<ButtonExportProps> = () => {
    return(
        <button className="function export">
            <a href="http://localhost:5050/api/Student/xlsx">Экспорт</a>
        </button>
    )
}

export default ButtonExport