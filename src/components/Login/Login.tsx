import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link, Navigate} from "react-router-dom";
import {useLoginMutation} from "../../api/user.ts";
import {useTypedSelector} from "../../store/hooks/redux.ts";

interface LoginFormProps {

}

const Login: React.FC<LoginFormProps> = () => {
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
                    type="text"
                    {...register("login", {
                        required: "45645654654645",
                    })
                    }
                    placeholder="Логин"
                />
                <input
                    className="auth-password"
                    type="password"
                    {...register("password", {
                        required: "123123123",
                    })
                    }
                    placeholder="Пароль"
                />

                <button className="auth-submit" type="submit">Войти</button>

                <Link className="auth-forgot" to="/forgot">восстановить аккаунт</Link>
            </form>
        </div>
    );
};

export default Login;