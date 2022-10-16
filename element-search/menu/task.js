const menuMain = document.querySelector('.menu_main');
const menuLinks = menuMain.querySelectorAll('.menu__link');

for(i = 0; i < menuLinks.length; i++) {
    let menuLink = menuLinks[i];
    menuLink.onclick = function() {
        let menuItem = menuLink.closest('.menu__item');
        let subMenu = menuItem.querySelector('.menu_sub');
        let menuSub = menuMain.querySelectorAll('.menu_sub');
        for(i = 0; i < menuSub.length; i++) {
            menuSub[i].classList.remove('menu_active');
        }
        if (subMenu) {
            subMenu.classList.add('menu_active');
        }        
        return false;
    }
}