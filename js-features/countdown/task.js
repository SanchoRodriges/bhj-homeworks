let timer = document.getElementById("timer");


const counter = function() {

    if (timer.textContent > 0) {
        timer.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(countInterval);
    }
}

countInterval = setInterval(counter, 1000);