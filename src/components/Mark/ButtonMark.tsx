import "./ButtonMark.css";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import React from "react";
import {Navigate} from "react-router-dom";

interface ButtonMarkProps {

}

const ButtonMark: React.FC<ButtonMarkProps> = () => {
    const {user} = useTypedSelector(state => state.auth)

    if(!user){
        return <Navigate to="/"/>
    }

    return (
        <>
            {
                user.role.name === "Student" ? <button className="mark">1</button> : <button className="markBtn">1</button>
            }
        </>
    )
}
export default ButtonMark;