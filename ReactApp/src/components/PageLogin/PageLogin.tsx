import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link, Navigate} from "react-router-dom";
import {useLoginMutation} from "../../api/userApi.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

interface PageLoginProps {

}

const PageLogin: React.FC<PageLoginProps> = () => {
    //Инициализация объекта useForm для работы с формой
    const {handleSubmit, register} = useForm<ILoginCommand>()

    //Вызываем метод login при отправке формы
    const onSubmit: SubmitHandler<ILoginCommand> = async data => {
        await login(data)
    }

    //Инициализация объекта для выполнения запроса на сервер
    const [login] = useLoginMutation()

    //Получение текущего пользователя
    const {user} = useTypedSelector(state => state.auth)

    return (
        <div className="auth-window">
            {
                //Если пользователь уже авторизован, то перенаправляем на страницу статистики
                user && <Navigate to='/stats'/>
            }
            <div className="auth-promo">
                <h1>Система контроля работ студентов</h1>
                <h2>Узнайте про все свои долги по работам в одном месте</h2>
            </div>

            <form className="auth" onSubmit={handleSubmit(onSubmit)}>
                <span className="subtitle">Вход</span>
                <input
                    className="auth-login"
                    id="loginField"
                    type="text"
                    {...register("login")}
                    placeholder="Логин"
                    required
                />
                <input
                    className="auth-password"
                    id="passwordField"
                    type="password"
                    {...register("password")}
                    placeholder="Пароль"
                    required
                />
                <button className="auth-submit" type="submit">Войти</button>
                <Link className="auth-forgot" to="/forgot">восстановить аккаунт</Link>
            </form>
        </div>
    );
};

export default PageLogin;