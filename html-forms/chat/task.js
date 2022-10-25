//получаем виджет
const widget = document.querySelector('.chat-widget');
//получаем красную кнопку
const widgetSide = document.querySelector('.chat-widget__side');
// при клике на кнопку активируем виджет
widgetSide.onclick = function() {
    widget.classList.add('chat-widget_active');
}
//получаем поле ввода
const widgetInput = document.getElementById('chat-widget__input');
//клик по кнопке Enter
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && widgetInput.value !== '') {
        addMessage(widgetInput.value, 'client');
        widgetInput.value = '';
        setTimeout(botMessage, 1000);
      }
});
//функция добавления сообщений
function addMessage(message, person) {
    //получаем окно сообщений
    const messages = document.querySelector( '.chat-widget__messages' );
    //получаем часы и минуты
    let date = new Date();
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // добавляем текст
    messages.innerHTML += `
    <div class="message${person==='client' ? ' message_client' : ''}">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
        ${message}
        </div>
    </div>
    `;
}
//сообщения бота
function botMessage() {
    const messages = [
        'Вечер в хату!',
        'Чьих будешь?',
        'Сам такой!'
    ]
    let randomIndex = Math.floor(Math.random() * messages.length);
    addMessage(messages[randomIndex], 'bot');
}