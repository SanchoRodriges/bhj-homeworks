//находим форму
const form = document.getElementById('tasks__form');
//находим поле
const input = document.querySelector('#task__input');
//находим кнопку
const button = document.getElementById('tasks__add');
//находим список задач
const taskList = document.getElementById('tasks__list');

//отправляем форму
form.addEventListener('submit', e => {
    //если поле не пустое и не состоит из пробелов
    if ((input.value).trim() !== '') {
        //запускаем функцию добавления задачи и передаём туда текст
        addTask(input.value);
    }
    //очищаем input
    input.value = '';
    //отключаем отправку формы
    e.preventDefault();
})

//добавление записи
function addTask(text) {
    taskList.insertAdjacentHTML('beforeend', `
    <div class="task">
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">&times;</a>
    </div> 
    `);
}

//удаление записи
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.parentElement.remove();
    }
});