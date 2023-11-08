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
    const themeImgPath = isDark ? "../../../assets/images/sun.svg" : "../../../assets/images/moon.svg";
    themeImageMobile.src = themeImgPath;
    themeImage.src = themeImgPath;
}
