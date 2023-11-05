<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Главная</title>
</head>
<body>

<?php
$url = 'https://zerda.twenkey.ru/WorkType';

try {
    $data = file_get_contents($url);
    $json = json_decode($data);

    foreach ($json as $item) {
        echo gettype($item);
    }
} catch (Exception $e) {
    echo 'Произошла ошибка: ' . $e->getMessage();
}
?>

<header>
    <nav>
        <button class="theme" id="btnSwitchTheme">
            <img id="themeImage" src="../../assets/images/nav/desktop/theme-moon.png" alt="">
        </button>
        <div class="filters">
            <div class="filter">
                <select class="select-group" id="filterGroup">
                    <option selected disabled>Группа</option>
                    <option value="ИСПП-01">ИСПП-01</option>
                </select>
            </div>
            <div class="filter">
                <select class="select-discipline" id="filterDiscipline">
                    <option selected disabled>Дисциплина</option>
                    <option value="ИСПП-11">МДК 01.01</option>
                    <option value="ИСПП-11">МДК 01.02</option>
                </select>
            </div>
            <div class="filter">
                <select class="select-work" id="filterWork">
                    <option selected disabled>Работа</option>
                    <option value="Лабораторная работа 1">Лабораторная работа 1</option>
                    <option value="Лабораторная работа 2">Лабораторная работа 2</option>
                </select>
            </div>
        </div>
        <form class="exit" method="post" action="scripts/exit.php">
            <button name="exit">
                <img src="../../assets/images/nav/desktop/exit.png" alt="">
            </button>
        </form>
    </nav>

    <nav class="mobile">
        <div class="buttons">
            <button class="theme" id="btnSwitchThemeMobile">
                <img id="themeImageMobile" src="../../assets/images/nav/desktop/theme-moon.png" alt="">
            </button>
            <form class="exit" method="post" action="scripts/exit.php">
                <button name="exit">
                    <img src="../../assets/images/nav/desktop/exit.png" alt="">
                </button>
            </form>
        </div>
        <div class="filters">
            <div class="filter">
                <select class="select-group" id="filterGroupMobile">
                    <option selected disabled>Группа</option>
                    <option value="ИСПП-01">ИСПП-01</option>
                    <option value="ИСПП-01">ИСПП-01</option>
                </select>
            </div>
            <div class="filter">
                <select class="select-discipline" id="filterDisciplineMobile">
                    <option selected disabled>Дисциплина</option>
                    <option value="ИСПП-11">МДК 01.01</option>
                    <option value="ИСПП-11">МДК 01.02</option>
                </select>
            </div>
            <div class="filter">
                <select class="select-work" id="filterWorkMobile">
                    <option selected disabled>Работа</option>
                    <option value="Лабораторная работа 1">Лабораторная работа 1</option>
                    <option value="Лабораторная работа 2">Лабораторная работа 2</option>
                </select>
            </div>
        </div>
    </nav>
</header>

<div class="table-wrapper">
    <table id="table">
        <tbody>
            <tr>
                <td class="number">
                    <span>2</span>
                </td>
                <td class="fullname">
                    <span class="surname">Астафьев</span>
                    <span class="name">Кирилл</span>
                    <span class="name-short">К.</span>
                </td>
                <td class="stats">
                    <button class="markBtn passed" data-value="1" data-user="2" data-work="7" data-passed="1">1</button>
                    <button class="markBtn passed" data-value="2" data-user="2" data-work="7" data-passed="1">2</button>
                    <button class="markBtn passed" data-value="3" data-user="2" data-work="7" data-passed="1">3</button>
                    <button class="markBtn" data-value="4" data-user="2" data-work="7" data-passed="0">4</button>
                    <button class="markBtn passed" data-value="5" data-user="2" data-work="7" data-passed="1">5</button>
                    <button class="markBtn" data-value="6" data-user="2" data-work="7" data-passed="0">6</button>
                    <button class="markBtn" data-value="7" data-user="2" data-work="7" data-passed="0">7</button>
                    <button class="markBtn" data-value="8" data-user="2" data-work="7" data-passed="0">8</button>
                    <button class="markBtn" data-value="9" data-user="2" data-work="7" data-passed="0">9</button>
                    <button class="markBtn" data-value="10" data-user="2" data-work="7" data-passed="0">10</button>
                </td>
                <td class="actions">
                    <button class="action all">Поставить</button>
                    <button class="action nothing">Убрать</button>
                    <input class="action numbers" type="text" name="numbers" placeholder="1-3,5">
                    <button class="action selected">Указанные</button>
                </td>
                <td class="percentage">
                    <span>76%</span>
                </td>
                <td class="total-mark">
                    <span>4</span>
                </td>
            </tr>
            <tr>
                <td class="number">
                    <span>2</span>
                </td>
                <td class="fullname">
                    <span class="surname">Астафьев</span>
                    <span class="name">Кирилл</span>
                    <span class="name-short">К.</span>
                </td>
                <td class="stats">
                    <button class="markBtn passed" data-value="1" data-user="2" data-work="7" data-passed="1">1</button>
                    <button class="markBtn passed" data-value="2" data-user="2" data-work="7" data-passed="1">2</button>
                    <button class="markBtn passed" data-value="3" data-user="2" data-work="7" data-passed="1">3</button>
                    <button class="markBtn" data-value="4" data-user="2" data-work="7" data-passed="0">4</button>
                    <button class="markBtn passed" data-value="5" data-user="2" data-work="7" data-passed="1">5</button>
                    <button class="markBtn" data-value="6" data-user="2" data-work="7" data-passed="0">6</button>
                    <button class="markBtn" data-value="7" data-user="2" data-work="7" data-passed="0">7</button>
                    <button class="markBtn" data-value="8" data-user="2" data-work="7" data-passed="0">8</button>
                    <button class="markBtn" data-value="9" data-user="2" data-work="7" data-passed="0">9</button>
                    <button class="markBtn" data-value="10" data-user="2" data-work="7" data-passed="0">10</button>
                </td>
                <td class="actions">
                    <button class="action all">Поставить</button>
                    <button class="action nothing">Убрать</button>
                    <input class="action numbers" type="text" name="numbers" placeholder="1-3,5">
                    <button class="action selected">Указанные</button>
                </td>
                <td class="percentage">
                    <span>76%</span>
                </td>
                <td class="total-mark">
                    <span>4</span>
                </td>
            </tr>
            <tr>
                <td class="number">
                    <span>2</span>
                </td>
                <td class="fullname">
                    <span class="surname">Астафьев</span>
                    <span class="name">Кирилл</span>
                    <span class="name-short">К.</span>
                </td>
                <td class="stats">
                    <button class="markBtn passed" data-value="1" data-user="2" data-work="7" data-passed="1">1</button>
                    <button class="markBtn passed" data-value="2" data-user="2" data-work="7" data-passed="1">2</button>
                    <button class="markBtn passed" data-value="3" data-user="2" data-work="7" data-passed="1">3</button>
                    <button class="markBtn" data-value="4" data-user="2" data-work="7" data-passed="0">4</button>
                    <button class="markBtn passed" data-value="5" data-user="2" data-work="7" data-passed="1">5</button>
                    <button class="markBtn" data-value="6" data-user="2" data-work="7" data-passed="0">6</button>
                    <button class="markBtn" data-value="7" data-user="2" data-work="7" data-passed="0">7</button>
                    <button class="markBtn" data-value="8" data-user="2" data-work="7" data-passed="0">8</button>
                    <button class="markBtn" data-value="9" data-user="2" data-work="7" data-passed="0">9</button>
                    <button class="markBtn" data-value="10" data-user="2" data-work="7" data-passed="0">10</button>
                </td>
                <td class="actions">
                    <button class="action all">Поставить</button>
                    <button class="action nothing">Убрать</button>
                    <input class="action numbers" type="text" name="numbers" placeholder="1-3,5">
                    <button class="action selected">Указанные</button>
                </td>
                <td class="percentage">
                    <span>76%</span>
                </td>
                <td class="total-mark">
                    <span>4</span>
                </td>
            </tr>
            <tr>
                <td class="number">
                    <span>2</span>
                </td>
                <td class="fullname">
                    <span class="surname">Астафьев</span>
                    <span class="name">Кирилл</span>
                    <span class="name-short">К.</span>
                </td>
                <td class="stats">
                    <button class="markBtn passed" data-value="1" data-user="2" data-work="7" data-passed="1">1</button>
                    <button class="markBtn passed" data-value="2" data-user="2" data-work="7" data-passed="1">2</button>
                    <button class="markBtn passed" data-value="3" data-user="2" data-work="7" data-passed="1">3</button>
                    <button class="markBtn" data-value="4" data-user="2" data-work="7" data-passed="0">4</button>
                    <button class="markBtn passed" data-value="5" data-user="2" data-work="7" data-passed="1">5</button>
                    <button class="markBtn" data-value="6" data-user="2" data-work="7" data-passed="0">6</button>
                    <button class="markBtn" data-value="7" data-user="2" data-work="7" data-passed="0">7</button>
                    <button class="markBtn" data-value="8" data-user="2" data-work="7" data-passed="0">8</button>
                    <button class="markBtn" data-value="9" data-user="2" data-work="7" data-passed="0">9</button>
                    <button class="markBtn" data-value="10" data-user="2" data-work="7" data-passed="0">10</button>
                </td>
                <td class="actions">
                    <button class="action all">Поставить</button>
                    <button class="action nothing">Убрать</button>
                    <input class="action numbers" type="text" name="numbers" placeholder="1-3,5">
                    <button class="action selected">Указанные</button>
                </td>
                <td class="percentage">
                    <span>76%</span>
                </td>
                <td class="total-mark">
                    <span>4</span>
                </td>
            </tr>
            <tr>
                <td class="number">
                    <span>2</span>
                </td>
                <td class="fullname">
                    <span class="surname">Астафьев</span>
                    <span class="name">Кирилл</span>
                    <span class="name-short">К.</span>
                </td>
                <td class="stats">
                    <button class="markBtn passed" data-value="1" data-user="2" data-work="7" data-passed="1">1</button>
                    <button class="markBtn passed" data-value="2" data-user="2" data-work="7" data-passed="1">2</button>
                    <button class="markBtn passed" data-value="3" data-user="2" data-work="7" data-passed="1">3</button>
                    <button class="markBtn" data-value="4" data-user="2" data-work="7" data-passed="0">4</button>
                    <button class="markBtn passed" data-value="5" data-user="2" data-work="7" data-passed="1">5</button>
                    <button class="markBtn" data-value="6" data-user="2" data-work="7" data-passed="0">6</button>
                    <button class="markBtn" data-value="7" data-user="2" data-work="7" data-passed="0">7</button>
                    <button class="markBtn" data-value="8" data-user="2" data-work="7" data-passed="0">8</button>
                    <button class="markBtn" data-value="9" data-user="2" data-work="7" data-passed="0">9</button>
                    <button class="markBtn" data-value="10" data-user="2" data-work="7" data-passed="0">10</button>
                </td>
                <td class="actions">
                    <button class="action all">Поставить</button>
                    <button class="action nothing">Убрать</button>
                    <input class="action numbers" type="text" name="numbers" placeholder="1-3,5">
                    <button class="action selected">Указанные</button>
                </td>
                <td class="percentage">
                    <span>76%</span>
                </td>
                <td class="total-mark">
                    <span>4</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<script src="scripts/table.js"></script>
<script src="scripts/themeSet.js"></script>
<script src="scripts/themeSwitch.js"></script>
<script src="scripts/markBtn.js"></script>
<script src="scripts/setMarks.js"></script>
<script src="scripts/setMarksSelected.js"></script>
<script>
    // Получаем все кнопки с классом .markBtn
    var buttons = document.querySelectorAll('.markBtn');

    // Функция для подсчета процента кнопок с data-passed = 1
    function countPassedPercentage() {
        // Счетчик кнопок
        var count = 0;

        // Проходимся по каждой кнопке
        buttons.forEach(function(button) {
            // Получаем значение атрибута data-passed
            var passed = button.getAttribute('data-passed');

            // Если значение равно 1, увеличиваем счетчик
            if (passed === '1') {
                count++;
            }
        });

        // Вычисляем процент и записываем в span
        var percentage = (count / buttons.length) * 100;
        document.querySelector('.percentage span').innerText = percentage.toFixed(0) + '%';

        // Вычисляем итоговую оценку и записываем в span
        var totalMark;
        if (percentage <= 65) {
            totalMark = 2;
        } else if (percentage <= 74) {
            totalMark = 3;
        } else if (percentage <= 90) {
            totalMark = 4;
        } else {
            totalMark = 5;
        }
        document.querySelector('.total-mark span').innerText = totalMark;
    }

    // Вызываем функцию при загрузке страницы
    countPassedPercentage();

    // Добавляем обработчик события на изменение классов кнопки
    buttons.forEach(function(button) {
        button.addEventListener('click', countPassedPercentage);
    });

    document.getElementById('allButton').addEventListener('click', countPassedPercentage);
    document.getElementById('nothingButton').addEventListener('click', countPassedPercentage);

</script>
</body>
</html>