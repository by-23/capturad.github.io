const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = slides.length - 1;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

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

    if (next == slides.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = slides.length - 1;
    }

    slides[current].classList.add("active");
    slides[current].plyr.play();
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

const settings = {
    muted: true,
    loop: { active: true },
    storage: { enabled: false },
    controls: ['play', 'fullscreen']
}

for (const video of document.getElementsByTagName('video')) {
    var plyr = video.parentElement.plyr = new Plyr(video, settings);
    plyr.on("enterfullscreen", (event) => {
        event.detail.plyr.muted = false;
    })
    plyr.on("exitfullscreen", (event) => {
        event.detail.plyr.muted = true;
    })
}