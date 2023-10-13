let isdarkmode = false;
const icons = []
function setup() {
    let menuicon = document.getElementsByClassName("menu-icon")[0]
    let darkmodeicon = document.getElementById("darkmode")
    icons.push("moon.png")
    icons.push("sun.svg")

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        toggleDarkmode(0);

    darkmodeicon.addEventListener("click", () => isdarkmode ? toggleDarkmode(1) : toggleDarkmode(0))
    menuicon.addEventListener("click", toggleMenu)
}

/**
 * 
 * @param {string} icon 
 * @param {string} fontcolor 
 * @param {number} option
 */
function toggleDarkmode(option) {
    let icon;
    let fontcolor;
    switch (option) {
        case 0:
            icon = icons[1]
            fontcolor = "white"
            break;
        case 1:
            icon = icons[0]
            fontcolor = "black"
            break;
        default:
            icon = icons[0]
            fontcolor = "black"
            break;
    }

    document.body.style.color = fontcolor;

    document.getElementsByTagName("body")[0].classList.toggle("body-dark");
    document.getElementsByTagName("header")[0].classList.toggle("header-dark");

    [].forEach.call(document.querySelectorAll(".nav-link"), function (e) {
        e.classList.toggle("dropdown-dark")
    });
    [].forEach.call(document.querySelectorAll(".dropdown-content"), function (e) {
        e.classList.toggle("dropdown-content-dark")
    });

    document.getElementsByClassName("github-svg")[0].classList.toggle("github-svg-dark");
    document.getElementById("darkmode").src = icon

    isdarkmode = !isdarkmode;
}

function toggleMenu(){
    document.getElementsByClassName("menu")[0].classList.toggle("show-menu")
}