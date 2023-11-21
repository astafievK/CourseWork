-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 21 2023 г., 20:16
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `LabWorks`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Account`
--

CREATE TABLE `Account` (
  `idAccount` int NOT NULL,
  `login` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `surname` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `patronymic` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Account`
--

INSERT INTO `Account` (`idAccount`, `login`, `password`, `name`, `surname`, `patronymic`) VALUES
(1, 'astafievK', 'password', 'Астафьев', 'Кирилл', 'Александрович'),
(2, 'jsm', 'password', 'Юлия', 'Маломан', 'Сергеевна'),
(3, 'svetluv', 'password', 'Иван', 'Светлов', 'Владимирович'),
(4, 'dobryak', 'password', 'Артем', 'Добряков', NULL),
(5, 'glushenko', 'password', 'Галина', 'Глущенко', 'Николаевна');

-- --------------------------------------------------------

--
-- Структура таблицы `CompletedUserWork`
--

CREATE TABLE `CompletedUserWork` (
  `idCompletedUserWork` int NOT NULL,
  `WorkInDisciplineByGroup_idWorkInDisciplineByGroup` int NOT NULL,
  `User_idUser` int NOT NULL,
  `totalMark` tinyint NOT NULL,
  `percentage` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Discipline`
--

CREATE TABLE `Discipline` (
  `idDiscipline` int NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Discipline`
--

INSERT INTO `Discipline` (`idDiscipline`, `title`) VALUES
(25, 'Английский язык'),
(26, 'Английский язык в профессиональной деятельности'),
(28, 'Информационные технологии'),
(30, 'История'),
(27, 'Математика'),
(29, 'Математическое моделирование'),
(15, 'МДК 01.01'),
(16, 'МДК 01.02'),
(17, 'МДК 01.03'),
(18, 'МДК 01.04'),
(19, 'МДК 02.01'),
(20, 'МДК 02.02'),
(21, 'МДК 02.04'),
(22, 'ОПБД'),
(23, 'Физическая культура'),
(24, 'Элементы высшей математики');

-- --------------------------------------------------------

--
-- Структура таблицы `DisciplinesInGroup`
--

CREATE TABLE `DisciplinesInGroup` (
  `idDisciplinesInGroup` int NOT NULL,
  `Group_idGroup` int NOT NULL,
  `Discipline_idDiscipline` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Group`
--

CREATE TABLE `Group` (
  `idGroup` int NOT NULL,
  `name` varchar(10) NOT NULL,
  `year` int NOT NULL,
  `course` tinyint NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Group`
--

INSERT INTO `Group` (`idGroup`, `name`, `year`, `course`) VALUES
(1, 'ИСПП-01', 2020, 4),
(2, 'ПКС-01', 2020, 4),
(3, 'ИСПП-11', 2021, 3),
(4, 'ИСПП-31', 2023, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `GroupsInStaff`
--

CREATE TABLE `GroupsInStaff` (
  `idGroupsInStaff` int NOT NULL,
  `Group_idGroup` int NOT NULL,
  `Staff_idStaff` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `GroupsInStaff`
--

INSERT INTO `GroupsInStaff` (`idGroupsInStaff`, `Group_idGroup`, `Staff_idStaff`) VALUES
(1, 1, 1),
(2, 2, 1),
(5, 2, 2),
(3, 3, 2),
(4, 4, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `Mark`
--

CREATE TABLE `Mark` (
  `idMark` int NOT NULL,
  `tasksFor3` tinyint NOT NULL DEFAULT '1',
  `tasksFor4` tinyint NOT NULL DEFAULT '1',
  `tasksFor5` tinyint NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Mark`
--

INSERT INTO `Mark` (`idMark`, `tasksFor3`, `tasksFor4`, `tasksFor5`) VALUES
(1, 1, 1, 1),
(2, 1, 1, 1),
(3, 1, 1, 1),
(4, 1, 1, 1),
(5, 1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `ResultTask`
--

CREATE TABLE `ResultTask` (
  `isPassed` bit(1) NOT NULL DEFAULT b'0',
  `Task_idTask` int NOT NULL,
  `CompletedUserWork_idCompletedUserWork` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Staff`
--

CREATE TABLE `Staff` (
  `idStaff` int NOT NULL,
  `Account_idAccount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Staff`
--

INSERT INTO `Staff` (`idStaff`, `Account_idAccount`) VALUES
(1, 2),
(2, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `Student`
--

CREATE TABLE `Student` (
  `idStudent` int NOT NULL,
  `Group_idGroup` int NOT NULL,
  `Account_idAccount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Student`
--

INSERT INTO `Student` (`idStudent`, `Group_idGroup`, `Account_idAccount`) VALUES
(1, 1, 1),
(2, 1, 3),
(3, 2, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `Task`
--

CREATE TABLE `Task` (
  `idTask` int NOT NULL,
  `Work_idWork` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `status` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Work`
--

CREATE TABLE `Work` (
  `idWork` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `WorkType_idWorkType` int NOT NULL,
  `Mark_idMark` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Work`
--

INSERT INTO `Work` (`idWork`, `title`, `WorkType_idWorkType`, `Mark_idMark`) VALUES
(1, 'Создание программных модулей', 1, 1),
(2, 'Разработка программных модулей', 1, 2),
(3, 'Проектирование БД', 1, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `WorkInDisciplineByGroup`
--

CREATE TABLE `WorkInDisciplineByGroup` (
  `idWorkInDisciplineByGroup` int NOT NULL,
  `Work_idWork` int NOT NULL,
  `DisciplinesInGroup_idDisciplinesInGroup` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `WorkType`
--

CREATE TABLE `WorkType` (
  `idWorkType` int NOT NULL,
  `title` varchar(45) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `WorkType`
--

INSERT INTO `WorkType` (`idWorkType`, `title`) VALUES
(1, 'Лабораторная работа'),
(2, 'Практическая работа'),
(3, 'Самостоятельная работа'),
(4, 'Реферат'),
(5, 'Курсовая работы'),
(6, 'Курсовой проект'),
(7, 'Дипломный проект'),
(8, 'Учебная практика'),
(9, 'Производственная практика'),
(10, 'Предипломная практика');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`idAccount`),
  ADD UNIQUE KEY `login_UNIQUE` (`login`);

--
-- Индексы таблицы `CompletedUserWork`
--
ALTER TABLE `CompletedUserWork`
  ADD PRIMARY KEY (`idCompletedUserWork`),
  ADD KEY `fk_CompletedUserWork_WorkInDisciplineByGroup1_idx` (`WorkInDisciplineByGroup_idWorkInDisciplineByGroup`),
  ADD KEY `fk_CompletedUserWork_User1_idx` (`User_idUser`);

--
-- Индексы таблицы `Discipline`
--
ALTER TABLE `Discipline`
  ADD PRIMARY KEY (`idDiscipline`),
  ADD UNIQUE KEY `title_UNIQUE` (`title`);

--
-- Индексы таблицы `DisciplinesInGroup`
--
ALTER TABLE `DisciplinesInGroup`
  ADD PRIMARY KEY (`idDisciplinesInGroup`),
  ADD UNIQUE KEY `uq_DisciplinesInGroup` (`Discipline_idDiscipline`,`Group_idGroup`),
  ADD KEY `fk_GroupAndDisciplines_Groups1_idx` (`Group_idGroup`),
  ADD KEY `fk_GroupAndDisciplines_Disciplines1_idx` (`Discipline_idDiscipline`);

--
-- Индексы таблицы `Group`
--
ALTER TABLE `Group`
  ADD PRIMARY KEY (`idGroup`),
  ADD UNIQUE KEY `title_UNIQUE` (`name`);

--
-- Индексы таблицы `GroupsInStaff`
--
ALTER TABLE `GroupsInStaff`
  ADD PRIMARY KEY (`idGroupsInStaff`),
  ADD UNIQUE KEY `uq_GroupsInStaff` (`Group_idGroup`,`Staff_idStaff`),
  ADD KEY `fk_GroupsInStaff_Group1_idx` (`Group_idGroup`),
  ADD KEY `fk_GroupsInStaff_Staff1_idx` (`Staff_idStaff`);

--
-- Индексы таблицы `Mark`
--
ALTER TABLE `Mark`
  ADD PRIMARY KEY (`idMark`);

--
-- Индексы таблицы `ResultTask`
--
ALTER TABLE `ResultTask`
  ADD PRIMARY KEY (`Task_idTask`,`CompletedUserWork_idCompletedUserWork`),
  ADD KEY `fk_Task_has_User_Task1_idx` (`Task_idTask`),
  ADD KEY `fk_ResultTask_CompletedUserWork1_idx` (`CompletedUserWork_idCompletedUserWork`);

--
-- Индексы таблицы `Staff`
--
ALTER TABLE `Staff`
  ADD PRIMARY KEY (`idStaff`),
  ADD UNIQUE KEY `Account_idAccount_UNIQUE` (`Account_idAccount`) INVISIBLE,
  ADD KEY `fk_Staff_Account1_idx` (`Account_idAccount`);

--
-- Индексы таблицы `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`idStudent`),
  ADD UNIQUE KEY `Account_idAccount_UNIQUE` (`Account_idAccount`),
  ADD KEY `fk_User_Group1_idx` (`Group_idGroup`),
  ADD KEY `fk_Student_Account1_idx` (`Account_idAccount`);

--
-- Индексы таблицы `Task`
--
ALTER TABLE `Task`
  ADD PRIMARY KEY (`idTask`),
  ADD KEY `fk_Tasks_Works1_idx` (`Work_idWork`);

--
-- Индексы таблицы `Work`
--
ALTER TABLE `Work`
  ADD PRIMARY KEY (`idWork`),
  ADD UNIQUE KEY `Mark_idMark_UNIQUE` (`Mark_idMark`),
  ADD KEY `fk_Work_WorkType1_idx` (`WorkType_idWorkType`),
  ADD KEY `fk_Work_Mark1_idx` (`Mark_idMark`) INVISIBLE;

--
-- Индексы таблицы `WorkInDisciplineByGroup`
--
ALTER TABLE `WorkInDisciplineByGroup`
  ADD PRIMARY KEY (`idWorkInDisciplineByGroup`),
  ADD UNIQUE KEY `uq_WorkInDisciplineByGroup` (`Work_idWork`,`DisciplinesInGroup_idDisciplinesInGroup`),
  ADD KEY `fk_WorkAndGroupAndDiscipline_Work1_idx` (`Work_idWork`) INVISIBLE,
  ADD KEY `fk_WorkAndGroupAndDiscipline_GroupAndDiscipline1_idx` (`DisciplinesInGroup_idDisciplinesInGroup`);

--
-- Индексы таблицы `WorkType`
--
ALTER TABLE `WorkType`
  ADD PRIMARY KEY (`idWorkType`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Account`
--
ALTER TABLE `Account`
  MODIFY `idAccount` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `CompletedUserWork`
--
ALTER TABLE `CompletedUserWork`
  MODIFY `idCompletedUserWork` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Discipline`
--
ALTER TABLE `Discipline`
  MODIFY `idDiscipline` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `DisciplinesInGroup`
--
ALTER TABLE `DisciplinesInGroup`
  MODIFY `idDisciplinesInGroup` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `Group`
--
ALTER TABLE `Group`
  MODIFY `idGroup` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `GroupsInStaff`
--
ALTER TABLE `GroupsInStaff`
  MODIFY `idGroupsInStaff` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `Mark`
--
ALTER TABLE `Mark`
  MODIFY `idMark` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `Staff`
--
ALTER TABLE `Staff`
  MODIFY `idStaff` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `Student`
--
ALTER TABLE `Student`
  MODIFY `idStudent` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `Task`
--
ALTER TABLE `Task`
  MODIFY `idTask` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Work`
--
ALTER TABLE `Work`
  MODIFY `idWork` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `WorkInDisciplineByGroup`
--
ALTER TABLE `WorkInDisciplineByGroup`
  MODIFY `idWorkInDisciplineByGroup` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `WorkType`
--
ALTER TABLE `WorkType`
  MODIFY `idWorkType` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `CompletedUserWork`
--
ALTER TABLE `CompletedUserWork`
  ADD CONSTRAINT `fk_CompletedUserWork_User1` FOREIGN KEY (`User_idUser`) REFERENCES `Student` (`idStudent`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_CompletedUserWork_WorkInDisciplineByGroup1` FOREIGN KEY (`WorkInDisciplineByGroup_idWorkInDisciplineByGroup`) REFERENCES `WorkInDisciplineByGroup` (`idWorkInDisciplineByGroup`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `DisciplinesInGroup`
--
ALTER TABLE `DisciplinesInGroup`
  ADD CONSTRAINT `fk_GroupAndDisciplines_Disciplines1` FOREIGN KEY (`Discipline_idDiscipline`) REFERENCES `Discipline` (`idDiscipline`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_GroupAndDisciplines_Groups1` FOREIGN KEY (`Group_idGroup`) REFERENCES `Group` (`idGroup`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `GroupsInStaff`
--
ALTER TABLE `GroupsInStaff`
  ADD CONSTRAINT `fk_GroupsInStaff_Group1` FOREIGN KEY (`Group_idGroup`) REFERENCES `Group` (`idGroup`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_GroupsInStaff_Staff1` FOREIGN KEY (`Staff_idStaff`) REFERENCES `Staff` (`idStaff`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `ResultTask`
--
ALTER TABLE `ResultTask`
  ADD CONSTRAINT `fk_ResultTask_CompletedUserWork1` FOREIGN KEY (`CompletedUserWork_idCompletedUserWork`) REFERENCES `CompletedUserWork` (`idCompletedUserWork`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Task_has_User_Task1` FOREIGN KEY (`Task_idTask`) REFERENCES `Task` (`idTask`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Staff`
--
ALTER TABLE `Staff`
  ADD CONSTRAINT `fk_Staff_Account1` FOREIGN KEY (`Account_idAccount`) REFERENCES `Account` (`idAccount`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Student`
--
ALTER TABLE `Student`
  ADD CONSTRAINT `fk_Student_Account1` FOREIGN KEY (`Account_idAccount`) REFERENCES `Account` (`idAccount`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_User_Group1` FOREIGN KEY (`Group_idGroup`) REFERENCES `Group` (`idGroup`);

--
-- Ограничения внешнего ключа таблицы `Work`
--
ALTER TABLE `Work`
  ADD CONSTRAINT `fk_Work_Mark1` FOREIGN KEY (`Mark_idMark`) REFERENCES `Mark` (`idMark`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Work_WorkType1` FOREIGN KEY (`WorkType_idWorkType`) REFERENCES `WorkType` (`idWorkType`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `WorkInDisciplineByGroup`
--
ALTER TABLE `WorkInDisciplineByGroup`
  ADD CONSTRAINT `fk_WorkAndGroupAndDiscipline_GroupAndDiscipline1` FOREIGN KEY (`DisciplinesInGroup_idDisciplinesInGroup`) REFERENCES `DisciplinesInGroup` (`idDisciplinesInGroup`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_WorkAndGroupAndDiscipline_Work1` FOREIGN KEY (`Work_idWork`) REFERENCES `Work` (`idWork`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
