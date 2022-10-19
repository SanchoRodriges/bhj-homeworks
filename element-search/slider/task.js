const sliderArrowPrew = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

sliderArrowPrew.onclick = () => slide('prev');
sliderArrowNext.onclick = () => slide('next');

function slide(next) {
    let sliderItemNext, slideCount, nextSlideIndex;

    let activeSlideIndex = sliderItems.findIndex( item => item.className.includes('slider__item_active') );

    if (next === 'next') {
        nextSlideIndex = activeSlideIndex < sliderItems.length - 1 ? activeSlideIndex + 1 : 0;
    } else if (next === 'prev') {
        nextSlideIndex = activeSlideIndex > 0 ? activeSlideIndex - 1 : sliderItems.length - 1;
    }

    sliderItems[nextSlideIndex].classList.add('slider__item_active');
    sliderItems[activeSlideIndex].classList.remove('slider__item_active');
}