let pollTitle = document.querySelector('#poll__title');
let pollAnswers = document.querySelector('#poll__answers');

//создаём объект класса XMLHttpRequest
const xhr = new XMLHttpRequest();
//получать будем json
xhr.responseType = 'json';
//создаём запрос
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
//отправляем запрос
xhr.send();
//следим за ответом
xhr.onreadystatechange = function() {
    //когда ответ получен и получен успешный ответ
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

        //получаем объект с опросом
        let poll = xhr.response.data;
        //выводим полученный заголовок опроса
        pollTitle.textContent = xhr.response.data.title;
        let answers = xhr.response.data.answers;
        let answersHtml = '';
        for (let i = 0; i < answers.length; i++) {
            answersHtml += `<button class="poll__answer">${answers[i]}</button>`;
        }
        //выводим полученные варианты ответа
        pollAnswers.innerHTML = answersHtml;

    };
};
//обрабатываем клик на блоке с ответом
pollAnswers.addEventListener('click', (event) => {
    let target = event.target;
    //если клик на одном из ответов
    if (target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
    }
})