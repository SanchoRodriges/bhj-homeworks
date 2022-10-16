const modalMain = window.modal_main;
const modalSuccess = window.modal_success;
const closeModal = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add("modal_active");

for(i = 0; i < closeModal.length; i++) {
    close = closeModal[i];
    close.onclick = function() {
        this.closest('.modal').classList.remove("modal_active");
    }
}

showSuccess.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}