const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    for (let i = 0; i < reveal.length; i++) {
        if (reveal[i].getBoundingClientRect().top < window.innerHeight) {
            reveal[i].classList.add('reveal_active');
        }
    }
});