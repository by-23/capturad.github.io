if ("ontouchstart" in document.documentElement) {
    location.href = '/mobile.html';
}

// Create and mount the thumbnails slider.
var textSlider = new Splide('#text-slider', {
    cover: false,
    focus: 'center',
    autoWidth: true,
    updateOnMove: true,
    pagination: false,
    type: 'loop',
    isNavigation: true,
    arrows: false,
    drag: false,
    lazyLoad: 'nearby',
}).mount();

// Create the main slider.
const imageSlider = new Splide('#image-slider', {
    type: 'fade',
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
    autoWidth: true,
    autoHeight: true,
    video: {
        autoplay: true,
        mute: true,
        disableOverlayUI: true,
        hideControls: true,
        loop: true,
    },
});

// Set the thumbnails slider as a sync target and then call mount.
imageSlider.sync(textSlider).mount(window.splide.Extensions);