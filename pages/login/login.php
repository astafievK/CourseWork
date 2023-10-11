<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Вход</title>
</head>
<body>
    <div class="login-window">
        <span class="title">Система контроля работ студентов</span>
        <form class="auth" action="login.php" method="POST">
            <span class="subtitle">Вход</span>
            <input id="loginInput" type="text" name="login" placeholder="Логин">
            <input id="passwordInput" type="password" name="password" placeholder="Пароль">
            <input id="enterInput" type="submit" name="enter" value="Авторизоваться">
        </form>
    </div>

    <script src="scripts/login.js"></script>
</body>
</html>
