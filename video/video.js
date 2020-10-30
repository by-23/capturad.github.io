// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].plyr.pause();
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[current].plyr.play();
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

for (const video of document.getElementsByTagName('video')) {
    var settings = {
        muted: true,
        controls: ['play', 'fullscreen']
    }
    if (video.parentElement.classList.contains("active")) {
        settings.autoplay = true;
    }
    var plyr = video.parentElement.plyr = new Plyr(video, settings);
    plyr.on("enterfullscreen", () => {
        // plyr.muted = false;
        plyr.volume = 1;
    })
}

// var settings = {
//     video: {
//         autoplay: true,
//         mute: true,
//         disableOverlayUI: true,
//         hideControls: true,
//         loop: true
//     },
//     trimSpace: true,
//     height: "75vh",
//     perPage: 1.5,
//     updateOnMove: true,
//     pagination: false,
//     focus: "center",
//     type: 'loop',
//     direction: 'ttb',
//     cover: true,
//     arrows: false
// }

// var videoSlider = new Splide('#video-slider', settings).mount(window.splide.Extensions);