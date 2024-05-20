var iconMenu = document.getElementById("icon-menu");
var navMenu = document.getElementById("nav-menu");
var menuIsOpen = false;

function openCloseMenu() {
    if(menuIsOpen == false) {
        navMenu.style.display = 'contents';
        menuIsOpen = true;
    } else {
        navMenu.style.display = 'none'
        menuIsOpen = false;
    }
}

iconMenu.addEventListener("click", openCloseMenu);
