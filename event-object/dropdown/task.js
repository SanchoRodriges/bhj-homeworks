//получаем кнопку
const button = document.querySelector('.dropdown__value');
//получаем список через соседний с кнопкой элемент
const dropList = button.nextElementSibling;
//получаем все элементы dropdown__item
const dropItem = Array.from(dropList.querySelectorAll('.dropdown__item'));
//получаем все ссылки dropdown__item
const dropLink = Array.from(dropList.querySelectorAll('.dropdown__link'));

// клик по ссылке
for (let i = 0; i < dropLink.length; i++) {
    dropLink[i].addEventListener( "click" , (event) => { event.preventDefault() } );
}

//клик по кнопке
button.addEventListener( "click" , () => {
    //открываем и закрываем меню
    dropList.classList.toggle('dropdown__list_active');
});

//клик по любому dropdown__item
for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].addEventListener( "click" , () => {
        //получаем контент из ссылки
        let dropLinkContent = (dropItem[i].querySelector('.dropdown__link')).textContent;
        //записываем контент из ссылки в кнопку
        button.textContent = dropLinkContent;
        //закрываем меню
        dropList.classList.remove('dropdown__list_active');
    });
    
}