/*! Code Rain Preview | (c) CreativeTier | contact@creativetier.com | http://www.creativetier.com */
function CodeRain_Utils() {
    "use strict";
    var i = this;
    this.version = function () {
        return "1.0.0"
    }
        ,
        this.isset = function (t) {
            return !(void 0 === t)
        }
        ,
        this.getInt = function (t) {
            return parseInt(t, 10)
        }
        ,
        this.random = function (t, e) {
            return i.isset(e) ? Math.floor(Math.random() * (e - t + 1) + t) : Math.floor(Math.random() * t)
        }
        ,
        this.extend = function (t, e) {
            return e
        }
        ,
        this.log = function (t, e) {
            t = "CodeRain: " + t,
                window.console && ("error" === e ? console.error(t) : "warn" === e ? console.warn(t) : console.log(t))
        }
}
var CodeRainUtils = new CodeRain_Utils;
function CodeRain_Template(t) {
    "use strict";
    var e, i, n;
    function o(t) {
        s()
    }
    function s(t) {
        void 0 === t && (t = !0),
            t && (e && e.resize(),
                i && i.position())
    }
    this.destroy = function () {
        e && e.destroy(),
            i && i.destroy(),
            n && n.destroy(),
            window.removeEventListener("resize", o)
    }
        ,
        t.rain && (e = new CodeRain_RainEffect(t.rain)),
        t.message && (i = new CodeRain_Message(t.message)),
        t.contextMessage && (n = new CodeRain_ContextMessage(t.contextMessage)),
        s(!1),
        window.addEventListener("resize", o)
}
function CodeRain_RainEffect(t, e) {
    "use strict";
    void 0 === e && (e = !0);
    var i, n, o, s, r, a = this, h = CodeRainUtils.extend({}, t), l = document.getElementById(h.elementId), c = l.children[0], d = c.getContext("2d"), f = l.children[1], u = f.getContext("2d"), g = null, p = null, w = [], m = !1;
    function v() {
        var t, e;
        for (d.fillStyle = h.overlayColor,
            d.fillRect(0, 0, c.width, c.height),
            d.fillStyle = h.textColor,
            d.font = h.fontSize + "px " + h.font,
            h.highlightFirstChar && (u.clearRect(0, 0, f.width, f.height),
                u.font = h.fontSize + "px " + h.font),
            t = 0; t < o; t++)
            e = i[CodeRainUtils.random(n)],
                d.fillText(e, h.columnWidth * t, h.rowHeight * w[t]),
                h.highlightFirstChar && (u.fillStyle = h.highlightFirstChar,
                    u.fillText(e, h.columnWidth * t, h.rowHeight * w[t])),
                w[t] > s && .975 < Math.random() && (w[t] = 0),
                w[t]++
    }
    this.resize = function () {
        g === l.offsetWidth && p === l.offsetHeight || (g = l.offsetWidth,
            p = l.offsetHeight,
            c.width = l.offsetWidth,
            c.height = l.offsetHeight,
            h.highlightFirstChar && (f.width = l.offsetWidth,
                f.height = l.offsetHeight),
            o = c.width / h.columnWidth,
            s = c.height / h.rowHeight,
            function () {
                var t;
                switch (h.direction) {
                    case "top-bottom":
                        for (t = 0; t < o; t++)
                            void 0 === w[t] && (w[t] = s + 1)
                }
            }())
    }
        ,
        this.start = function () {
            h.showStart || function () {
                for (var t = 0; t < 150; t++)
                    v()
            }(),
                r = setInterval(v, h.interval),
                m = !0
        }
        ,
        this.stop = function (t) {
            clearInterval(r),
                t && a.clear(),
                m = !1
        }
        ,
        this.clear = function () {
            d.clearRect(0, 0, c.width, c.height),
                h.highlightFirstChar && u.clearRect(0, 0, f.width, f.height)
        }
        ,
        this.isPlaying = function () {
            return m
        }
        ,
        this.destroy = function () {
            a.stop(!0),
                c.width = null,
                c.height = null,
                h.highlightFirstChar && (f.width = null,
                    f.height = null)
        }
        ,
        i = h.characters.split(""),
        n = i.length,
        a.resize(),
        e && a.start()
}
function CodeRain_Message(t) {
    "use strict";
    var e, i = this, n = CodeRainUtils.extend({}, t), o = document.getElementById(n.elementId);
    this.position = function () {
        o.style.left = Math.round((window.innerWidth - o.offsetWidth) / 2) + "px",
            o.style.top = Math.round((window.innerHeight - o.offsetHeight) / 2) + "px"
    }
        ,
        this.replay = function () {
            e.isPlaying() || e.replay()
        }
        ,
        this.destroy = function () {
            e.destroy(),
                o.style.left = "auto",
                o.style.top = "auto",
                n.replayOnClick && o.removeEventListener("click", i.replay),
                o.classList.remove("cr-show")
        }
        ,
        function () {
            switch (n.textEffect.effect) {
                case 1:
                    e = new CodeRain_TextEffect1(o, n.textEffect)
            }
            e.onChange = i.position,
                i.position(),
                n.replayOnClick && o.addEventListener("click", i.replay),
                o.classList.add("cr-show")
        }()
}
function CodeRain_ContextMessage(t, e) {
    "use strict";
    var i, o, s, r, n = this, a = CodeRainUtils.extend({}, t), h = document.getElementById(a.elementId), l = !1;
    function c(t) {
        n.show(t.clientX, t.clientY),
            t.preventDefault()
    }
    function d(t) {
        n.hide()
    }
    this.show = function (t, e) {
        var i, n;
        i = t + o > window.innerWidth ? t - o : t,
            n = e + s > window.innerHeight ? e - s : e,
            h.style.left = i + "px",
            h.style.top = n + "px",
            h.classList.add("cr-show"),
            r.start(),
            l = !0
    }
        ,
        this.hide = function () {
            l && (h.classList.remove("cr-show"),
                r.stop(),
                l = !1)
        }
        ,
        this.destroy = function () {
            r.destroy(),
                h.style.left = "auto",
                h.style.top = "auto",
                h.classList.remove("cr-show"),
                i.removeEventListener("contextmenu", c),
                document.removeEventListener("click", d)
        }
        ,
        function () {
            switch (a.textEffect.effect) {
                case 1:
                    r = new CodeRain_TextEffect1(h, a.textEffect, a.link, !1)
            }
            o = h.offsetWidth,
                s = h.offsetHeight,
                (i = void 0 === e ? document : document.getElementById(e)).addEventListener("contextmenu", c),
                document.addEventListener("click", d)
        }()
}
function CodeRain_TextEffect1(t, e, i) {
    "use strict";
    void 0 === i && (i = !0);
    var n, o, s, r, a, h, l = this, c = CodeRainUtils.extend({}, e), d = t, f = [], u = -1, g = !0, p = 0, w = !1;
    function m() {
        clearTimeout(h)
    }
    function v() {
        var t, e, i = "";
        for ((g && p === c.pendingTicks || !g && p === c.characterTicks) && (f[u] = s[u],
            u++,
            p = 0,
            g = !1),
            p++,
            c.wrappers && (i += c.wrappers[0]),
            c.link && (i += '<a href="' + c.link.url + '" target="' + c.link.target + '">'),
            e = f.length,
            t = 0; t < e; t++)
            i += f[t];
        if (e < r) {
            for (i += '<span style="color: ' + c.pendingColor + ';">',
                t = e; t < r; t++)
                c.highlightChar && !g && t === e && (i += '<span style="color: ' + c.highlightChar + ';">'),
                    i += n[CodeRainUtils.random(o)],
                    c.highlightChar && !g && t === e && (i += "</span>");
            i += "</span>"
        }
        c.link && (i += "</a>"),
            c.wrappers && (i += c.wrappers[1]),
            d.innerHTML = i,
            l.onChange && l.onChange(),
            u === r && (l.stop(),
                c.replay && (h = setTimeout(l.start, 1e3 * c.replay)))
    }
    this.onChange = null,
        this.start = function () {
            w && l.stop(),
                a = setInterval(v, c.interval),
                w = !0,
                c.replay && m()
        }
        ,
        this.stop = function () {
            clearInterval(a),
                f = [],
                u = -1,
                w = !(g = !(p = 0))
        }
        ,
        this.replay = function () {
            w && l.stop(),
                l.start()
        }
        ,
        this.isPlaying = function () {
            return w
        }
        ,
        this.destroy = function () {
            l.stop(),
                d.innerHtml = "",
                c.replay && m()
        }
        ,
        n = c.characters.split(""),
        o = n.length,
        s = c.message.split(""),
        r = s.length,
        function () {
            var t = "";
            t += '<span style="visibility: hidden;">',
                c.wrappers && (t += c.wrappers[0]);
            c.link && (t += '<a href="' + c.link.url + '" target="' + c.link.target + '">');
            t += c.message,
                c.link && (t += "</a>");
            c.wrappers && (t += c.wrappers[1]);
            t += "</span>",
                d.innerHTML = t
        }(),
        i && l.start()
}
