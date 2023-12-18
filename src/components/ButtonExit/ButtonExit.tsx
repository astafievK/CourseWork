import React from "react";
import {logout} from "../../api/interfaces/IAuthState.ts";
import {useAppDispatch} from "../../store/hooks/redux.ts";

interface ButtonExitProps{

}

const ButtonExit: React.FC<ButtonExitProps> = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = () => {
        dispatch({ type: logout })
    }

    return(
        <form className="exit-form" onSubmit={handleSubmit}>
            <button className="exit" type="submit">
                Выход
            </button>
        </form>
    )
}

export default ButtonExit