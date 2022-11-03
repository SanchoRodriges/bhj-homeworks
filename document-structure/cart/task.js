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
//добавление товара в корзину
for (let i = 0; i < addToCart.length; i++) {
    let button = addToCart[i];
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
        //находим товары в корзине
        let cartList = cart.querySelectorAll('.cart__product');
        //если товары уже есть
        if (cartList.length) {
            for (let n = 0; n < cartList.length; n++) {
                if (cartList[n].getAttribute('data-id') == productId) {
                    let cartQuantity = cartList[n].querySelector('.cart__product-count');
                    let oldCartQuantity = Number(productQuantity);
                    let newCartQuantity = Number(cartQuantity.textContent);
                    cartQuantity.textContent = newCartQuantity + oldCartQuantity;
                } else {
                    //создаём cart__product
                    let cartProduct = document.createElement('div');
                    cartProduct.classList.add('cart__product');
                    cartProduct.dataset.id = productId;
                    //создаём cart__product-image
                    let cartProductImg = document.createElement('img');
                    cartProductImg.classList.add('cart__product-image');
                    cartProductImg.src = productImage;
                    //создаём cart__product-count
                    let cartProductCount = document.createElement('div');
                    cartProductCount.classList.add('cart__product-count');
                    cartProductCount.textContent = productQuantity;
                    //собираем html
                    cartProduct.appendChild(cartProductImg);
                    cartProduct.appendChild(cartProductCount);
                    //добавляем в корзину
                    cart.appendChild(cartProduct);
                }
            }

        } else {
            //создаём cart__product
            let cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;
            //создаём cart__product-image
            let cartProductImg = document.createElement('img');
            cartProductImg.classList.add('cart__product-image');
            cartProductImg.src = productImage;
            //создаём cart__product-count
            let cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = productQuantity;
            //собираем html
            cartProduct.appendChild(cartProductImg);
            cartProduct.appendChild(cartProductCount);
            //добавляем в корзину
            cart.appendChild(cartProduct);
        }

    });
    
}