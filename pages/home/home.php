<?php
$group = "ispp01";
$idStudent = "1";
function printMarks(){
    //$sql = "select * from student where groupName = 'ispp01'";

}

function checkMark(){

}

function averageMark(){
    $sql = "select * from marks";

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
    <title>Главная</title>
</head>
<body>
<nav>
    <div class="nav-content">
        <div class="quit">
            <form action="home.php" method="post">
                <button>Выход</button>
            </form>
        </div>

        <div class="filters">
            <span>Оценки</span>
            <div>
                <button id="buttonCool">ОТЛИЧНО</button>
                <button id="buttonGood">ХОРОШО</button>
                <button id="buttonSatisfactory">УДОВЛ.</button>
                <button id="buttonBad">НЕУДОВЛ.</button>
            </div>
        </div>

        <div class="disciplines">
            <span>Дисциплины </span>
            <form action="home.php" method="post">
                <button name="discipline1">МДК 01.01</button>
                <button name="discipline2">МДК 01.02</button>
                <button name="discipline3">МДК 01.03</button>
                <button name="discipline4">ОПБД</button>
                <button name="discipline4">ОПБД</button>
            </form>
        </div>
    </div>
</nav>
<div class="table-container">
    <div class="table-wrapper">
        <table id="table">
            <thead>
            <tr>
                <th class="column-id">№</th>
                <th class="column-fullName">ФИО</th>
                <th>ЛР1</th>
                <th>ЛР2</th>
                <th>ЛР3</th>
                <th>ЛР4</th>
                <th>ЛР5</th>
                <th>ЛР6</th>
                <th>ЛР7</th>
                <th>ЛР8</th>
                <th>ЛР9</th>
                <th>ПР1</th>
                <th>ПР2</th>
                <th>ПР3</th>
                <th>ПР4</th>
                <th>ПР5</th>
                <th>ПР6</th>
                <th>ПР7</th>
                <th>ПР8</th>
                <th>ПР9</th>
                <th>ПР10</th>
                <th>СР1</th>
                <th>СР2</th>
                <th>СР3</th>
                <th>СР4</th>
                <th>СР5</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Астафьев<br> Кирилл</td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 2</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 3</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 4</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 5</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 6</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal show">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 2</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 3</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 4</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 5</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 6</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 7</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 8</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 9</span>
                                    <span class="mark not-completed">Не выполнено</span>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 10</span>
                                    <span class="mark completed">Выполнено</span>
                                </div>

                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

<script src="scripts/modal.js"></script>
<script src="scripts/filter.js"></script>
</body>
</html>