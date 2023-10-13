let isdarkmode = false;
/**
 * @param {Array} icons
 * 0: moon.png | 1: sun.svg | 2: menu-icon.svg | 3: menu-icon-white.svg | 4: close-icon.svg | 5: close-icon-white.svg
 */
const icons = []
function setup() {
    let menuicon = document.getElementsByClassName("menu-icon")[0]
    let closeicon = document.getElementsByClassName("close-icon")[0]
    let menubottuns = document.getElementsByClassName("menu-links") //HTMLArray of all buttons
    let darkmodeicon = document.getElementsByClassName("darkmodeicon")
    icons.push("moon.png") //0
    icons.push("sun.svg") //1
    icons.push("menu-icon.svg") //2
    icons.push("menu-icon-white.svg") //3
    icons.push("close-icon.svg") //4
    icons.push("close-icon-white.svg") //5
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        toggleDarkmode(0);


    for (let index = 0; index < darkmodeicon.length; index++) {
            const element = darkmodeicon[index];
            element.addEventListener("click", () => isdarkmode ? toggleDarkmode(1) : toggleDarkmode(0))
            
    }
    menuicon.addEventListener("click", toggleMenu)
    closeicon.addEventListener("click", toggleMenu)

    for (let index = 0; index < menubottuns.length; index++) {
        const element = menubottuns[index];
        element.addEventListener("click", toggleMenu)
        
    }
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
    let menuButton;
    let closeButton;
    switch (option) {
        case 0:
            icon = icons[1]
            menuButton = icons[3]
            closeButton = icons[5]
            fontcolor = "white"
            break;
        case 1:
            icon = icons[0]
            menuButton = icons[2]
            closeButton = icons[4]
            fontcolor = "black"
            break;
        default:
            icon = icons[0]
            menuButton = icons[2]
            closeButton = icons[4]
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
    
    let darkmodeicons = document.getElementsByClassName("darkmodeicon")
    for (let index = 0; index < darkmodeicons.length; index++) {
        const element = darkmodeicons[index];
        element.src = icon
    }

    let menuLinks = document.getElementsByClassName("menu-links")
    for (let index = 0; index < menuLinks.length; index++) {
        const element = menuLinks[index];
        element.classList.toggle("menu-links-dark")
    }

    document.getElementsByClassName("github-svg")[0].classList.toggle("github-svg-dark");
    document.getElementsByClassName("menu-icon")[0].src = menuButton
    document.getElementsByClassName("close-icon")[0].src = closeButton
    document.getElementsByClassName("menu")[0].classList.toggle("menu-dark")

    isdarkmode = !isdarkmode;
}

function toggleMenu(){
    document.getElementsByClassName("menu")[0].classList.toggle("show-menu")
}