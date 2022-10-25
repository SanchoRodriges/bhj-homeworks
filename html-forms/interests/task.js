//находим все чекбоксы
const checkbox = Array.from(document.querySelectorAll('.interest__check'));

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {
        //находим родителя у нынешнего элемента
        const parent = checkbox[i].closest('.interest');
        //находим дочерние чекбоксы у родителя нынешнего чекбокса
        const checkboxChild = parent.querySelectorAll('.interest__check');
        //выбран чекбокс или нет
        let isChecked = checkbox[i].checked;
        //если checked, то дочерним ставим checked, или наоборот
        for (let e = 0; e < checkboxChild.length; e++) {
            checkboxChild[e].checked = isChecked;
        }
    });    
}