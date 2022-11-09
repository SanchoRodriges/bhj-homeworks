const modal = document.querySelector('#subscribe-modal');

const modalClose = modal.querySelector('.modal__close');

if (document.cookie !== 'modal=false') {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    document.cookie = 'modal=false'
    modal.classList.remove('modal_active');
})