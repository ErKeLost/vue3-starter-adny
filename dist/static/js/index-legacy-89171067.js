!(function () {
  function e(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var r =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator']
        if (null == r) return
        var n,
          o,
          i = [],
          a = !0,
          s = !1
        try {
          for (
            r = r.call(e);
            !(a = (n = r.next()).done) &&
            (i.push(n.value), !t || i.length !== t);
            a = !0
          );
        } catch (l) {
          ;(s = !0), (o = l)
        } finally {
          try {
            a || null == r.return || r.return()
          } finally {
            if (s) throw o
          }
        }
        return i
      })(e, t) ||
      r(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function t(e, t) {
    var n =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = r(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        n && (e = n)
        var o = 0,
          i = function () {}
        return {
          s: i,
          n: function () {
            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }
          },
          e: function (e) {
            throw e
          },
          f: i
        }
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    var a,
      s = !0,
      l = !1
    return {
      s: function () {
        n = n.call(e)
      },
      n: function () {
        var e = n.next()
        return (s = e.done), e
      },
      e: function (e) {
        ;(l = !0), (a = e)
      },
      f: function () {
        try {
          s || null == n.return || n.return()
        } finally {
          if (l) throw a
        }
      }
    }
  }
  function r(e, t) {
    if (e) {
      if ('string' == typeof e) return n(e, t)
      var r = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === r && e.constructor && (r = e.constructor.name),
        'Map' === r || 'Set' === r
          ? Array.from(e)
          : 'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? n(e, t)
          : void 0
      )
    }
  }
  function n(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
    return n
  }
  var o = document.createElement('style')
  ;(o.innerHTML =
    '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.dark{color-schema:dark}html,body,#app{height:100%;margin:0;padding:0}html.dark{background:#121212}#nprogress{pointer-events:none}#nprogress .bar{background:#fba;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #fba,0 0 5px #fba;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translateY(-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#fba;border-left-color:#fba;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}#--unocss--{layer:__ALL__}#--unocss-hash--{content:"a9edae43"}\n'),
    document.head.appendChild(o),
    System.register(['./vendor-legacy-283d0166.js'], function (r, n) {
      'use strict'
      var o, i, a, s, l, u, p, d
      return {
        setters: [
          function (e) {
            ;(o = e.r),
              (i = e.o),
              (a = e.c),
              (s = e.a),
              (l = e.b),
              (u = e.N),
              (p = e.d),
              (d = e.e)
          }
        ],
        execute: function () {
          var c = r('_', function (r, n) {
              var o,
                i = r.__vccOpts || r,
                a = t(n)
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  var s = e(o.value, 2),
                    l = s[0],
                    u = s[1]
                  i[l] = u
                }
              } catch (p) {
                a.e(p)
              } finally {
                a.f()
              }
              return i
            })({}, [
              [
                'render',
                function (e, t) {
                  var r = o('router-view')
                  return i(), a(r)
                }
              ]
            ]),
            f = function (e, t) {
              return e()
            },
            b = s({
              routes: [
                {
                  path: '/',
                  component: function () {
                    return f(function () {
                      return n.import('./index-legacy-82259deb.js')
                    })
                  }
                },
                {
                  path: '/:pathMatch(.*)*',
                  component: function () {
                    return f(function () {
                      return n.import('./not-found-legacy-48561762.js')
                    })
                  }
                }
              ],
              history: l()
            })
          b.beforeEach(function () {
            u.isStarted() || u.start()
          }),
            b.afterEach(function () {
              u.done()
            })
          var h = p()
          var m = d(c)
          m.use(b),
            (function (e) {
              e.use(h)
            })(m),
            m.mount('#app')
        }
      }
    })
})()
