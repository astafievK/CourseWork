const body = document.body;
const btnSwitchTheme = document.getElementById("btnSwitchTheme");
const themeImage = document.getElementById("themeImage");
const btnSwitchThemeMobile = document.getElementById("btnSwitchThemeMobile");
const themeImageMobile = document.getElementById("themeImageMobile");
const btnActionAll = document.querySelectorAll('.action.all')
const btnActionNothing = document.querySelectorAll('.action.nothing')

window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        toggleTheme(true)
    }
    else {
        toggleTheme(false)
    }
};

function switchTheme() {
    const isDark = !body.classList.contains("dark");
    body.classList.toggle("dark", isDark);
    localStorage.setItem('darkMode', isDark.toString());
    toggleTheme(isDark);
}

btnSwitchTheme.addEventListener("click", switchTheme);
btnSwitchThemeMobile.addEventListener("click", switchTheme);

function toggleTheme(isDark) {
    const checkImgPath = isDark ? "../../assets/images/light/check_dark.png" : "../../assets/images/dark/check_light.png";
    const crossImgPath = isDark ? "../../assets/images/light/cross_dark.png" : "../../assets/images/dark/cross_light.png";
    const themeImgPath = isDark ? "../../assets/images/nav/desktop/theme-sun.png" : "../../assets/images/nav/desktop/theme-moon.png";

    btnActionAll.forEach(button => {
        button.querySelector('img').src = checkImgPath;
    });

    btnActionNothing.forEach(button => {
        button.querySelector('img').src = crossImgPath;
    });

    themeImageMobile.src = themeImgPath;
    themeImage.src = themeImgPath;
}
