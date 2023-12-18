import React from "react";

interface ButtonExportProps{

}

const ButtonExport: React.FC<ButtonExportProps> = () => {
    return(
        <button className="function export" disabled>
            Экспорт
        </button>
    )
}

export default ButtonExport