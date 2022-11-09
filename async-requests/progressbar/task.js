//получаем полосу прогресса
const progress = document.getElementById('progress');
//получаем форму
const form = document.getElementById('form');

//отправка формы
form.addEventListener('submit', (e) => {
    //отключаем отправку формы
    e.preventDefault();
    //создаём объект класса XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });

    const formData = new FormData(form);
    xhr.send(formData);
})