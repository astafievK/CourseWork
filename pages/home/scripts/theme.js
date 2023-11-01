const btnSwitchTheme = document.getElementById("btnSwitchTheme");
const body = document.body;
const themeImage = document.getElementById("themeImage");

btnSwitchTheme.addEventListener("click", function() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeImage.src = "../../assets/images/nav/desktop/theme-moon.png";
    } else {
        body.classList.add("dark");
        themeImage.src = "../../assets/images/nav/desktop/theme-sun.png";
    }
});