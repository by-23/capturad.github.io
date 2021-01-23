const content = document.getElementById('content');
const dialog = document.getElementById('dialog');

function toggleDialog(toggle) {
    if (toggle == undefined) {
        dialog.classList.toggle('open', !dialog.classList.contains('open'));
        content.classList.toggle('zoom-out', !content.classList.contains('zoom-out'));
    } else {
        dialog.classList.toggle('open', toggle);
        content.classList.toggle('zoom-out', toggle);
    }
}

if (dialog) {
    dialog.onclick = ev => {
        if (ev.target == dialog) {
            toggleDialog(false);
        }
    }
}

document.onkeydown = ev => {
    if (ev.key == 'Escape') {
        toggleDialog(false);
        toggleSubmenu(false);
    }
}

const form = document.querySelector('form');

function verifyCheckboxes() {
    const checkboxList = form.querySelector('ul');

    if (checkboxList) {
        var isNoOneChecked = true;

        checkboxList.querySelectorAll('input[type="checkbox"').forEach(checkbox => {
            if (checkbox.checked) {
                isNoOneChecked = false;
            }
        });

        checkboxList.classList.toggle('error', isNoOneChecked);

        return isNoOneChecked;
    }
    else {
        return false;
    }
}

function verifyInput(input) {
    input.classList.toggle('error', !input.validity.valid);
    input.value = input.value.trim();
    input.setAttribute('value', input.value.trim());
}

function sendEmail(sendButton) {
    var data = {};

    var isAllDone = true;

    form.querySelectorAll('input, textarea').forEach(input => {
        if (input.type == 'checkbox') {
            input.onchange = verifyCheckboxes;
            if (input.checked) {
                let label = input.parentElement.parentElement.parentElement.querySelector('label').innerText;
                let value = input.parentElement.querySelector('label').innerText;

                if (data[label] == undefined) {
                    data[label] = value;
                } else {
                    data[label] += ', ' + value;
                }
            }
        }
        else {
            if (!input.validity.valid) {
                isAllDone = false;
            }
            verifyInput(input);

            input.onchange = function () {
                verifyInput(input);
            }
            if (input.parentElement.querySelector('label')) {
                data[input.parentElement.querySelector('label').innerText] = input.value;
            }
            else {
                data[input.placeholder] = input.value;
            }
        }
    });

    verifyCheckboxes();

    var mail = '';
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            mail += '<b>' + key + '</b>' + ': ' + data[key];
            mail += '<br/>'
        }
    }
    console.log(mail);

    if (isAllDone && !verifyCheckboxes()) {
        if (sendButton) {
            sendButton.classList.add('loading');
            sendButton.classList.remove('done');
            sendButton.classList.remove('error');
        }
        Email.send({
            SecureToken: "3285c075-702c-4398-8dc8-b54ef499a7db",
            To: 'info@capturad.com',
            From: 'info@capturad.com',
            Subject: form.querySelector('input#name').value,
            Body: mail,
        })
            .then(message => {
                if (sendButton) {
                    sendButton.classList.remove('loading');
                    if (message == 'OK') {
                        sendButton.classList.add('done');
                    }
                    else {
                        sendButton.classList.add('error');
                    }
                }
            });

    }
}

(function () {
    var magicFocus;

    magicFocus = class magicFocus {
        constructor(parent) {
            var i, input, len, ref;
            this.show = this.show.bind(this);
            this.hide = this.hide.bind(this);
            this.parent = parent;
            if (!this.parent) {
                return;
            }
            this.focus = document.createElement('div');
            this.focus.classList.add('magic-focus');
            this.parent.classList.add('has-magic-focus');
            this.parent.appendChild(this.focus);
            ref = this.parent.querySelectorAll('input, textarea, select');
            for (i = 0,
                len = ref.length; i < len; i++) {
                input = ref[i];
                input.addEventListener('focus', function () {
                    return window.magicFocus.show();
                });
                input.addEventListener('blur', function () {
                    return window.magicFocus.hide();
                });
            }
        }

        show() {
            var base, base1, el;
            if (!(typeof (base = ['INPUT', 'SELECT', 'TEXTAREA']).includes === "function" ? base.includes((el = document.activeElement).nodeName) : void 0)) {
                return;
            }
            clearTimeout(this.reset);
            if (typeof (base1 = ['checkbox', 'radio']).includes === "function" ? base1.includes(el.type) : void 0) {
                el = document.querySelector(`[for=${el.id}]`);
            }
            this.focus.style.top = `${el.offsetTop || 0}px`;
            this.focus.style.left = `${el.offsetLeft || 0}px`;
            this.focus.style.width = `${el.offsetWidth || 0}px`;
            return this.focus.style.height = `${el.offsetHeight || 0}px`;
        }

        hide() {
            var base, el;
            if (!(typeof (base = ['INPUT', 'SELECT', 'TEXTAREA', 'LABEL']).includes === "function" ? base.includes((el = document.activeElement).nodeName) : void 0)) {
                this.focus.style.width = 0;
            }
            return this.reset = setTimeout(function () {
                return window.magicFocus.focus.removeAttribute('style');
            }, 200);
        }
    }
        ;

    // initialize
    window.magicFocus = new magicFocus(document.querySelector('#form'));

}
).call(this);

const submenu = document.getElementById('submenu')

function toggleSubmenu(toggle) {
    if (toggle == undefined) {
        submenu.classList.toggle('is-active', !submenu.classList.contains('is-active'));
        content.classList.toggle('zoom-in', !content.classList.contains('zoom-in'));
    } else {
        submenu.classList.toggle('is-active', toggle);
        content.classList.toggle('zoom-in', toggle);
    }
}

if (submenu) {
    submenu.onclick = ev => {
        if (ev.target == submenu) {
            toggleSubmenu(false);
        }
    }
}