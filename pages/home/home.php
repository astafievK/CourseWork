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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <title>Главная</title>
</head>
<body class="dark">
<nav>
    <div class="nav-content">
        <div class="controls">
            <form class="control" action="home.php" method="post">
                <button>
                    Выход
                </button>
            </form>
            <div class="control theme">
                <button id="btnSwitchTheme">
                    Тема
                </button>
            </div>
            <div class="control admin">
                <button>
                    Редактировать
                </button>
            </div>
        </div>

        <div class="filters">
            <span>Успеваемость</span>
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
<nav class="mobile">
    <div class="nav-content">
        <button class="filter marks">
            <a href="">
                <i class="fa-solid fa-5" style="color: #e1e3e6;"></i>
            </a>
        </button>
        <button class="theme" id="btnMobileSwitchTheme">
            <img alt=""/>
        </button>
        <button class="filter disciplines">
            <img alt=""/>
        </button>
    </div>
</nav>
<div class="table-container">
    <div class="table-wrapper">
        <table id="table">
            <thead>
            <tr>
                <th class="column-id"><span>№</span></th>
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
                <td data-user="1" data-group="2" data-discipline="3" data-work="1">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td data-user="1" data-group="2" data-discipline="3" data-work="2">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td data-user="1" data-group="2" data-discipline="3" data-work="3">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td data-user="1" data-group="2" data-discipline="3" data-work="4">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td data-user="1" data-group="2" data-discipline="3" data-work="5">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td data-user="1" data-group="2" data-discipline="3" data-work="6">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td data-user="1" data-group="2" data-discipline="3" data-work="7">
                    <button class="markBtn satisfactory">3</button>
                    <div class="modal">
                        <div class="modal-content">
                            <div class="title-wrapper">
                                <span class="title">Лабораторная работа 1</span>
                            </div>
                            <div class="stats">
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                                <div class="task">
                                    <span class="number">Задание 1</span>
                                    <button class="mark completed">Выполнено</button>
                                </div>
                            </div>
                            <div class="close-wrapper">
                                <button class="close-modal" id="modalSave">Сохранить</button>
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
<script src="scripts/theme.js"></script>
<script src="scripts/modal.js"></script>
</body>
</html>