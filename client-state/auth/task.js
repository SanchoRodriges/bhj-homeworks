const form = document.querySelector('#signin__form');
const formDiv = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const welcomeUserId = welcome.querySelector('#user_id');
const btn = form.querySelector('#signin__btn');

const userId = localStorage.getItem('userId');

if (userId) {
    formDiv.classList.remove('signin_active');
    welcomeUserId.textContent = userId;
    welcome.classList.add('welcome_active');
}

btn.addEventListener('click', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    const formData = new FormData(form);
    xhr.send(formData);

    xhr.addEventListener('load', e => {
        if (xhr.status === 200) {
            const responseObj = JSON.parse(xhr.response);

            if (responseObj.success) {
                const userId = responseObj.user_id;
                localStorage.setItem('userId', userId);
                formDiv.classList.remove('signin_active');
                welcomeUserId.textContent = userId;
                welcome.classList.add('welcome_active');
                console.log(responseObj);
            } else {
                alert('Неверные логин/пароль!');
            };
        }
        
    })
})
