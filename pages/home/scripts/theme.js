const body = document.body;

const btnSwitchTheme = document.getElementById("btnSwitchTheme");
const themeImage = document.getElementById("themeImage");

const btnSwitchThemeMobile = document.getElementById("btnSwitchThemeMobile");
const themeImageMobile = document.getElementById("themeImageMobile");

btnSwitchTheme.addEventListener("click", function() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeImageMobile.src = "../../assets/images/nav/desktop/theme-moon.png";
        themeImage.src = "../../assets/images/nav/desktop/theme-moon.png";
    } else {
        body.classList.add("dark");
        themeImageMobile.src = "../../assets/images/nav/desktop/theme-sun.png";
        themeImage.src = "../../assets/images/nav/desktop/theme-sun.png";
    }
});

btnSwitchThemeMobile.addEventListener("click", function() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeImageMobile.src = "../../assets/images/nav/desktop/theme-moon.png";
        themeImage.src = "../../assets/images/nav/desktop/theme-moon.png";
    } else {
        body.classList.add("dark");
        themeImageMobile.src = "../../assets/images/nav/desktop/theme-sun.png";
        themeImage.src = "../../assets/images/nav/desktop/theme-sun.png";
    }
});