<?php
require "../connection.php";
$group = "ispp01";
$idStudent = "1";
function printMarks(){
    $sql = "select * from student where groupName = 'ispp01'";


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
<header>
    <div class="header-content">
        <div class="check">
            <label class="checkbox-container">
                <input type="checkbox" id="checkCool">
                <span class="checkmark"></span>
                Отлично
            </label>
            <label class="checkbox-container">
                <input type="checkbox" id="checkGood">
                <span class="checkmark"></span>
                Хорошо
            </label>
            <label class="checkbox-container">
                <input type="checkbox" id="checkSatisfactory">
                <span class="checkmark"></span>
                Удовлетворительно
            </label>
            <label class="checkbox-container">
                <input type="checkbox" id="checkBad">
                <span class="checkmark"></span>
                Не сдано
            </label>
        </div>

        <div class="disciplines">
            <button>МДК 01.01</button>
            <button>МДК 01.02</button>
            <button>МДК 01.03</button>
        </div>
    </div>
</header>
<div class="table-container">
    <div class="table-wrapper">
        <table id="table">
            <thead>
            <tr>
                <th class="column-id">ID</th>
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
                <td>Астафьев Кирилл</td>
                <td><button class="satisfactory" data-work="1">3</button></td>
                <td><button class="good" data-work="1">4</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="satisfactory" data-work="1">3</button></td>
                <td><button class="bad" data-work="1">2</button></td>
                <td><button class="good" data-work="1">4</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="good" data-work="1">4</button></td>
                <td><button class="bad" data-work="1">2</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="satisfactory" data-work="1">3</button></td>
                <td><button class="satisfactory" data-work="1">3</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="bad" data-work="1">2</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="good" data-work="1">4</button></td>
                <td><button class="satisfactory" data-work="1">3</button></td>
                <td><button class="good" data-work="1">4</button></td>
                <td><button class="cool" data-work="1">5</button></td>
                <td><button class="satisfactory" data-work="1">3</button></td>
                <td><button class="bad" data-work="1">2</button></td>
                <td><button class="bad" data-work="1">2</button></td>
                <td><button class="bad" data-work="1">2</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

<script src="scripts/filter.js"></script>
</body>
</html>