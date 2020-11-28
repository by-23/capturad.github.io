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
        document.documentElement.lang = lang;
        if (typeof textSlider != 'undefined') {
            textSlider.go(textSlider.index);
        }
    });
}

if (localStorage.getItem('lang')) {
    translateTo(localStorage.getItem('lang'));
}
else {
    if (navigator.language.split('-')[0] == 'ru') {
        translateTo('ru');
    }
    else {
        translateTo('tr');
    }
}