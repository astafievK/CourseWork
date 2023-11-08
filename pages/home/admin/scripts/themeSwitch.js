const body = document.body;
const btnSwitchTheme = document.getElementById("btnSwitchTheme");
const themeImage = document.getElementById("themeImage")
const addImage = document.querySelectorAll(".add-img")
const btnSwitchThemeMobile = document.getElementById("btnSwitchThemeMobile");
const themeImageMobile = document.getElementById("themeImageMobile");

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
    const addImgPath = isDark ? "../../../assets/images/add_light.svg" : "../../../assets/images/add_dark.svg";
    themeImageMobile.src = themeImgPath;
    themeImage.src = themeImgPath;

    addImage.forEach(image =>{
        image.src = addImgPath;
    })
}
