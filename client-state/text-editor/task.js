//находим текстовое поле
const textarea = document.querySelector('#editor');
//находим текст в локальном хранилище
const storageText = localStorage.getItem('textContent');
//если в локальном хранилище есть текст, то записываем его в поле
if (storageText) {
    textarea.value = storageText;
}
//при изменении поля сохраняем текст в локальное хранилище
textarea.addEventListener('change', () => {
    localStorage.setItem('textContent', textarea.value);
})