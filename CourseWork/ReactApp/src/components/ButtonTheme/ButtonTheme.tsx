import React from "react";

interface ButtonThemeProps{

}

const ButtonTheme: React.FC<ButtonThemeProps> = () => {
    const body = document.querySelector('body');

    function toggleDarkClass() {
        body?.classList.toggle('dark');
    }

    return(
        <button className="theme" onClick={toggleDarkClass}>
            Сменить тему
        </button>
    )
}

export default ButtonTheme