const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById('hole' + i);
    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent > 9) {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (lost.textContent > 4) {
            alert('Проигрыш!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}