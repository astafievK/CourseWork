import "./Header.css"
import {data} from "../../data.js";
import {useState} from "react";

function Header(props) {
    const {name, surname, group} = props;
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateArrowsVisibility = () => {
        const slider = document.getElementById('nav');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');

        if (slider.scrollLeft > 0) {
            arrowLeft.style.display = 'flex';
        } else {
            arrowLeft.style.display = 'none';
        }

        if (slider.scrollLeft + slider.clientWidth < slider.scrollWidth) {
            arrowRight.style.display = 'flex';
        } else {
            arrowRight.style.display = 'none';
        }
    };
    const handleScroll = () => {
        updateArrowsVisibility();
        setScrollPosition(document.getElementById('nav').scrollLeft);
    };
    const handleArrowLeftClick = () => {
        document.getElementById('nav').scrollBy(-350, 0);
    };
    const handleArrowRightClick = () => {
        document.getElementById('nav').scrollBy(350, 0);
    };

    return (
        <header>
            <button className="theme" id="btnSwitchTheme">
                <img id="themeImage" src="src/assets/images/moon.svg" alt="Тема"/>
            </button>
            <nav id="nav">
                <button className="nav-arrow left" id="arrow-left" onClick={handleArrowLeftClick}>
                    <img src="src/assets/images/slider-left.svg" alt="Влево"/>
                </button>
                {
                    data[0].role === "Студент" ? (
                        <>
                            <div className="info">
                                <span className="name">{name} {surname}</span>
                                <span className="group">{group}</span>
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
                        </>) : (
                            <>
                                <div className="functions">
                                    <button className="function stats">Статистика</button>
                                    <button className="function students">Студенты</button>
                                    <button className="function disciplines">Дисциплины</button>
                                    <button className="function export">Экспорт</button>
                                </div>
                                <div className="marks">
                                    <div className="mark cool">
                                        <input type="text" placeholder={5}/>
                                    </div>
                                    <div className="mark good">
                                        <input type="text" placeholder={4}/>
                                    </div>
                                    <div className="mark bad">
                                        <input type="text" placeholder={3}/>
                                    </div>
                                </div>
                                <div className="filters">
                                    <div className="filter year">
                                        <select className="select-year" id="filterYear" onChange={(event) => {
                                            console.log(event.target.value)
                                        }}>
                                            <option>1 курс</option>
                                            <option>2 курс</option>
                                            <option>3 курс</option>
                                            <option>4 курс</option>
                                        </select>
                                    </div>
                                    <div className="filter semester">
                                        <select className="select-semester" id="filterSemester" onChange={(event) => {
                                            console.log(event.target.value)
                                        }}>
                                            <option>1 семестр</option>
                                            <option>2 семестр</option>
                                        </select>
                                    </div>
                                    <div className="filter group">
                                        <select className="select-group" id="filterGroup" onChange={(event) => {
                                            console.log(event.target.value)
                                        }}>
                                            <option>ИСПП-01</option>
                                            <option>ПКС-01</option>
                                        </select>
                                    </div>
                                    <div className="filter discipline">
                                        <select className="select-discipline" id="filterDiscipline" onChange={(event) => {
                                            console.log(event.target.value)
                                        }}>
                                            <option>МДК 01.01</option>
                                            <option>МДК 01.02</option>
                                        </select>
                                    </div>
                                    <div className="filter work">
                                        <select className="select-work" id="filterWork" onChange={(event) => {
                                            console.log(event.target.value)
                                        }}>
                                            <option value={1}>Лабораторная работа 1</option>
                                            <option value={2}>Лабораторная работа 2</option>
                                        </select>
                                    </div>
                                </div>
                            </>
                    )
                }
                <button className="nav-arrow right" id="arrow-right" onClick={handleArrowRightClick}>
                    <img src="src/assets/images/slider-right.svg" alt="Вправо"/>
                </button>
        </nav>
        <form className="exit" method="post" action="src/scripts/exit.php">
            <button name="exit">
                <img src="src/assets/images/exit.svg" alt="Выход"/>
            </button>
        </form>
        </header>
    )
}

export default Header;