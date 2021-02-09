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
        document.documentElement.lang = lang;
        if (typeof textSlider != 'undefined') {
            textSlider.go(textSlider.index);
        }
    });
}

if (navigator.language.split('-')[0] == 'ru') {
    translateTo('ru');
}
else {
    translateTo('tr');
}