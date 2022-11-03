//находим форму
const form = document.getElementById('tasks__form');
//находим поле
const input = document.querySelector('#task__input');
//находим кнопку
const button = document.getElementById('tasks__add');

//отправляем форму
form.addEventListener('submit', e => {
    if (input.value !== '') {
        //запускаем функцию добавления задачи и передаём туда текст
        addTask(input.value);
    }
    //отключаем отправку формы
    e.preventDefault();
})

//добавление записи
function addTask(text) {
    const taskList = document.getElementById('tasks__list');
    //создаем div .task
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    //создаем div .task__title
    let newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('task__title');
    newTaskDiv.textContent = text;
    //создаем a .task__remove
    let newTaskA = document.createElement('a');
    newTaskA.href = '#';
    newTaskA.classList.add('task__remove');
    newTaskA.innerHTML = "&times;";
    //собираем html
    newTask.appendChild(newTaskDiv);
    newTask.appendChild(newTaskA);
    //добавляем новую запись в список
    taskList.appendChild(newTask);

    //удаление записи
    newTaskA.addEventListener('click', () => newTask.remove() );
}