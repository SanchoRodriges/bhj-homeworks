//получаем блок с книгой
const book = document.querySelector('#book');
//получаем кнопки-переключатели
const controlSize = Array.from(document.querySelectorAll('.font-size'));

for (let i = 0; i < controlSize.length; i++) {
    controlSize[i].onclick = function() {
        //находим активный переключатель
        let activeControl = controlSize.findIndex( item => item.className.includes('font-size_active') );
        //если клик не по активному
        if (activeControl !== i) {
            //убираем активность у активного
            controlSize[activeControl].classList.remove('font-size_active');
            //добавляем активность выбранному
            controlSize[i].classList.add('font-size_active');
            //убираем класс book_fs-big
            book.classList.remove('book_fs-big');
            //убираем класс book_fs-small
            book.classList.remove('book_fs-small');
            //добавляем класс book_fs-small
            if (controlSize[i].classList.contains("font-size_small")) {
                book.classList.add('book_fs-small');
            }
            //добавляем класс book_fs-big
            if (controlSize[i].classList.contains("font-size_big")) {
                book.classList.add('book_fs-big');
            }
        }        

        //блокируем переход по ссылке
        return false;
    }
    
}