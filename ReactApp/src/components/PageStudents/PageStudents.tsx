import React from "react";
import HeaderStudentsStaff from "../HeaderStudentsStaff/HeaderStudentsStaff.tsx";
import TableStudentsStaff from "../TableStudentsStaff/TableStudentsStaff.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {Navigate} from "react-router-dom";

interface PageStudentsProps {

}

const PageStudents: React.FC<PageStudentsProps> = () => {
    // Получение данных о текущем пользователе
    const {user} = useTypedSelector(state => state.auth)

    // Проверка, что пользователь авторизован. Если нет, переводим на страницу авторизации
    if(!user){
        return <Navigate to="/"/>
    }

    // Если пользователь является студентом, но перернаправить на страницу ститистики
    if(user.role.name === "Student"){
        return <Navigate to="/stats"/>
    }

    return(
        <>
            <HeaderStudentsStaff/>
            <TableStudentsStaff/>
        </>
    )
}

export default PageStudents