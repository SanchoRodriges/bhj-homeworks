//получаем все ссылки с подсказкой
const tooltipLink = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < tooltipLink.length; i++) {

    //создаём подсказки в коде у каждой ссылки
    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipLink[i].title;
    tooltip.style.position = 'absolute';
    const {left, top, height} = tooltipLink[i].getBoundingClientRect();
    tooltip.style.top = top + height + window.scrollY + 'px';
    tooltip.style.left = left + 'px';
    tooltipLink[i].insertAdjacentElement('afterbegin', tooltip);

    //кликаем на любую ссылку
    tooltipLink[i].addEventListener('click', e => {
        
        //переключаем активность подсказки
        tooltip.classList.toggle('tooltip_active');

        //отключаем переход по ссылке
        e.preventDefault();
    });
}
