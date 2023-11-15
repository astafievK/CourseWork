import './Header.css'
import {data} from "../../data.js";

function Header() {
    if (data[0].role === 'Студент') {
        return (
            <header>
                <nav>
                    <button className="theme" id="btnSwitchTheme">
                        <img id="themeImage" src="src/assets/images/moon.svg" alt="Тема"/>
                    </button>
                    <div className="name">
                        <span>{data[0].surname} {data[0].name} {data[0].groupName}</span>
                    </div>
                    <div className="select-discipline">
                        <select className="select-discipline" id="filterDiscipline">
                            <option value="ИСПП-11">МДК 01.01</option>
                            <option value="ИСПП-11">МДК 01.02</option>
                        </select>
                    </div>
                    <form className="exit" method="post" action="src/scripts/exit.php">
                        <button name="exit">
                            <img src="src/assets/images/exit.svg" alt=""/>
                        </button>
                    </form>
                </nav>
            </header>
        );
    }
    return (
        <header>
            <nav>
                <button className="theme" id="btnSwitchTheme">
                    <img id="themeImage" src="src/assets/images/moon.svg" alt="Тема"/>
                </button>
                <div className="functions">
                    <button className="export">Экспорт</button>
                </div>
                <div className="options">
                    <div className="filter">
                        <select className="select-group" id="filterGroup">
                            <option value="ИСПП-01">ИСПП-01</option>
                            <option value="ИСПП-01">ПКС-01</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="select-discipline" id="filterDiscipline">
                            <option value="ИСПП-11">МДК 01.01</option>
                            <option value="ИСПП-11">МДК 01.02</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="select-work" id="filterWork">
                            <option value="Лабораторная работа 1">Лабораторная работа 1</option>
                            <option value="Лабораторная работа 2">Лабораторная работа 2</option>
                        </select>
                    </div>
                </div>
                <form className="exit" method="post" action="src/scripts/exit.php">
                    <button name="exit">
                        <img src="src/assets/images/exit.svg" alt="Выход"/>
                    </button>
                </form>
            </nav>
            <nav className="mobile">
                <div className="buttons">
                    <button className="theme" id="btnSwitchThemeMobile">
                        <img id="themeImageMobile" src="src/assets/images/moon.svg" alt=""/>
                    </button>
                    <form className="exit" method="post" action="src/scripts/exit.php">
                        <button name="exit">
                            <img src="src/assets/images/exit.svg" alt=""/>
                        </button>
                    </form>
                </div>
                <div className="options">
                    <div className="filter">
                        <select className="select-group" id="filterGroupMobile">
                            <option selected disabled>Группа</option>
                            <option value="ИСПП-01">ИСПП-01</option>
                            <option value="ИСПП-01">ИСПП-01</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="select-discipline" id="filterDisciplineMobile">
                            <option selected disabled>Дисциплина</option>
                            <option value="ИСПП-11">МДК 01.01</option>
                            <option value="ИСПП-11">МДК 01.02</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="select-work" id="filterWorkMobile">
                            <option selected disabled>Работа</option>
                            <option value="Лабораторная работа 1">Лабораторная работа 1</option>
                            <option value="Лабораторная работа 2">Лабораторная работа 2</option>
                        </select>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;