var settings = {
    cover: false,
    focus: 'center',
    autoWidth: true,
    updateOnMove: true,
    pagination: false,
    type: 'loop',
}
if ("ontouchstart" in document.documentElement) {
    settings.isNavigation = false;
    settings.arrows = true;
    settings.drag = true;
}
else {
    settings.isNavigation = true;
    settings.arrows = false;
    settings.drag = false;
}

// Create and mount the thumbnails slider.
var textSlider = new Splide('#text-slider', settings).mount();

// Create the main slider.
var imageSlider = new Splide('#image-slider', {
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
