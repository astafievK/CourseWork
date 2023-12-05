import "./Login.css"

function Login () {
    return (
        <div className="login-window">
            <div className="promo">
                <h1>Система контроля работ студентов</h1>
                <h2>Узнайте про все свои долги по работам в одном месте</h2>
            </div>

            <form className="auth">
                <span className="subtitle">Вход</span>
                <input
                    id="loginInput"
                    type="text"
                    name="login"
                    placeholder="Логин"/>
                <input
                    id="passwordInput"
                    type="password"
                    name="password"
                    placeholder="Пароль"/>
                <input
                    id="enterInput"
                    type="submit"
                    name="enter"
                    value="Авторизоваться"/>
                <input
                    id="forgotPassword"
                    type="submit"
                    name="forgotPassword"
                    value="восстановить пароль"/>
            </form>
        </div>
    )
}
export default Login;