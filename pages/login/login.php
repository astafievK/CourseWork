<?php
    if(isset($_POST['enter'])){
        header("Location: ../home/home.php");
    }
?>

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
    <div class="promo">
        <h1>Система контроля работ студентов</h1>
        <h2>Узнайте про все свои долги по работам в одном месте</h2>
    </div>

    <form class="auth" action="login.php" method="POST">
        <span class="subtitle">Вход</span>
        <input
            id="loginInput"
            type="text"
            name="login"
            placeholder="Логин">
        <input
            id="passwordInput"
            type="password"
            name="password"
            placeholder="Пароль">
        <input
            id="enterInput"
            type="submit"
            name="enter"
            value="Авторизоваться">
        <input
            id="forgotPassword"
            type="submit"
            name="forgotPassword"
            value="восстановить пароль">
    </form>
</div>

<script src="scripts/login.js"></script>
</body>
</html>
