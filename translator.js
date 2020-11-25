function translateTo(lang) {
    fetch('/lang/' + lang + '.json').then((r) => r.json()).then((json) => {
        document.querySelectorAll('*[translate]').forEach(element => {
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', json[0][element.getAttribute('translate')]);
            }
            else {
                element.innerText = json[0][element.getAttribute('translate')];
            }
        });
        localStorage.setItem('lang', lang);
    });
}

if (localStorage.getItem('lang')) {
    translateTo(localStorage.getItem('lang'));
}
else {
    translateTo(navigator.language.split('-')[0]);
}