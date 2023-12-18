import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link, Navigate} from "react-router-dom";
import {useLoginMutation} from "../../api/user.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

interface LoginFormProps {

}

const PageLogin: React.FC<LoginFormProps> = () => {
    const {handleSubmit, register} = useForm<ILoginCommand>()

    const onSubmit: SubmitHandler<ILoginCommand> = async data => {
        await login(data)
    }

    const [login] = useLoginMutation()

    const {user} = useTypedSelector(state => state.auth)

    return (
        <div className="auth-window">
            {
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