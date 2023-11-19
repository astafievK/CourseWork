import './Header.css'
import {data} from "../../data.js";

function Header() {
    if (data[0].role === 'Студент') {
        return (
            <header>
                <button className="theme" id="btnSwitchTheme">
                    <img id="themeImage" src="src/assets/images/moon.svg" alt="Тема"/>
                </button>
                <nav>
                    <div className="name">
                        <span>{data[1].surname} {data[1].name} {data[1].groupName}</span>
                    </div>
                    <div className="filters">
                        <div className="filter year">
                            <select className="select-year" id="filterDiscipline">
                                <option>1 курс</option>
                                <option>2 курс</option>
                                <option>3 курс</option>
                                <option>4 курс</option>
                            </select>
                        </div>
                        <div className="filter semester">
                            <select className="select-semester" id="filterDiscipline">
                                <option>1 семестр</option>
                                <option>2 семестр</option>
                            </select>
                        </div>
                        <div className="filter discipline">
                            <select className="select-discipline" id="filterDiscipline">
                                <option>МДК 01.01</option>
                                <option>МДК 01.02</option>
                            </select>
                        </div>
                    </div>
                </nav>
                <form className="exit" method="post" action="src/scripts/exit.php">
                    <button name="exit">
                        <img src="src/assets/images/exit.svg" alt=""/>
                    </button>
                </form>
            </header>
        );
    }
    return (
        <header>
            <button className="theme" id="btnSwitchTheme">
                <img id="themeImage" src="src/assets/images/moon.svg" alt="Тема"/>
            </button>
            <nav>
                <div className="functions">
                    <button className="function stats">Статистика</button>
                    <button className="function students">Студенты</button>
                    <button className="function disciplines">Дисциплины</button>
                    <button className="function export">Экспорт</button>
                </div>
                <div className="filters">
                    <div className="filter year">
                        <select className="select-year" id="filterDiscipline">
                            <option>1 курс</option>
                            <option>2 курс</option>
                            <option>3 курс</option>
                            <option>4 курс</option>
                        </select>
                    </div>
                    <div className="filter semester">
                        <select className="select-semester" id="filterDiscipline">
                            <option>1 семестр</option>
                            <option>2 семестр</option>
                        </select>
                    </div>
                    <div className="filter group">
                        <select className="select-group" id="filterGroup">
                            <option>ИСПП-01</option>
                            <option>ПКС-01</option>
                        </select>
                    </div>
                    <div className="filter discipline">
                        <select className="select-discipline" id="filterDiscipline">
                            <option>МДК 01.01</option>
                            <option>МДК 01.02</option>
                        </select>
                    </div>
                    <div className="filter work">
                        <select className="select-work" id="filterWork">
                            <option>Лабораторная работа 1</option>
                            <option>Лабораторная работа 2</option>
                        </select>
                    </div>
                </div>
            </nav>
            <form className="exit" method="post" action="src/scripts/exit.php">
                <button name="exit">
                    <img src="src/assets/images/exit.svg" alt="Выход"/>
                </button>
            </form>
        </header>
    );
}

export default Header;