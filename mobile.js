var imageSwiper = new Swiper('#image-swiper', {
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    effect: 'fade',
})

var textSwiper = new Swiper('#text-swiper', {
    loop: true,
    loopedSlides: 3,
    slidesPerView: '2',
    centeredSlides: true,
    slideToClickedSlide: true,
    mousewheel: true,
    direction: getDirection(),
    effect: 'coverflow',
    on: {
        resize: function () {
            textSwiper.changeDirection(getDirection());
        },
        slideChange: function (swiper) {
            imageSwiper.slideTo(swiper.realIndex);
        }
    },
    passiveListeners: false,
})

function getDirection() {
    if (window.innerWidth <= window.innerHeight) {
        document.querySelectorAll('.swiper-slide-shadow-left, .swiper-slide-shadow-right').forEach(element => {
            element.remove();
        });
        return 'vertical'
    } else {
        document.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-bottom').forEach(element => {
            element.remove();
        });
        return 'horizontal'
    }
}