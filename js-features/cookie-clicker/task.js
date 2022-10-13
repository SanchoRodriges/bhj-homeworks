const cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
    if (counter.textContent % 2 === 0) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }
    counter.textContent = +counter.textContent + 1;
}