const content = document.getElementById('content');
const dialog = document.getElementById('dialog');
const buttonOpenDialog = document.getElementById('button-open-dialog');

function toggleDialog() {
    dialog.classList.toggle('open', !dialog.classList.contains('open'));
    content.classList.toggle('zoom-out', !content.classList.contains('zoom-out'));
}

buttonOpenDialog.onclick = toggleDialog;

dialog.onclick = (ev) => {
    if (ev.target == dialog) {
        toggleDialog();
    }
}

const form = document.querySelector('#form');

function sendEmail() {
    Email.send({
        SecureToken: "3285c075-702c-4398-8dc8-b54ef499a7db",
        To: 'info@capturad.com',
        From: 'info@capturad.com',
        Subject: form.querySelector('select').value,
        Body: form.querySelector('textarea').value,
    }).then(
        message => alert(message)
    );
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