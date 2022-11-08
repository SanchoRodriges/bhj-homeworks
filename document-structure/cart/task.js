//находим кнопки + и -
const controls = document.querySelectorAll('.product__quantity-control');
//изменение количества
for (let i = 0; i < controls.length; i++) {
    let control = controls[i];
    control.addEventListener('click', () => {
        //находим предка
        const parent = control.closest('.product__quantity-controls');
        //находим количество
        let quantity = parent.querySelector('.product__quantity-value');
        //новое количество
        let newQuantity = Number(quantity.textContent);
        //если минус
        if (control.classList.contains('product__quantity-control_dec')) {
            newQuantity = newQuantity > 2 ? newQuantity -= 1 : 1;
        //если плюс
        } else if (control.classList.contains('product__quantity-control_inc')) {
            newQuantity += 1;
        }
        //меняем количество
        quantity.textContent = newQuantity;
    })
}

//находим кнопки добавления в корзину
const addToCart = document.querySelectorAll('.product__add');

for (let i = 0; i < addToCart.length; i++) {
    const button = addToCart[i];
    button.addEventListener('click', () => {

        //находим корзину
        const cart = document.querySelector('.cart__products');
        //находим конкретный товар
        const product = button.closest('.product');
        //находим ID товара
        const productId = product.getAttribute('data-id');
        //находим количество
        let productQuantity = product.querySelector('.product__quantity-value').textContent;
        //находим изображение
        const productImage = product.querySelector('.product__image').src;
        //находим все товары в корзине
        const cartProducts = Array.from(cart.querySelectorAll('.cart__product'));

        //если в корзине нет товаров
        if(!cartProducts.length) {
            cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productQuantity}</div>
            </div>
            `);
        //если есть хоть один товар
        } else {
            //ищем товар с таким же ID
            let findProduct = cartProducts.find( item => item.getAttribute('data-id') === productId );
            //если есть - добавляем количество
            if (findProduct) {
                const cartProductCount = findProduct.querySelector('.cart__product-count');
                let newCartProductCount = Number(cartProductCount.textContent) + Number(productQuantity);
                cartProductCount.textContent = newCartProductCount;
            //если нет - добавляем товар
            } else {
                cart.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${productQuantity}</div>
                </div>`);
            }
        }

    })
    
}