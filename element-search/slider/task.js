const sliderArrowPrew = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

sliderArrowPrew.onclick = sliderPrew;
sliderArrowNext.onclick = sliderNext;

function slide(next) {
    let sliderItemNext, activeSlide;
    for (let i = 0; i < sliderItems.length; i++) {
        if ( sliderItems[i].className.includes('slider__item_active') ) {
            activeSlide = sliderItems[i];
            if (next === 'next') {
                sliderItemNext = sliderItems[i+1] !== undefined ? sliderItems[i+1] : sliderItems[0];
            } else if (next === 'prev') {
                sliderItemNext = sliderItems[i-1] !== undefined ? sliderItems[i-1] : sliderItems[sliderItems.length - 1];
            }
        }
    }
    sliderItemNext.classList.add('slider__item_active');
    activeSlide.classList.remove('slider__item_active');
}

function sliderPrew() {
    slide('prev');
};

function sliderNext() {
    slide('next');
};
