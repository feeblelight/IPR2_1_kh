/*! For license information please see main.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
        562: (e, n, r) => {
            r.d(n, {Z: () => c});
            var t = r(81), o = r.n(t), a = r(645), i = r.n(a)()(o());
            i.push([e.id, "* {\r\n    margin: 0;\r\n    padding: 0;    \r\n    box-sizing: border-box;\r\n    font-family: 'Lora', serif;\r\n}\r\n\r\nbody {\r\n    background-color: #d9d3ee;\r\n    height: 100vh;\r\n}\r\n\r\nheader{\r\n    background-color: #393361;\r\n    color: #fff;\r\n    padding: .5rem 2rem;\r\n}\r\n\r\nbutton {   \r\n    background-color: #393361;\r\n    color: #fff;\r\n    border: none;\r\n    -webkit-appearance: none;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    padding: 0 1.5rem;\r\n    vertical-align: middle;\r\n    font-size: 1rem;\r\n    line-height: 2rem;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    max-width: 40%;\r\n    margin-right: 2rem;\r\n}\r\n.menu .menu__sources {\r\n    padding: 1rem 0;\r\n}\r\n\r\n.menu .menu__title {\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.search {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    height: 2rem;\r\n}\r\n\r\n.search__input {\r\n    flex: 1;\r\n    padding: 0 .5rem;\r\n}\r\n\r\n.search__button {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n.content{\r\n    position: relative;;\r\n}\r\n\r\n.content__data{    \r\n    margin-left: 2rem;\r\n    width: 60%;\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1.5rem;\r\n    padding: 1.5rem 0;\r\n}\r\n\r\n.display-none {\r\n    display: none;\r\n}\r\n\r\n.source {\r\n    margin-bottom: 9px;\r\n}\r\n\r\n.source__checkbox{\r\n    cursor: pointer;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.card {\r\n    width: 100%;\r\n    background-color: #fff;\r\n}\r\n\r\n.card__title {    \r\n    font-size: 1.5rem;\r\n    padding: 0 20px;\r\n    margin: 9px 0;\r\n}\r\n\r\n.card__text {\r\n    padding: 0 20px;\r\n    margin-bottom: 9px;\r\n}\r\n\r\n.card__image {\r\n    width: 100%;\r\n    margin-bottom: 9px;\r\n    padding: 0;\r\n}\r\n\r\n.card__url {\r\n    display: block;\r\n    padding: 0 20px;\r\n    margin-bottom: 9px;\r\n    color: #393361;\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n}\r\n\r\n.load-more {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n}\r\n\r\n.load-more__text:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.no-items {\r\n    font-size: x-large;\r\n    display:inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}", ""]);
            const c = i
        }, 645: e => {
            e.exports = function (e) {
                var n = [];
                return n.toString = function () {
                    return this.map((function (n) {
                        var r = "", t = void 0 !== n[5];
                        return n[4] && (r += "@supports (".concat(n[4], ") {")), n[2] && (r += "@media ".concat(n[2], " {")), t && (r += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), r += e(n), t && (r += "}"), n[2] && (r += "}"), n[4] && (r += "}"), r
                    })).join("")
                }, n.i = function (e, r, t, o, a) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var i = {};
                    if (t) for (var c = 0; c < this.length; c++) {
                        var s = this[c][0];
                        null != s && (i[s] = !0)
                    }
                    for (var l = 0; l < e.length; l++) {
                        var d = [].concat(e[l]);
                        t && i[d[0]] || (void 0 !== a && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = a), r && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = r) : d[2] = r), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), n.push(d))
                    }
                }, n
            }
        }, 81: e => {
            e.exports = function (e) {
                return e[1]
            }
        }, 379: e => {
            var n = [];

            function r(e) {
                for (var r = -1, t = 0; t < n.length; t++) if (n[t].identifier === e) {
                    r = t;
                    break
                }
                return r
            }

            function t(e, t) {
                for (var a = {}, i = [], c = 0; c < e.length; c++) {
                    var s = e[c], l = t.base ? s[0] + t.base : s[0], d = a[l] || 0, u = "".concat(l, " ").concat(d);
                    a[l] = d + 1;
                    var p = r(u), m = {css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5]};
                    if (-1 !== p) n[p].references++, n[p].updater(m); else {
                        var f = o(m, t);
                        t.byIndex = c, n.splice(c, 0, {identifier: u, updater: f, references: 1})
                    }
                    i.push(u)
                }
                return i
            }

            function o(e, n) {
                var r = n.domAPI(n);
                r.update(e);
                return function (n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
                        r.update(e = n)
                    } else r.remove()
                }
            }

            e.exports = function (e, o) {
                var a = t(e = e || [], o = o || {});
                return function (e) {
                    e = e || [];
                    for (var i = 0; i < a.length; i++) {
                        var c = r(a[i]);
                        n[c].references--
                    }
                    for (var s = t(e, o), l = 0; l < a.length; l++) {
                        var d = r(a[l]);
                        0 === n[d].references && (n[d].updater(), n.splice(d, 1))
                    }
                    a = s
                }
            }
        }, 569: e => {
            var n = {};
            e.exports = function (e, r) {
                var t = function (e) {
                    if (void 0 === n[e]) {
                        var r = document.querySelector(e);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                        n[e] = r
                    }
                    return n[e]
                }(e);
                if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                t.appendChild(r)
            }
        }, 216: e => {
            e.exports = function (e) {
                var n = document.createElement("style");
                return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
            }
        }, 565: (e, n, r) => {
            e.exports = function (e) {
                var n = r.nc;
                n && e.setAttribute("nonce", n)
            }
        }, 795: e => {
            e.exports = function (e) {
                var n = e.insertStyleElement(e);
                return {
                    update: function (r) {
                        !function (e, n, r) {
                            var t = "";
                            r.supports && (t += "@supports (".concat(r.supports, ") {")), r.media && (t += "@media ".concat(r.media, " {"));
                            var o = void 0 !== r.layer;
                            o && (t += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), t += r.css, o && (t += "}"), r.media && (t += "}"), r.supports && (t += "}");
                            var a = r.sourceMap;
                            a && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleTagTransform(t, e, n.options)
                        }(n, e, r)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    }
                }
            }
        }, 589: e => {
            e.exports = function (e, n) {
                if (n.styleSheet) n.styleSheet.cssText = e; else {
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(e))
                }
            }
        }
    }, n = {};

    function r(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var a = n[t] = {id: t, exports: {}};
        return e[t](a, a.exports, r), a.exports
    }

    r.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return r.d(n, {a: n}), n
    }, r.d = (e, n) => {
        for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {enumerable: !0, get: n[t]})
    }, r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = r(379), n = r.n(e), t = r(795), o = r.n(t), a = r(569), i = r.n(a), c = r(565), s = r.n(c), l = r(216),
            d = r.n(l), u = r(589), p = r.n(u), m = r(562), f = {};
        f.styleTagTransform = p(), f.setAttributes = s(), f.insert = i().bind(null, "head"), f.domAPI = o(), f.insertStyleElement = d();
        n()(m.Z, f);
        m.Z && m.Z.locals && m.Z.locals;
        const h = "93dbe96ca8fd470ba02ae1e85f22307e";
        const g = new function () {
            this.state = {pageSize: 5, page: 1, sources: [], q: "", showMore: !0}, this.loadPage = e => {
                (async function ({sources: e, pageSize: n, page: r, q: t}) {
                    let o = `https://newsapi.org/v2/top-headlines?apiKey=${h}&language=en&pageSize=${n}&page=${r}`;
                    return e && e.length && (o += `&sources=${e.join(",")}`), t && (o += `&q=${t}`), (await fetch(encodeURI(o))).json()
                })(e = Object.assign({}, this.state, e)).then((n => (this.state = e, this.state.showMore = e.page * e.pageSize < Math.min(40, n.totalResults), Promise.resolve(n.articles)))).then((e => {
                    !function (e, n, r) {
                        const t = document.getElementById("wrapper");
                        if (r) for (window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }); t.lastElementChild;) t.removeChild(t.lastElementChild);
                        const o = document.getElementById("templates").querySelector(".card");
                        t.lastElementChild && t.lastElementChild.classList.contains("load-more") && t.removeChild(t.lastElementChild);
                        for (const n of e) {
                            const e = o.cloneNode(!0);
                            e.querySelector(".card__title").innerText = n.title, e.querySelector(".card__text").innerText = n.description, e.querySelector(".card__image").src = n.urlToImage;
                            const r = e.querySelector(".card__url");
                            r.href = n.url, r.innerText = `Read more on ${n.source.name} >>`, t.appendChild(e)
                        }
                        if (t.children.length) {
                            if (n) {
                                const e = document.getElementById("templates").querySelector(".load-more").cloneNode(!0);
                                e.onclick = y, t.appendChild(e)
                            }
                        } else t.appendChild(document.getElementById("templates").querySelector(".no-items").cloneNode(!0))
                    }(e, this.state.showMore, 1 === this.state.page)
                }))
            }, this.loadNextPage = () => {
                this.loadPage({page: this.state.page + 1})
            }, this.filterBySources = e => {
                this.loadPage({page: 1, sources: e})
            }, this.filterByQuery = e => {
                this.loadPage({page: 1, q: e})
            }
        };

        function y() {
            g.loadNextPage()
        }

        function v() {
            const e = [...document.getElementById("sources").children].map((e => e.querySelector(".source__checkbox"))).filter((e => e.checked)).map((e => e.id));
            g.filterBySources(e)
        }

        function x() {
            const e = document.getElementById("search").value;
            g.filterByQuery(e)
        }

        document.getElementById("search").onchange = x, document.getElementById("search-button").onclick = x, async function () {
            const e = `https://newsapi.org/v2/top-headlines/sources?apiKey=${h}&language=en`;
            return (await fetch(encodeURI(e))).json()
        }().then((e => function (e) {
            const n = document.getElementById("templates").children[2], r = e.map((e => {
                const r = n.cloneNode(!0);
                r.querySelector(".source__checkbox").id = e.id;
                const t = r.querySelector(".source__label");
                return t.htmlFor = e.id, t.innerText = e.name, r.onchange = v, r
            }));
            document.getElementById("sources").append(...r.slice(0, 100))
        }(e.sources))), g.loadPage()
    })()
})();
