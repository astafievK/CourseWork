import React from "react";

interface ButtonActionAllProps {

}

const ButtonActionAll: React.FC<ButtonActionAllProps> = () => {
    return(
        <button className="action all" title="Все задания сразу">
            <svg width="50px" height="50px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
                <path fill="#b2d9b2" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"></path>
            </svg>
        </button>
    )
}
export default ButtonActionAll;