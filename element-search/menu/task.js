const menuMain = document.querySelector('.menu_main');
const menuLinks = menuMain.querySelectorAll('.menu__link');

for(let i = 0; i < menuLinks.length; i++) {
    //получаем все ссылки
    let menuLink = menuLinks[i];
    //при клике на ссылку запускаем функцию
    menuLink.onclick = function() {
        //получаем родителский menu__item у данной ссылки
        let menuItem = menuLink.closest('.menu__item');
        //получаем дочернее меню
        let subMenu = menuItem.querySelector('.menu_sub');
        //получаем все menu_sub на в менюшке
        let menuSub = menuMain.querySelectorAll('.menu_sub');
        //проверяем активность меню у текущей ссылки
        let isActive = subMenu.className.includes('menu_active');
        
        for(let i = 0; i < menuSub.length; i++) {
            //при клике скрываем все меню
            menuSub[i].classList.remove('menu_active');
        }

        // если у нашей ссылки есть подменю, то открываем его и блокируем переход по ссылке
        if (subMenu && !isActive) {
            subMenu.classList.add('menu_active');
            return false;
        }

        //если подменю активно, блокируем переход
        if (isActive) {
            return false;
        }
    }
}