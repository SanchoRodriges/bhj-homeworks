//находим loader
const loader = document.querySelector('#loader');
//находим контейнер для валют
const items = document.querySelector('#items');

//создаём объект класса XMLHttpRequest
const xhr = new XMLHttpRequest();
//получать будем json
xhr.responseType = 'json';
//создаём запрос
xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/');
//отправляем запрос
xhr.send();
//следим за ответом
xhr.onreadystatechange = function() {
    //когда ответ получен и получен успешный ответ
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //зарываем лоадер
        loader.classList.remove('loader_active');
        //получаем объект с валютами
        let valutes = xhr.response.response.Valute;
        let html = '';
        //перебираем объект и собираем html
        for (let valute in valutes) {
            html += `<div class="item">`;
            html += `<div class="item__code">${valutes[valute].CharCode}</div>`;
            html += `<div class="item__value">${valutes[valute].Value}</div>`;
            html += `<div class="item__currency">руб.</div>`;
            html += `</div>`;
            
        }
        //добавляем полученный html на страницу
        items.insertAdjacentHTML('afterBegin', html);
    };
};