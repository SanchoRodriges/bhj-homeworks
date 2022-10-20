// получаем блок со слайдером
const rotator = document.querySelector('.rotator');
// получаем массив слайдов
const rotatorCase = Array.from(rotator.querySelectorAll('.rotator__case'));

function slideRotate() {
    //находим индекс активного слайда
    let activeCase = rotatorCase.findIndex( item => item.className.includes('rotator__case_active') );
    //вычисляем индекс следующего слайда
    let nextCase = activeCase < rotatorCase.length - 1 ? activeCase + 1 : 0;
    //убираем активность у нынешнего слайда
    rotatorCase[activeCase].classList.remove('rotator__case_active');
    //добавляем активность следующему слайду
    rotatorCase[nextCase].classList.add('rotator__case_active');
}

//запускаем функцию каждую секунду
setInterval( slideRotate, 1000 );